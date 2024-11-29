import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";
import { Metadata } from "next";


const NewCategory = () => {
  return (

    <div className="w-[75%] px-5 p-5">
      <div className="flex justify-between items-center py-5 px-8 rounded-xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-400">
        <h1 className="text-2xl font-medium">Category</h1>
        <Link href={'/admin/news-category/news-category-form'} className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-400 rounded-full px-4 py-2 flex gap-3 items-center ">
            <MdAddCircleOutline className="text-2xl text-blue-800 hover:text-blue-950" />
            <span className="font-semibold text-xl text-white hover:text-blue-950">ADD</span>
        </Link>
      </div>

    </div>

  )
}

export default NewCategory