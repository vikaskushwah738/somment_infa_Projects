import { CardProps } from "@/types/testimonials";
import Link from "next/link";

const ServicesCard = ({ imageSrc, heading, description, url }: CardProps) => {
  return (
    <Link href={url} className="text-blue-950 cursor-pointer pt-5">
      <div className="w-64 h-96  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ">
        <img src={imageSrc} alt={heading} className="w-full h-52 object-cover " />
        <div className="pt-5 px-5">
          <h2 className="text-lg font-semibold mb-2">{heading}</h2>
          <p className="text-gray-600 ">{description}</p>

        </div>
      </div>
    </Link>
  );
};

export default ServicesCard;
