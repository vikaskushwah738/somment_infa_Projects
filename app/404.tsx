import Link from "next/link";

export default function CUstom404() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="pb-10">404: This page joined the Avengers and is now saving the world. Try again later.</h1>
      <Link href="/" className="border-2 border-blue-300 p-1 rounded-xl px-4 hover:bg-blue-300 hover:text-gray-100">
        Go Back Home
      </Link>
    </div>
  )
}
