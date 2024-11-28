 "use client"
import { useEffect, useState } from 'react';
import { UserData } from "@prisma/client";
import { RiDeleteBin6Line } from "react-icons/ri";
const  Admin =() => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/client-data');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  

  if (loading) return <div className='w-[75%] h-screen justify-center flex items-center'>Loading...</div>;
  if (error) return <div className='w-[75%] h-screen justify-center flex items-center'>Error: {error}</div>;

  return (
    <div className=" w-[75%] px-10">
      <h1 className='text-4xl font-medium text-center py-6'>Dashboard</h1>
      <table className='py-10 w-full border-2 border-blue-400'>
        <thead className='border-2 border-blue-400'>
          <tr>
            <th className='w-[7%] border-2 border-blue-400'>S. no.</th>
            <th className='w-[15%] border-2 border-blue-400'>Name</th>
            <th className='w-[15%] border-2 border-blue-400'>Phone</th>
            <th className='w-[25%] border-2 border-blue-400'>Email</th>
            <th className='w-[30%] border-2 border-blue-400'>Subjects</th>
            <th className='w-[8%] border-2 border-blue-400'>Deleted</th>
          </tr>
        </thead>
        <tbody >
          {users.length > 0 ? (
            users.map((user :any, index: any) => (
              <tr key={user.id} className='border-2 border-blue-400'>
                <th className='w-[7%] border-2 border-blue-400 '>{index + 1}.</th>
                <td className='w-[15%] border-2 border-blue-400 px-3'>{user.name}</td>
                <td className='w-[15%] border-2 border-blue-400 px-3'>{user.phone}</td>
                <td className='w-[25%] border-2 border-blue-400 px-3'>{user.email}</td>
                <td className='w-[30%] border-2 border-blue-400 px-3'>{user.subject}</td>
                <td className='w-[8%] border-2 border-blue-400 px-3'>
                  <span className='text-red-500 hover:text-red-800 w-full flex justify-center'>
                    <RiDeleteBin6Line />
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className='w-[75%] h-screen justify-center flex items-center'>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
