import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

// Define Params type explicitly
type Params = { slug: string };

// GET handler for fetching the news post
export async function GET(req: Request, { params }: { params: Params }): Promise<NextResponse> {
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

        return NextResponse.json(news_post, { status: 200 });
    } catch (error: unknown) {  // Handle error type as `unknown`
        console.error('Something went wrong:', error);
        return NextResponse.json({ message: 'Could not retrieve news post' }, { status: 500 });
    }
}

// DELETE handler for deleting the news post
export async function DELETE(req: Request, { params }: { params: Params }): Promise<NextResponse> {
    try {
        const { slug } = params;

        // First, checking if the post exists by slug
        const existingPost = await prisma.newsData.findFirst({
            where: { slug },
        });

        // If the post doesn't exist, return a 404 error
        if (!existingPost) {
            return NextResponse.json({ message: 'News post not found' }, { status: 404 });
        }

        // Deleting the post using the unique slug
        await prisma.newsData.delete({
            where: { slug },
        });

        return NextResponse.json({ message: 'News post deleted successfully' }, { status: 200 });
    } catch (error: unknown) {  // Handle error type as `unknown`
        console.error('Something went wrong:', error);
        return NextResponse.json({ message: 'Could not delete news post' }, { status: 500 });
    }
}
