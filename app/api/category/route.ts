import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { category } = await req.json();
        if (!category ) {
            return NextResponse.json(
                { error: 'category are required' },
                { status: 400 } 
            );
        }
        const categorys = await prisma.newsTypeData.create({
            data: {
                category
            }
        });
        console.log('customer data save sucessfully', category)
        return NextResponse.json(categorys, { status: 200 });
    } catch (error :any) {
        console.log("Error in API:", error);
        return NextResponse.json({ message: 'Something went wrong, try again later' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const categorys = await prisma.newsTypeData.findMany();
        return NextResponse.json(categorys, {status: 200 });
    } catch (error) {
        console.log('Error fetching client info:', error);
        return NextResponse.json({ message: 'Clould not find client info' }, { status: 500 })
    }
}