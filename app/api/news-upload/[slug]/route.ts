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

        return NextResponse.json(news_post, { status: 200 });
    } catch (error) {
        console.error('Something went wrong:', error);
        return NextResponse.json({ message: 'Could not retrieve news post' }, { status: 500 });
    }
}



export async function DELETE(req: Request, { params }: { params: { slug: string } }): Promise<NextResponse> {
    try {
        const { slug } = params;

         // First, checking if the post exists
         const existingPost = await prisma.newsData.findFirst({
            where: { slug },  // Querying by slug
        });

        // If the post doesn't exist, return a 404 error
        if (!existingPost) {
            return NextResponse.json({ message: 'News post not found' }, { status: 404 });
        }

        // Fetching the news post using the unique slug with findFirst
        const deletePost = await prisma.newsData.delete({
            where: { slug },  // Querying by slug
        });
         console.log("deleted post sucessfully", deletePost)
       
        return NextResponse.json({ message: 'News post deleted successfully' }, { status: 200 });
    } catch (error :any) {
        console.error('Something went wrong:', error);
        return NextResponse.json({ message: 'Could not deleted news post' }, { status: 500 });
    }
}


