import Image from 'next/image';
import Link from 'next/link';
interface NewsCardProps {
  imageUrl: string;
  category: string;
  content: string;
  title: string;
  id: string;
  slug: string;
  description: string;
  publicId: string;
  createdAt: Date;
}

export default function AdminNewsCard({ imageUrl, content, title, createdAt, slug}: NewsCardProps) {
  
  return (
    
      <div className="w-64 h-96  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ">
        <img src={imageUrl} alt={title} className="w-full h-52 object-cover " />
        <div className="pt-5 px-5">
          <h2 className="text-lg font-semibold mb-2">
          {title.length > 40
                    ? `${title.substring(0, 40)}...`
                    :title}
          </h2>
          <p className="text-gray-600 ">
          {content.replace(/<[^>]*>/g, '').length > 70
                  ? `${content.replace(/<[^>]*>/g, '').substring(0, 70)}...`
                  : content.replace(/<[^>]*>/g, '')}
            </p>

        </div>
        <Link href={`/news/${slug}`} className="text-blue-950 cursor-pointer pt-5">Delete</Link>
      </div>
   
  )
}