import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {  name, email, phone , subject } = await req.json();
        if (!email || !phone  || !name || !subject) {
            return NextResponse.json(
                { error: 'Email and phone number are required' },
                { status: 400 } 
            );
        }
        const project = await prisma.userData.create({
            data: {
                name,        
                email,       
                phone , 
                subject    
            }
        });
        console.log('customer data save sucessfully', name)
        return NextResponse.json(project, { status: 200 });
    } catch (error) {
        console.log("Error in API:", error);
        return NextResponse.json({ message: 'Something went wrong, try again later' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const clientinfo = await prisma.userData.findMany();
        return NextResponse.json(clientinfo, {status: 200 });
    } catch (error) {
        console.error('Error fetching client info:', error);
        return NextResponse.json({ message: 'Clould not find client info' }, { status: 500 })
    }
}