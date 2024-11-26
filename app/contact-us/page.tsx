import ContactForm from "@/components/ContactForm";
import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Contact from '@/public/contact.webp'
export default function ContactUs() {
  return (
    <main className="lg:pt-28 md:pt-24 pt-20">
      <section className=''>
        <div className="relative w-full lg:h-[450px] md:h-[450px] h-[250px]">
          <Image
            src='https://res.cloudinary.com/dopolikju/image/upload/v1732537114/contact_gqbvqw.webp'
            alt="about us image"
            fill
            style={{ objectFit: 'fill' }}
            className='absolute'
            priority
          />
        </div>
      </section>
      <section className="lg:flex lg:gap-5 py-10 lg:px-20 md:px-10 px-5 text-blue-950">
        <div className="lg:w-1/2 ">
          <h2 className="text-3xl font-bold text-blue-600  mb-6">
            <span className="border-b-2 border-gray-950 ">Offic</span>e Address
          </h2>
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-blue-700">
              Sommet Infra Projects PVT LTD
            </h3>
            <div>
              <h4 className="text-lg font-normal">Corporate Office:</h4>
              <p className=" mt-1">
                3-floor, <br />
                Saroor Nagar Rd, beside Indian Overseas Bank,
                <br />
                Rajyalaxmi Nagar, SBH Colony, L.B. Nagar,
              </p>
              <p>Hyderabad, Telangana, 500074</p>
            </div>
            <div>
                <h4 className="text-lg font-medium">Email</h4>
                <p className="flex items-center gap-3 pt-3">
                <MdOutlineEmail />

                  <a
                    href="mailto:srinivasulu.kunchala@kdmengineers.com"
                    className="text-blue-500 hover:underline"
                  >
                    info@sommetinfra.com
                  </a>
                </p>
           </div>
            <div>
            <h4 className="text-lg font-medium ">Contact</h4>
            <p className="flex items-center gap-3 pt-3"><FaPhoneAlt /> phone : +91 4048447585</p>
            </div>


          </div>
        </div>
         <ContactForm /> 
      </section>

    </main>
  )
}

