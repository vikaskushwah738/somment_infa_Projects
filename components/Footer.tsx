import Image from 'next/image';
import Logo from '@/public/highways.jpg'
export default function Footer() {
    return (
        <footer className="bg-blue-400 text-white">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 pb-10 py-8">
                <div className="flex flex-col md:flex-row md:justify-between">
                    {/* <!-- Logo and Description --> */}
                    <div className="flex-1 mb-6 md:mb-0 px-7">
                        <div className='flex justify-center pb-6'>
                        <Image src={Logo}
                            alt="Company Logo"
                            height={100}
                            width={150}
                        />
                        </div>
                        
                        <p className="text-sm">
                             We provide high-quality solutions to meet your needs.
                        </p>
                    </div>

                    {/* <!-- Useful Links --> */}
                    <div className="flex-1 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
                        <ul className="list-none">
                            <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
                            <li><a href="/blog" className="text-sm hover:underline">Blog</a></li>
                            <li><a href="/faq" className="text-sm hover:underline">FAQs</a></li>
                            <li><a href="/privacy-policy" className="text-sm hover:underline">Career</a></li>
                        </ul>
                    </div>

                    {/* <!-- Our Services --> */}
                    <div className="flex-1 mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2 ">Our Services</h4>
                        <ul className="list-none">
                            <li><a href="/service1" className="text-sm hover:underline">Service 1</a></li>
                            <li><a href="/service2" className="text-sm hover:underline">Service 2</a></li>
                            <li><a href="/service3" className="text-sm hover:underline">Service 3</a></li>
                            <li><a href="/service4" className="text-sm hover:underline">Service 4</a></li>
                        </ul>
                    </div>

                    {/* <!-- Reach Us --> */}
                    <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2 ">Reach Us</h4>
                           
                        <p className="text-sm">3-floor Saroor Nagar Rd, beside Indian overseas Bank, Rajyalaxmi Nagar, SBH Colony, L. B. Nagar,<br />Hyderabad, Telangana, 500074</p>
                        <p className="text-sm">Email: info@sommitinfra.com</p>
                        <p className="text-sm">Phone: (123) 456-789</p>
                    </div>
                </div>


            </div>
            <div className="text-center text-sm bg-blue-500 py-5">
                &copy; 2024 SOMMET INFRA PROJECTS PRIVATE LIMITED. All rights reserved.
            </div>
        </footer>


    )
}

