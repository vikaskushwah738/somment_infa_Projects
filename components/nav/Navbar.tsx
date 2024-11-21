import Image from 'next/image';
import Logo from '@/public/highways.jpg'
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center lg:px-20 md:px-10 px-5 h-14 bg-blue-400">
      <div>
        <Image
          src={Logo}
          alt="Description of image"
          width={100}
          height={40}
        />
      </div>
      <ul className="flex gap-14">
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Project</li>
        <li>Career</li>
        <li>Contact-us</li>
      </ul>
    </div>
  )
}
