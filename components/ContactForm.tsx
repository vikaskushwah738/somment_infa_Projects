"use client"
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [phone , setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    // const [recaptchaVerified, setRecaptchaVerified] = useState<string | null>(null);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const toastId = toast.loading("Please wait...");
        try {
            const res = await fetch(`/api/client-data`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, email, subject }),
            });

            if (res.ok) {
                toast.success("Successfully submitted! We’ll contact you soon.", { id: toastId });
                setName("");
                setPhone("");
                setEmail("");
                setSubject("");
               
            } else {
                const errorData = await res.json();
                toast.error(errorData.message || "Submission failed.", { id: toastId });
            }
        } catch (error) {
            toast.error("Network error. Please try again later.", { id: toastId });
        }
    };

    return (

        <div className='lg:w-1/2 flex flex-col text-blue-950 lg:pt-0 pt-16 lg:px-0 md:px-16 px-5'>
            <h2 className="text-xl font-light text-blue-600 mb-6">
                Have Questions? Contact Our Highway Consultancy Team
            </h2>
            <form className="space-y-2 w-full" onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="username"
                        className="block text-gray-600 font-semibold mb-1"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm  focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="mobile"
                        className="block text-gray-600 font-semibold mb-1"
                    >
                        Mobile Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-gray-600 font-semibold mb-1"
                    >
                        Email ID
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    />
                </div>
                <div>
                    <label
                        htmlFor="subjects"
                        className="block text-gray-600 font-semibold mb-1"
                    >
                        Message
                    </label>
                    <textarea
                        name="subject"
                        id="subject"
                        placeholder='Message'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                    >

                    </textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105  focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
}
