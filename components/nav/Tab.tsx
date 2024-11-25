import { NavLinks } from "@/types/testimonials";
import Link from "next/link";

interface TabProps extends NavLinks {
  onDropdownToggle?: (e: React.MouseEvent) => void; // Optional prop for dropdown toggle
}

export const Tab = ({ title, path, onDropdownToggle }: TabProps) => {
  return (
    <Link onClick={onDropdownToggle} href={path} className="text-gray-900 hover:underline cursor-pointer">
      {title}
    </Link>
  );
};


