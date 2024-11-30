import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string } }): Promise<NextResponse> {
    try {
        const { slug } = params;

        // Fetch the news post using the unique slug with findFirst
        const news_post = await prisma.newsData.findFirst({
            where: { slug },  // Querying by slug
        });

        // Check if the news post exists
        if (!news_post) {
            return NextResponse.json({ message: 'News post not found' }, { status: 404 });
        }

        // Return the news post data if found
        return NextResponse.json(news_post, { status: 200 });
    } catch (error) {
        console.error('Something went wrong:', error);
        return NextResponse.json({ message: 'Could not retrieve news post' }, { status: 500 });
    }
}
