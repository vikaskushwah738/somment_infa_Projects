import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { title, slug, description, content, imageUrl, publicId, category } = await req.json();
        if (!title || !slug || !description  || !content || !imageUrl || !publicId  || !category) {
            return NextResponse.json(
                { error: 'all field are required' },
                { status: 400 }
            )
        }
        const news = await prisma.newsData.create({
            data: {
                title,
                slug,
                description ,
                content,
                imageUrl,
                publicId,
                category
            }
        });
        console.log('customer data save sucessfully')
        return NextResponse.json(news, { status: 200 });
    } catch (error) {
        console.log("error in api ", error)
        return NextResponse.json({ message: 'Somethink went wrong please try again later' },
            { status: 500 }
        )
    }
}  

export async function GET() {
    try {
        const News = await prisma.newsData.findMany();
        return NextResponse.json(News, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Clould not find News Posts' }, { status: 500 })
    }
}