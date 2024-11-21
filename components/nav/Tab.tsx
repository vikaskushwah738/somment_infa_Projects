import { NavLinks } from "@/types/testimonials"
import Link from "next/link"
export const Tab = ({title, path} : NavLinks ) => {
  return (
    <li>
        <Link className="text-gray-900 hover:underline" href={'path'}>{title}</Link>
    </li>
  )
}
