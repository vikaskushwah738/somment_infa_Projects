import ServicesCard from "./ServicesCard"
import dummyData from "@/data"
import Link from "next/link";
const Services = () => {
  return (
    <section className="lg:px-20 md:px-10 px-5 py-10 text-blue-950 ">
      <h2 className="lg:text-4xl md:text-3xl text-2xl text-center">Our Engineering Consultancy Services</h2>
      <p className="text-base pt-3 text-center lg:px-8 md:px-5 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti cum praesentium possimus ut, ullam veritatis nulla vel autem iusto eveniet</p>
      <div className="flex gap-5 justify-center items-center flex-wrap lg:pt-14 md:pt-10 pt-5">
        {dummyData.map((data: any) => (<ServicesCard key={data.heading} {...data} />))}
        <Link  href='services' className="py-2 px-5 rounded-xl hover:text-blue-800 hover:border-blue-800 border-2  hover:bg-gray-50 cursor-pointer bg-blue-800 text-gray-50">
          learn more
        </Link>
      </div>
    </section>
  )
}

export default Services