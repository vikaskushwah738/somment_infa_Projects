import OurClient from "@/components/OurClient";
import Image from 'next/image';
import aboutImage from '@/public/mordern-city.png'

export default function About() {
  return (
    <main className="lg:pt-28 md:pt-24 pt-20">
      <section className=''>
        <div className="relative w-full lg:h-[450px] md:h-[450px] h-[250px]">
          <Image
            src='https://res.cloudinary.com/dopolikju/image/upload/v1732595126/mordern-city_zpjc3d.png'
            alt="about us image"
            fill
            style={{ objectFit: 'fill' }}
            className='absolute'
            priority
          />
        </div>
      </section>
      <section className="lg:px-20 md:px-10 px-5 py-10">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium ">About company</h1>
        <h2 className="text-xl font-light pt-3">Sommet Infra Projects Private Limited</h2>
        <p className="pt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae natus ullam expedita quaerat dolor esse veniam voluptatem architecto accusantium adipisci! Veniam unde repellat esse magni, itaque quae maxime incidunt deserunt voluptate vero neque, voluptatum fuga quis modi mollitia soluta, ipsum ad enim. Magni eaque aut, at, recusandae ab tenetur consectetur eius culpa provident similique quod minus. Quaerat eius quas dolorem, neque porro veritatis fugiat dignissimos voluptatibus consequuntur, obcaecati perferendis reiciendis aspernatur adipisci. Blanditiis fugit nostrum odit natus officiis?</p>
        <p className="pt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit tempora nulla et dolorum aspernatur iure vel! Optio perspiciatis architecto sit fugit corporis quisquam, aliquam sint, neque animi non iure sequi dolore rerum, reiciendis dolores suscipit aperiam. Tempora quos illo harum ullam ex perferendis sed, autem voluptas corporis porro! Optio, perferendis reiciendis! Unde facere ad saepe! Ex error facilis nesciunt? Ratione voluptatibus officia minus perferendis?</p>
      </section>
      <section className="lg:px-20 md:px-10 px-5 py-10 lg:flex lg:gap-5">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-medium ">Our Values</h2>
          <p className="pt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam at fugiat eveniet dolorum dicta deleniti voluptate incidunt odit totam maxime blanditiis deserunt ex vero repellat, consequatur provident voluptatibus iusto nulla recusandae molestias quam ullam quidem magnam animi. Possimus similique sit velit molestias.</p>
          <p className="pt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, ab rerum pariatur labore quis tenetur sit quas unde voluptate, odit repellat tempore corrupti.</p>
        </div>
        <div className=" lg:w-1/2">
          <h2 className="text-3xl font-medium">Our Mission</h2>
          <p className="pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque reiciendis nam dolor qui, dolorum magni molestiae perspiciatis cumque dignissimos vero harum quas minus ab aperiam aut! Temporibus iusto illo excepturi numquam repellendus atque qui odit amet. Harum non quae autem natus accusantium, dolor eligendi.</p>
          <p className="pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque earum, dicta nemo veritatis maxime enim consequuntur recusandae fuga cupiditate corporis delectus blanditiis quidem!</p>
        </div>

      </section>
      <section className="lg:px-20 md:px-10 px-5 py-10 ">
        <h2 className="text-3xl font-medium">Quality</h2>
        <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci atque voluptas, consequuntur molestias similique, quidem debitis accusamus voluptate quos dolorum at odio, non error corporis provident. Molestiae qui quos, ea, tempora veniam, eaque non beatae optio ratione sequi iure quis temporibus esse? Quaerat quasi eius veritatis praesentium sint, fugit unde fuga error facere.</p>
      </section>
      <OurClient />
    </main>
  )
};

