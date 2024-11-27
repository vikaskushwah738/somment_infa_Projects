import Image from 'next/image';
import Logo from '@/public/sommet-logo.png'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa';
export default function Footer() {
    return (
        <footer className="bg-blue-400 text-white">
            <div className="p-2 md:px-10 md:py-10 grid px-5 md:grid-cols-[1.5fr_1fr_1fr_1.5fr_1.5fr] gap-5">

                {/* Logo and Description */}
                <section className="mb-12 md:mb-0">
                    <div className="flex justify-center pb-6 pt-12">
                        <Image
                            src={Logo}
                            alt="Company Logo"
                            height={100}
                            width={150}
                        />
                    </div>
                    <p className="txt-lg font-medium">Sommit Infra Projects Private Limited</p>
                    <p className="text-sm">We provide high-quality solutions to meet your needs.</p>
                </section>

                {/* Useful Links */}
                <section className="mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">USEFUL LINKS</h4>
                    <ul className="list-none space-y-1">
                        <li><a href="/about" className="text-sm hover:underline">Home</a></li>
                        <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
                        <li><a href="/about" className="text-sm hover:underline">Services</a></li>
                        <li><a href="/about" className="text-sm hover:underline">Get in Touch</a></li>
                    </ul>
                </section>

                {/*  Quick Links   */}
                <section className="mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">QUICK LINK</h4>
                    <ul className="list-none space-y-1">
                        <li><a href="/about" className="text-sm hover:underline">Projects</a></li>
                        <li><a href="/about" className="text-sm hover:underline">Gallery</a></li>
                        <li><a href="/about" className="text-sm hover:underline">News</a></li>
                        <li><a href="/privacy-policy" className="text-sm hover:underline">Career</a></li>
                    </ul>
                </section> 

                 {/*  Our Services */}
                <section className="mb-6 md:mb-0">
                    <h4 className="text-lg font-semibold mb-2">OUR SERVICES</h4>
                    <ul className="list-none space-y-1">
                        <li><a href="/services/technical-due-diligence" className="text-sm hover:underline leading-none">Technical Due Diligence</a></li>
                        <li><a href="/services/detailed-engineering-and-dpr" className="text-sm hover:underline">Detailed Engineering / DPR</a></li>
                        <li><a href="/services/o-and-m-assessment" className="text-sm hover:underline">O & M Assessment (Operation and Maintenance Assessment)</a></li>
                        <li><a href="/services/road-safety-audit-and-action-plans" className="text-sm hover:underline">Road Safety Audits and Action Plans</a></li>
                        {/* <li><a href="/service2" className="text-sm hover:underline">Pavement Investigation, Design and Review</a></li>
                        <li><a href="/service3" className="text-sm hover:underline">Structural Condition Assessment & NDT</a></li> */}
                        <li><a href="/services/proof-checking" className="text-sm hover:underline">Proof Checking</a></li>
                        <li><a href="/services/project-management-consultancy" className="text-sm hover:underline">Project Management Consultancy</a></li>
                        <li><a href="/services/material-testing-laboratory" className="text-sm hover:underline">Material Testing Laboratory Services</a></li>
                    </ul>
                </section>

                {/* <!-- Reach Us --> */}
                <section className="mb-16 md:mb-0"> 
                    <h4 className="text-lg font-semibold mb-2">REACH US</h4>
                    <p className="text-sm">3-floor Saroor Nagar Rd, beside Indian Overseas Bank, Rajyalaxmi Nagar, SBH Colony, L.B. Nagar,<br />Hyderabad, Telangana, 500074</p>
                    <p className="text-sm">Email: info@sommitinfra.com</p>
                    <p className="text-sm">Phone: +91 4048447585</p>
                    <h5 className='pt-7 font-medium text-lg'>Follow Us</h5>
                    <div className="flex gap-5 justify-center items-center mb-10 pt-3">
                        <Link
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label=""
                            title="So Efforts Solution Facebook"
                        >
                            <FaFacebook size={30} />
                        </Link>
                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram account  "
                            title="So Efforts Solution Instagram"
                        >
                            <FaInstagram size={30} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin account "
                            title="So Efforts Solution Linkedin"
                        >
                            <FaLinkedin size={30} />
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter account "
                            title="So Efforts Solution Twitter"
                        >
                            <FaTwitter size={30} />
                        </Link>
                    </div>
                </section>

            </div>
        </footer>



    )
}

