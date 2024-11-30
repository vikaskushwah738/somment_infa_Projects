import { NextResponse } from "next/server";
import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


export async function DELETE(req: Request) {
 
    const {publicId} =await req.json();
    if(!publicId){
        return NextResponse.json({message: 'publicid did not exist'}, {status: 400})
    }
    try{
        const result= await cloudinary.v2.uploader.destroy(publicId);
        if (result.result === 'ok') {
            console.log("image delete sucessfully")
            return  NextResponse.json({ message: 'Image deleted successfully' },
               {status: 200});
          } else {
            return  NextResponse.json({ message: 'Failed to delete image' },
               {status: 400});
          }
    } catch (error){
        console.log('Error deleting image', error);
        return  NextResponse.json({ message: 'An error occurred while deleting the image' }, {status: 500});
    }
}
