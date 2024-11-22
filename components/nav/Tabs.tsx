import React, { useState } from "react";
import { Tab } from "./Tab";
import { NavLinks } from "@/types/testimonials"; // Adjust the import to fit your project structure
import Link from "next/link";

const Tabs = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let dropdownTimeout: NodeJS.Timeout;

    const links: NavLinks[] = [
        { title: "Home", path: "/", hasDropdown: false },
        { title: "About us", path: "/about-us", hasDropdown: false },
        { title: "Services", path: "/services", hasDropdown: true },
        { title: "Projects", path: "/projects", hasDropdown: false },
        { title: "Gallery", path: "/gallery", hasDropdown: false },
        { title: "News", path: "/news", hasDropdown: false },
        { title: "Get in Touch", path: "/contact-us", hasDropdown: false },
    ];

    const handleMouseEnter = () => {
        clearTimeout(dropdownTimeout); // Cancel any pending close action
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        // Delay closing to prevent instant closure during brief mouse movements
        dropdownTimeout = setTimeout(() => {
            setDropdownOpen(false);
        }, 200); // Adjust delay as needed
    };

    return (
        <>
            {links.map((link) => (
                <li
                    key={link.title}
                    className="relative"
                    onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                    onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
                >
                    <Tab key={link.title} {...link} />
                    {link.hasDropdown && dropdownOpen && link.title === "Services" && (
                        <div
                            className="absolute left-0 mt-7 bg-blue-400 border border-gray-300 shadow-lg z-10 w-72 px-3"
                            onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over it
                            onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
                        >
                            <ul className="flex flex-col space-y-1">
                                <li>
                                    <Link
                                        className="block text-gray-900 hover:underline"
                                        href="/service1"
                                    >
                                        Structural Health Monitoring
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block  text-gray-900 hover:underline"
                                        href="/service2"
                                    >
                                        Detailed Project Reports
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block text-gray-900 hover:underline"
                                        href="/service3"
                                    >
                                        Quality Control/Assurance
                                        
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block  text-gray-900 hover:underline"
                                        href="/service3"
                                    >
                                     Road Safety Audits and Action Plans  
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block  text-gray-900 hover:underline"
                                        href="/service3"
                                    >
                                         Traffic Engineering & Surveys
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block  text-gray-900 hover:underline"
                                        href="/service3"
                                    >
                                   Pavement Investigation, Design and Review
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block text-gray-900 hover:underline"
                                        href="/service3"
                                    >
                                    Structural Condition Assessment & NDT
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="block  text-gray-900 hover:underline"
                                        href="/service3"
                                    >
                                    Material Testing Laboratory Services 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </>
    );
};

export default Tabs;

                                        