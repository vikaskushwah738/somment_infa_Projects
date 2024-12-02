import Image from 'next/image';

export default function HeroSection() {
    return (
        
        <section className="lg:px-20 md:px-10 px-5 py-10 lg:flex lg:gap-5 text-blue-950 h-auto">
            <div className="lg:w-[60%]">
                <h1 className="lg:text-3xl md:text-2xl font-medium text-xl text-blue-300">
                    Welcome to Sommet Infra Projects Private Limited
                </h1>
                <p className="pt-4 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla tenetur aliquid,
                    pariatur, rerum eum repellat quos mollitia ipsam, molestiae eaque autem ipsa!.
                </p>
                <p className="pt-3 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, suscipit ex velit
                    explicabo repudiandae nisi, adipisci iure corporis expedita, rerum et nobis cupiditate
                    eligendi laboriosam eius! Itaque eos est dolores ratione sint atque quasi voluptates aut,
                    excepturi corporis laudantium quisquam! Voluptate quaerat sint repellendus ad?
                </p>
                <p className="pt-3 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et id porro laboriosam
                    repudiandae possimus veniam architecto dicta nobis explicabo blanditiis dolorum non, rerum
                    eligendi ut magnam at laborum molestias similique voluptas saepe error! Consectetur sequi
                    necessitatibus numquam.
                </p>
                <p className="pt-3 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, reiciendis nostrum
                    deleniti odit quos maxime delectus? Quia, ipsum aperiam nisi, sunt sequi optio corrupti,
                    unde debitis laudantium maxime dolore ut? A, quo qui. Quidem eius hic dicta ea deleniti
                    nesciunt?
                </p>
            </div>
            <div className="lg:w-[40%] relative flex justify-center items-center lg:h-auto h-80 w-full lg:mt-0 mt-10">
                <Image
                    alt="Sommet Infra Projects Private Limited Logo"
                    src="https://res.cloudinary.com/dopolikju/image/upload/v1732594828/hero_mri6d8.jpg"
                    fill
                    style={{ objectFit: 'fill' }}
                    className="absolute rounded-2xl"
                    priority
                />
            </div>
        </section>

    )
}

