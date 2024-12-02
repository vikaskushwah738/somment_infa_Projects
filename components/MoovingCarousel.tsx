import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


export function CarouselSize() {
  const mydata = [
    "https://www.eclatengineering.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrwmpzhor%2Fimage%2Fupload%2Fv1715542194%2F4d4fe-4_md7peo.jpg&w=640&q=75",
    "https://www.eclatengineering.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrwmpzhor%2Fimage%2Fupload%2Fv1715542194%2F4d4fe-4_md7peo.jpg&w=640&q=75",
    "https://www.eclatengineering.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrwmpzhor%2Fimage%2Fupload%2Fv1715542194%2F4d4fe-4_md7peo.jpg&w=640&q=75",
    "https://www.eclatengineering.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrwmpzhor%2Fimage%2Fupload%2Fv1715542194%2F4d4fe-4_md7peo.jpg&w=640&q=75",
    "https://www.eclatengineering.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrwmpzhor%2Fimage%2Fupload%2Fv1715542194%2F4d4fe-4_md7peo.jpg&w=640&q=75",
    "https://www.eclatengineering.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdrwmpzhor%2Fimage%2Fupload%2Fv1715542194%2F4d4fe-4_md7peo.jpg&w=640&q=75",
  ];

  return (
    <div className="relative overflow-hidden w-full ">
      <div className="flex animate-scroll gap-4">
        {mydata.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Card className="h-full">
              <CardContent className="flex items-center justify-center h-full">
                <Image
                  alt="Eclat Engineering Consultants Logo"
                  src={src}
                  height={150}
                  width={150}
                  className="rounded-2xl bg-white aspect-auto md:py-10 py-8"
                  priority
                />
              </CardContent>
            </Card>
          </div>
        ))}
        {/* Duplicate for seamless scroll */}
        {mydata.map((src, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <Card className="h-full">
              <CardContent className="flex items-center justify-center h-full">
                <Image
                  alt="Eclat Engineering Consultants Logo"
                  src={src}
                  height={150}
                  width={150}
                  className="rounded-2xl bg-white aspect-auto"
                  priority
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}




