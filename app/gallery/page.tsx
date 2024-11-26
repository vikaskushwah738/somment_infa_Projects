import CarouselHome from "@/components/HomeCarousel";
import OurClient from "@/components/OurClient";
import Image from 'next/image';
import Gallerys from '@/public/gallery.png'
export default function Gallery() {
    return (
        <main className="lg:pt-28 md:pt-24 pt-20">
            <section className=''>
                <div className="relative w-full lg:h-[450px] md:h-[450px] h-[250px]">
                    <Image
                        src='https://res.cloudinary.com/dopolikju/image/upload/v1732537079/gallery_vhivpw.png'
                        alt="about us image"
                        fill
                        style={{ objectFit: 'fill' }}
                        className='absolute'
                        priority
                    />
                </div>
            </section>
            <h1 className="lg:px-20 md:px-10 px-5 pt-10 font-medium lg:text-3xl md:text-2xl text-xl">Gallery</h1>
            <div className="lg:px-20 md:px-10 px-5 pt-10 py-10">
                <CarouselHome items={
                    [

                        {
                            src: 'https://res.cloudinary.com/dopolikju/image/upload/v1732516133/sommet-office-3_jxghaq.png',
                            title: "Network Survey Vehicles (NSV)",
                            type: "image"
                        },
                        {
                            src: 'https://res.cloudinary.com/dopolikju/image/upload/v1732516134/sommet-office-2_shlyi1.png',
                            title: "Network Survey Vehicles (NSV)",
                            type: "image"
                        },
                        {
                            src: 'https://res.cloudinary.com/dopolikju/image/upload/v1732516134/sommet-office_st2azx.png',
                            title: "Network Survey Vehicles (NSV)",
                            type: "image"
                        },

                    ]
                }
                />
            </div>
        </main>
    )
}

