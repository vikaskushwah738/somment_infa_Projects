// app/not-found.tsx

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="pb-10 text-2xl px-5 text-blue-400 ">  Oooh-on! The thing you’re looking for might be on Mars. NASA’s working on it 🚀 </h1>
      <Link href="/" className="border-2 border-blue-300 p-1 rounded-xl px-4 hover:bg-blue-300 hover:text-gray-100">
        Go Back Home
      </Link>

    </div>
  );
}
