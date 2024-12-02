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
           
          },
          {
            src: `https://res.cloudinary.com/dopolikju/image/upload/v1732612047/Retro-reflectivity_hhzylp.png`,
            title: "Network Survey Vehicles (NSV)",
           
          },
          {
            src: `https://res.cloudinary.com/dopolikju/image/upload/v1732604970/bbd-survays_etknym.jpg`,
            title: "core cutting ",
           
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
