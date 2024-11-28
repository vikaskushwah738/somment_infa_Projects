import CarouselHome from "@/components/HomeCarousel";

export default function Services() {
    return (
        <div className="lg:w-[70%] lg:px-0 md:px-10 px-5">
            <section>
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium pt-20">Services</h1>
                <p className="pt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, sint consectetur! Vel dolore facilis consequuntur! Molestiae dolores esse blanditiis ab ut iusto laudantium est? Itaque, minima maiores numquam quisquam recusandae repellat. Asperiores ullam porro ipsum optio beatae eveniet veniam omnis vitae neque perferendis sit laborum esse ab voluptatem, distinctio odio.</p>
            </section>

            <section className="py-10">
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
            </section>
        </div>
    )
}
