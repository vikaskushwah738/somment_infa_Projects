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
            src: `https://media.istockphoto.com/id/504743680/photo/highway-interchange-aerial-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=AxX8KpWd0rwBbQERsPcl2aIAZ6EQigCkBw7dfqqG3f0=`,
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
          {
            src: `https://media.istockphoto.com/id/483800159/photo/highway-in-mumbai.jpg?s=612x612&w=0&k=20&c=pX62yvO00u4p8n7AwC4QbAvj7svWhkWevasJ8gIDt44=`,
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
          {
            src: `https://media.istockphoto.com/id/504743680/photo/highway-interchange-aerial-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=AxX8KpWd0rwBbQERsPcl2aIAZ6EQigCkBw7dfqqG3f0=`,
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
          {
            src: `https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGlnaHdheXN8ZW58MHx8MHx8fDA%3D`,
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
          {
            src: `https://media.istockphoto.com/id/1279856502/photo/road.webp?a=1&b=1&s=612x612&w=0&k=20&c=stywcPRLrkPbXC1aGqzR1P4XMJH31PG4dnueIY4dsN4=`,
            title: "Network Survey Vehicles (NSV)",
            type: "image"
          },
        ]
       }
       />
       
       
       <HeroSection/>
       <Services/>
       <OurClient/> 
       <WhyCooiseUs/>
      </main> 
      
      
  );
}
