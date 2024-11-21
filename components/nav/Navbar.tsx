'use client'
import Image from 'next/image';
import Logo from '@/public/highways.jpg'
import { IoMdMenu } from 'react-icons/io';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';
import Tabs from './Tabs';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
    <nav className="bg-blue-400 fixed z-20 w-full flex justify-between items-center lg:h-28 md:h-24 h-20 px-5 md:px-11">
      <div className="relative  lg:h-20 lg:w-40 md:h-20 md:w-40 h-16 w-32">
        <Image
          alt="Eclat Engineering Consultants Logo"
          src={Logo}
          fill
          style={{ objectFit: 'fill' }}
          className="absolute rounded-2xl bg-white"
          priority
        />
      </div>
     
      <div className="flex flex-col  items-end">
        <ul className="space-x-10 hidden lg:flex lg:items-center  text-gray-900">
           <Tabs/> 
          {/* {session && <Logout />} */}
        </ul>
      </div>
      <div className="text-[#75723E] text-3xl lg:hidden">
        <button onClick={toggleNavbar}>
          <span className="sr-only">{isOpen ? 'Close navigation' : 'Open navigation'}</span>
          {isOpen ? <IoMdCloseCircleOutline  /> : <IoMdMenu />}
        </button>
      </div>
    </nav>
    {isOpen && (
      <ul onClick={toggleNavbar} className="lg:hidden fixed top-0 right-0 space-y-3 w-[75%] h-screen text-gray-700  bg-gray-200 bg-opacity-70 z-10 flex flex-col items-center pt-28 md:px-10 px-5">
        
      </ul>
    )}
  </header>
  )
}
