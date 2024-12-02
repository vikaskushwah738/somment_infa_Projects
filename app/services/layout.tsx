import SideBar from "./components/SideBar";
import Image from 'next/image';

export default function Layout({ children }: any) {
    return (
        <main>
            <section className='lg:pt-28 md:pt-24 pt-20 text-blue-950'>
                <div className="relative w-full lg:h-[450px] md:h-[450px] h-[250px]">
                    <Image
                        src='https://res.cloudinary.com/dopolikju/image/upload/v1732595142/tech-city_jx0y96.png'
                        alt="about us image"
                        fill
                        style={{ objectFit: 'fill' }}
                        className='absolute'
                        priority
                    />
                </div>
            </section>
            <div className="lg:px-20  lg:flex lg:gap-7">
                <SideBar />
                {children}
            </div>

        </main>
    )
}