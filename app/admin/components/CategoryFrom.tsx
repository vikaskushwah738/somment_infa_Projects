"use client"
import { useState } from "react"
import toast from "react-hot-toast"

export const CategoryFrom = () => {
    const [category, setCategory]=useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const toastId = toast.loading('Please wait...');
        try {
          const res = await fetch(`/api/category`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({category}),
          });
    
          if (res.ok) {
            // const data = await res.json();
            toast.success('Category add successfully', { id: toastId });
            setCategory('');
            
          } else {
            const errorData = await res.json();
            console.log('Category form error',errorData)
            toast.error('Something went wrong, please try again', { id: toastId });
          }
        } catch (error ) {
          console.log('somethink went wrong', error)
          toast.error('Network error, please try again', { id: toastId });
        }
    
      }
    return (
        <form className="px-5 border-2 border-blue-400 rounded-xl w-1/2" onSubmit={handleSubmit}>
            <div className="pb-2 pt-5">
                <label htmlFor="category" className="flex text-gray-700 mb-1 gap-1">
                Category <span className="text-red-700">*</span>
                </label>
                <input
                    type="text"
                    name="category"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter category"
                    className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
                />
            </div>

            <div className="flex justify-center rounded-2xl pb-2">
                <input
                    type="submit"
                    value="Submit"
                    className="w-1/4 py-1.5 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50"
                />
            </div>
        </form>
    )
}