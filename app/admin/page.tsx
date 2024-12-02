"use client";
import { useEffect, useState } from "react";
import { UserData } from "@prisma/client";  // Assuming the correct type is imported
import { RiDeleteBin6Line } from "react-icons/ri";

const Admin = () => {
  const [users, setUsers] = useState<UserData[]>([]);  // Array of UserData type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  // Error is a string or null

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/client-data");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: UserData[] = await response.json();  // Explicitly typing data
        setUsers(data);
      } catch (error: unknown) {  // Catching unknown error types
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="w-[80%] h-screen justify-center flex items-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-[80%] h-screen justify-center flex items-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-[75%] px-10">
      <h1 className="mt-5 rounded-xl text-center py-6 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">
        <span className="bg-gradient-to-b from-gray-50  via-blue-100 to-blue-500 inline-block text-transparent bg-clip-text text-5xl font-medium">
          Dashboard
        </span>
      </h1>
      <table className="py-10 w-full border-2 border-blue-400 mt-5">
        <thead className="border-2 border-blue-400">
          <tr>
            <th className="w-[7%] border-2 border-blue-400">S. no.</th>
            <th className="w-[15%] border-2 border-blue-400">Name</th>
            <th className="w-[15%] border-2 border-blue-400">Phone</th>
            <th className="w-[25%] border-2 border-blue-400">Email</th>
            <th className="w-[30%] border-2 border-blue-400">Subjects</th>
            <th className="w-[8%] border-2 border-blue-400">Deleted</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user: UserData, index: number) => (  // Explicitly typing user and index
              <tr key={user.id} className="border-2 border-blue-400">
                <th className="w-[7%] border-2 border-blue-400 ">{index + 1}.</th>
                <td className="w-[15%] border-2 border-blue-400 px-3">
                  {user.name}
                </td>
                <td className="w-[15%] border-2 border-blue-400 px-3">
                  {user.phone}
                </td>
                <td className="w-[25%] border-2 border-blue-400 px-3">
                  {user.email}
                </td>
                <td className="w-[30%] border-2 border-blue-400 px-3">
                  {user.subject}
                </td>
                <td className="w-[8%] border-2 border-blue-400 px-3">
                  <span className="text-red-500 hover:text-red-800 w-full flex justify-center">
                    <RiDeleteBin6Line />
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="w-[75%] h-screen justify-center flex items-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
