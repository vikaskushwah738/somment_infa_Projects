'use client'

import { toast, } from 'react-hot-toast';
import { useState } from "react";
import { IoMdImage } from "react-icons/io";
import dynamic from 'next/dynamic';
import Category from '../../components/Category';



export default function NewsForm() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publicId, setPublicId] = useState('');



  return (
    <div className="w-[75%]">
      <h1 className="text-2xl pb-5 px-5 font-medium pt-10">Add You News Here</h1>
      <div className="pb-5 md:px-10 flex justify-center">
        <form  className="px-5 border-2 border-blue-500 rounded-xl  w-[70%]">
          <div className="pb-2 pt-5">
            <label htmlFor="title" className="flex text-blue-950 mb-1 gap-1">
              News Title <span className="text-red-700">*</span>
            </label>
            <input
              type='text'
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Your Project Title.."
              className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
            />
          </div>
          <div className="pb-2">
            <label htmlFor="newsSlug" className="flex text-blue-950 mb-1 gap-1">
              News Slug <span className="text-red-700">*</span>
            </label>
            <input
              type='text'
              id="newsSlug"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="News Slug, which is a URL shown on screen when you open this page."
              className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
            />
          </div>


         
          <div className="flex justify-center rounded-2xl pb-2 mt-4">
            <input
              type="submit"
              value="Submit"
              className="w-1/4 py-1.5 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50"
            />
          </div>
        </form>
      </div >
    </div >
  )
}