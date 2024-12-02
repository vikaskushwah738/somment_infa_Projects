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
 
}

export default function NewsCard({ imageUrl, content, title,  slug }: NewsCardProps) {

  return (

    <div className="w-64 h-[400px]  rounded-xl overflow-hidden shadow-lg hover:shadow-xl mt-10">
      <Image src={imageUrl} alt={title} className="w-full h-44 object-cover " />
      <div className="pt-5 px-5 pb-4">
        <h2 className="text-lg font-semibold mb-2">
          {title.length > 40
            ? `${title.substring(0, 40)}...`
            : title}
        </h2>
        <p className="text-gray-600 ">
          {content.replace(/<[^>]*>/g, '').length > 70
            ? `${content.replace(/<[^>]*>/g, '').substring(0, 70)}...`
            : content.replace(/<[^>]*>/g, '')}
        </p>

      </div>
      <div className='flex justify-center items-center'>
        <Link href={`/news/${slug}`} className="py-1 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50">Read More</Link>
      </div>

    </div>

  )
}