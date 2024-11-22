import Image from 'next/image';
import Hero from '@/public/hero.jpg' 
export default function HeroSection() {
    return (
        <section className="lg:px-20 md:px-10 px-5 py-10 lg:flex lg:gap-5 text-blue-950">
            <div className="lg:w-1/2">
                <h1 className=" lg:text-3xl md:text-2xl font-medium text-xl text-blue-300">Welcome to Sommit Infra Projects Private Limited</h1>
                <p className="pt-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nulla tenetur aliquid, pariatur, rerum eum repellat quos mollitia ipsam, molestiae eaque autem ipsa!.</p>
                <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, suscipit ex velit explicabo repudiandae nisi, adipisci iure corporis expedita, rerum et nobis cupiditate eligendi laboriosam eius! Itaque eos est dolores ratione sint atque quasi voluptates aut, excepturi corporis laudantium quisquam! Voluptate quaerat sint repellendus ad?</p>
            </div>
            <div className="lg:w-1/2 relative">
                <Image
                    alt="Sommit Infra Projects Private Limited Logo"
                    src={Hero}
                    fill
                    style={{ objectFit: 'fill' }}
                    className="absolute rounded-2xl bg-white"
                    priority
                />

            </div>

        </section>
    )
}

