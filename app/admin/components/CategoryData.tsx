"use client"
import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { NewsTypeData } from "@prisma/client";

const CategoryData = () => {
    const [category, setCategory] = useState<NewsTypeData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/category');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setCategory(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    if (loading) return <div className='w-[80%] h-screen justify-center flex items-center'>Loading...</div>;
    if (error) return <div className='w-[80%] h-screen justify-center flex items-center'>Error: {error}</div>;
  
    return (
        <table className='py-10 w-full border-2 border-blue-400 mt-5'>
        <thead className='border-2 border-blue-400'>
          <tr>
            <th className='w-[5%] border-2 border-blue-400'>S. no.</th>
            <th className='w-[80%] border-2 border-blue-400'>Cartegory</th>
            <th className='w-[15%] border-2 border-blue-400'>Deleted</th>
          </tr>
        </thead>
        <tbody >
          {category.length > 0 ? (
            category.map((user :any, index: any) => (
              <tr key={user.id} className='border-2 border-blue-400'>
                <th className='w-[5%] border-2 border-blue-400 '>{index + 1}.</th>
                <td className='w-[80%] border-2 border-blue-400 px-3'>{user.category}</td>
                <td className='w-[15%] border-2 border-blue-400 px-3'>
                  <span className='text-red-500 hover:text-red-800 w-full flex justify-center'>
                    <RiDeleteBin6Line />
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='w-[75%] h-screen justify-center flex items-center'>No category found</td>
            </tr>
          )}
        </tbody>
      </table>
    )
}

export default CategoryData


