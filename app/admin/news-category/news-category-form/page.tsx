
import { CategoryFrom } from "../../components/CategoryFrom"

export default function CategoryFormMain() {
  
  return (
    <div className="w-[75%] px-10">
      <h1 className="text-2xl pb-5 px-5 font-medium pt-10">Add You Category Here</h1>
      <section className="flex justify-center items-center pt-24">
        <CategoryFrom/>
      </section>
      
    </div >
  )
}