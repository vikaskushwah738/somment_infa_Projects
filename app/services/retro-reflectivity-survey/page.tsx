import CarouselHome from "@/components/HomeCarousel";

export default function Retro_Reflectivity() {
    return (
        <div className="lg:w-[70%] pt-20 lg:px-0 md:px-10 px-5">
            <section>
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium">Retro Reflectivity</h1>
                 <p className="pt-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae tenetur quod sapiente exercitationem praesentium itaque quasi ut reiciendis perspiciatis, et sunt incidunt. Ut consequuntur adipisci rerum maiores fugit illo in sed nam rem maxime voluptatibus modi, dolore suscipit officia laboriosam amet iusto ad, blanditiis qui reiciendis voluptatum quia! Debitis?</p>
                 <p className="pt-3 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum ullam, magni accusamus inventore odit neque a iusto iure laudantium modi, quasi aut itaque, sequi corrupti? Rem nam sed officiis recusandae sequi optio dicta distinctio. Harum libero repudiandae ut eligendi adipisci ad, quo nam maiores ratione sed, repellat veniam cum, nihil optio aspernatur molestiae debitis. Amet, quis eaque blanditiis vero odit cupiditate inventore, minus enim mollitia sit consequuntur molestiae. Culpa!</p>
            
            </section>
            <section className=" pt-10 py-10">
            <CarouselHome items={
                    [

                        {
                            src: 'https://res.cloudinary.com/dopolikju/image/upload/v1732612047/Retro-reflectivity_hhzylp.png',
                            title: "Network Survey Vehicles (NSV)",
                            type: "image"
                        },
                        {
                            src: 'https://res.cloudinary.com/dopolikju/image/upload/v1732612790/retro-refectivity-3_bmpd4e.png',
                            title: "Network Survey Vehicles (NSV)",
                            type: "image"
                        },
                        

                    ]
                }
                />
            
            </section>

            <section className="py-10">
                <h2 className="lg:text-3xl md:text-2xl text-xl">Essential Attributes of Retro Reflectivity</h2>
                <ul className="space-y-2 pl-5 pt-5 list-disc">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, consequatur adipisci? Molestiae quis vero, voluptates fugiat et aut soluta culpa, nemo, unde laudantium accusantium hic atque?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non similique eaque eius fuga quisquam consequatur neque explicabo odio at?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nobis consectetur libero quo iste atque sequi ea ad animi? Impedit exercitationem veritatis numquam quae, dolorem nisi.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore provident, dicta repudiandae, totam, nam autem vero harum facere mollitia veritatis consequuntur numquam animi. </li>
                </ul>
            </section>
            <section className="py-10">
                <h2 className="lg:text-3xl md:text-2xl text-xl">Advantages of the Retro Reflectivity</h2>
                <ul className="space-y-2 pl-5 pt-5 list-disc">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, consequatur adipisci? Molestiae quis vero, voluptates fugiat et aut soluta culpa, nemo, unde laudantium accusantium hic atque?</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non similique eaque eius fuga quisquam consequatur neque explicabo odio at?</li>
                    <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nobis consectetur libero quo iste atque sequi ea ad animi? Impedit exercitationem veritatis numquam quae, dolorem nisi.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore provident, dicta repudiandae, totam, nam autem vero harum facere mollitia veritatis consequuntur numquam animi. </li>
                </ul>
            </section>
            <section className="py-10">
                <h2 className="lg:text-3xl md:text-2xl text-xl">Utilization of Retro Reflectivity Services </h2>
                 <p className="pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, distinctio praesentium libero fuga ducimus obcaecati in mollitia ab aliquam animi repellat saepe reiciendis ullam cupiditate magnam sint necessitatibus vel excepturi corrupti eum sequi ad enim. Suscipit, dolores.</p>
                <ul className="space-y-2 pl-5 pt-3 list-disc">
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing </li>
                    <li>Lorem ipsum dolor, sit amet consectetur adi</li>
                    <li>Lorem ipsum dolor sit amet, consect dipisicing</li>
                </ul>
            </section>

        </div>
    )
}