import Image from 'next/image';
import services from '@/public/tech-city.png'
import SideBar from './components/SideBar';
import { Toaster } from 'react-hot-toast';
export default function Layout({ children }: any) {
    return (
        <main className='lg:pt-28 md:pt-24 pt-20 flex'>
            <SideBar />
            {children}
       
        </main>
    )
}