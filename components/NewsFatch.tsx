"use client"
import NewsCard from "@/components/NewsCard";
import { NewsData } from "@prisma/client";
import { useState, useEffect } from "react";

const NewsFatch = () => {
  const [news, setNews] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/news-upload');
        if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(`Failed to fetch news: ${errorDetails}`);
        }
        
        const data = await response.json();
        setNews(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <div className=' h-screen justify-center flex items-center'>Loading...</div>;
  if (error) return <div className=' h-screen justify-center flex items-center'>Error: {error}</div>;
  return (
    <>
     {news.map((news, indx) => <NewsCard  key={indx} {...news}/>)}
    </>
  )
}

export default NewsFatch