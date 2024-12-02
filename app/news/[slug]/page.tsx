import { NewsProps } from "@/types/newsTypes";
import Image from 'next/image';

interface NewsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDynamic(props: NewsPageProps) {
  const params = await props.params;
  const { slug } = params;
  const res = await fetch(`http://localhost:3000/api/news-upload/${slug}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch news: ${res.statusText}`);
  }
  const news: NewsProps = await res.json();

  return (
    <>
      {news ? (
        <main>
           <div className='lg:pt-28 md:pt-24 pt-20'>
            <div className="relative w-full lg:h-[450px] md:h-[450px] h-[250px]">
              <Image
                alt={news.title}
                src={news.imageUrl}
                fill
                objectFit="fill"
                className='absolute '
              />
            </div>
          </div>
          <div className="lg:px-28 md:px-10 px-5 pt-10 pb-10 ">
            <h1 className="lg:text-4xl md:text-3xl text-xl font-semibold lg:px-28">{news.title}</h1>
            <div className="pt-6 text-gray-900 dark:text-white lg:px-28" dangerouslySetInnerHTML={{ __html: news.content }}></div>
          </div>
        </main>
      ) : (
        <div>No news found</div>
      )}
    </>
  );
}
