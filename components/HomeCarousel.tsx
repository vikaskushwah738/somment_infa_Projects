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

interface CarouselItem {
  src: string;      // Use 'string' for the image or video URL
  title: string;
  subitem?: ReactNode;
}

interface CarouselHomeProps {
  items: CarouselItem[];  // Use the CarouselItem[] type for the 'items' array
  className?: string;
}

export default function CarouselHome ({
  items,
  className = "",
}: CarouselHomeProps) {
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
        {items.map(({ src,  title, subitem }, idx) => (
          <CarouselItem
            key={idx}
            className={cn(
              "relative lg:h-[28rem] md:h-[22rem] h-56",
              src && "aspect-[3]",
              className
            )}
          >
            
              <Image 
                src={src} 
                alt={title} 
                fill 
                style={{ objectFit: 'fill' }}
                className="absolute" 
              />
           
            
            {subitem}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5" />
      <CarouselNext className="right-5" />

      <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, idx) => (
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
    </Carousel>
  );
}
