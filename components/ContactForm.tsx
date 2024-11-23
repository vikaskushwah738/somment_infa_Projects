"use client"
import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        username: '',
        mobile: '',
        email: '',
        subjects: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
    };

    return (
       
            <div className= "g:w-1/2 bg-white shadow-2xl rounded-xl w-full max-w-lg p-8">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Have Questions?
                    </span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-gray-600 font-semibold mb-1"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your name"
                            value={formData.username}
                            onChange={handleChange}
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
                            id="mobile"
                            name="mobile"
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border-gray-300 rounded-xl px-4 py-1.5 text-gray-800 shadow-sm focus:outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="subjects"
                            className="block text-gray-600 font-semibold mb-1"
                        >
                            Subjects
                        </label>
                        <textarea
                            name="subject"
                            id="subject"
                            placeholder='subject'
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
