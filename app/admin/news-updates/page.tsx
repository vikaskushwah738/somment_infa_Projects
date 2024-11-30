import Link from "next/link";
import { MdAddCircleOutline } from "react-icons/md";
import AdminNewsFatch from "../components/Newsfatch";

const NewUpdateForm = () => {
  return (
    <div className="w-[75%] px-5 p-5">
      <div className="flex justify-between items-center py-7 px-8 rounded-xl bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <h1 className="text-2xl font-medium">News</h1>
        <Link href={'/admin/news-updates/news-update-form'} className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-400 rounded-full px-4 py-2 flex gap-3 items-center ">
            <MdAddCircleOutline className="text-2xl text-blue-800 hover:text-blue-950" />
            <span className="font-semibold text-xl text-white hover:text-blue-950">ADD</span>
        </Link>
      </div>
      <section className=" flex-wrap flex gap-5 py-10">
      <AdminNewsFatch></AdminNewsFatch>
      </section>
  
    </div>

  )
}

export default NewUpdateForm