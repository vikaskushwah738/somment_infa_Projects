import ContactForm from "@/components/ContactForm";
import Image from 'next/image';
import Contact from '@/public/contact.webp'
export default function ContactUs() {
  return (
    <main className="lg:pt-28 md:pt-24 pt-20">
      <section className=''>
        <div className="relative w-full lg:h-[450px] md:h-[450px] h-[250px]">
          <Image
            src={Contact}
            alt="about us image"
            fill
            style={{ objectFit: 'fill' }}
            className='absolute'
            priority
          />
        </div>
      </section>
      <section className="lg:flex lg:gap-5 py-10 lg:px-20 md:px-10 px-5">
        <div className="lg:w-1/2 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-blue-600">
              Sommet Infra Projects Private Limited
            </h3>
            <p className="text-gray-700 mt-1">
              3-floor Saroor Nagar Rd, beside Indian Overseas Bank, Rajyalaxmi Nagar, SBH Colony, L.B. Nagar,
            </p>
            <p>Hyderabad, Telangana, 500074</p>
            <div>
              <h4 className="text-lg font-medium text-gray-800">Email</h4>
              <p className="text-gray-700">
                <a
                  href="mailto:srinivasulu.kunchala@kdmengineers.com"
                  className="text-blue-500 hover:underline"
                >
                  info@sommetinfra.com
                </a>
              </p>
            </div>


            <h4 className="text-lg font-medium text-gray-800">Contact</h4>
            <p>phone : +91 4048447585</p>

          </div>
        </div>
        <ContactForm />
      </section>

    </main>
  )
}

