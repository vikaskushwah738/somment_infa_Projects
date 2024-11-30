import Link from "next/link";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaThList, FaDatabase } from "react-icons/fa";
import { MdPostAdd, MdUpdate } from "react-icons/md";

export default function SideBar() {
    const link = [
        {
            name: 'Dashboard',
            link: '/admin',
            icon: <AiOutlineDashboard />
        },
        // {
        //     name: 'Careers Form',
        //     link: '/admin/careersinfo',
        //     icon: <FaDatabase />
        // },
        {
            name: 'News',
            link: '/admin/news-updates',
            icon: <MdPostAdd />
        },
        {
            name: 'Category',
            link: '/admin/news-category',
            icon: <MdUpdate />
        },
        // {
        //     name: 'Projects',
        //     link: '/admin/projectsUpdates',
        //     icon: <FaThList />
        // }
    ]
    return (
        <aside className="w-[25%] lg:h-[900px] h-auto  border-r lg:px-3 md:px-10 px-5 bg-blue-50">
            <h2 className='rounded-xl mt-5 text-center py-6 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
                <span className="bg-gradient-to-b from-gray-50  via-blue-100 to-blue-500 inline-block text-transparent bg-clip-text text-5xl font-medium ">Admin</span>
            </h2>
            <ul className="flex flex-col gap-6 w-full pt-5">
                {link.map((item) => {
                    return <Link
                        key={item.name}
                        href={item.link}
                        className="flex items-center font-semibold text-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400">
                        <span className="text-blue-800 text-xl">{item.icon}</span>
                        <samp>{item.name}</samp>
                    </Link>
                })}
            </ul>


        </aside>
    )
}