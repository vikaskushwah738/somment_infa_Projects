"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
export default function CarouselHome ({
  items,
  className = "",
}: {
  className?: string;
  items: { src: any; title: string; type: string; href?: string; subitem?: ReactNode }[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap();
      setActiveIndex(newIndex);
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const goToSlide = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <Carousel ref={emblaRef} plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}>
      <CarouselContent>
        {items.map(({ src, href = "#", title, subitem, type }, idx) => (
          <CarouselItem
            key={idx}
            className={cn(
              "relative lg:h-[28rem] md:h-[22rem] h-56",
              src && "aspect-[3]",
              className
            )}
          >
            {type === "image" && (
                <Image 
                src={src} 
                alt={title} 
                fill 
                style={{ objectFit: 'fill' }}
                className="absolute" />
            )}
            {type === "video" && (
              <iframe
                width="100%"
                height="100%"
                src={src + "?mute=1" + "&rel=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

            )}
            {subitem}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />

      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {items.map((src, idx) => (
          <div
            className={`w-2 h-2 rounded-full 
            ${idx === activeIndex ? "bg-blue-300 bg-opacity-50" : "bg-gray-200 bg-opacity-25"}`}
            key={idx}
            onClick={() => {
              goToSlide(idx);
            }}>
          </div>
        ))}
      </div>

      {/* Display current index for debugging */}
      {/* <p className="absolute top-5 right-5 text-white">
        Current Index: {activeIndex}
      </p> */}
    </Carousel>
  );
}