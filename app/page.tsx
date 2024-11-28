import HeroSection from "@/components/HeroSection";
import CarouselHome from "@/components/HomeCarousel";
import OurClient from "@/components/OurClient";
import Services from "@/components/Services";
import WhyCooiseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="lg:pt-28 md:pt-24 pt-20">
      <CarouselHome items={
        [
          {
            src: "https://res.cloudinary.com/dfbm8in4c/image/upload/v1732361050/highway_iisgej.png",
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
          {
            src: `https://res.cloudinary.com/dfbm8in4c/image/upload/v1732361050/highways-2_hboh9n.png`,
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
          {
            src: `https://res.cloudinary.com/dopolikju/image/upload/v1732605752/coreutting_cleanup_qqlobj.png`,
            title: "core cutting ",
            type: "image"
          },

        ]
      }
      />
      <HeroSection />
      <Services />
      <OurClient />
      <WhyCooiseUs />
    </main>


  );
}
