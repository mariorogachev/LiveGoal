"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import fetchNewsApi from './api';

const News = () => {
  const pathname = usePathname();

  const [selectedSport, setSelectedSport] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (pathname === '/football') {
      setSelectedSport('football');
    } else {
      setSelectedSport('all');
    }
  }, [pathname]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const fetchedNews = await fetchNewsApi(selectedSport);
        
        if (mounted) {
          setNews(fetchedNews);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      }
    };

    let mounted = true; 

    fetchData();

    
    return () => {
      mounted = false;
    };
  }, [selectedSport]);

  return (
    <div className="dark:bg-gray-700 absolute bg-white rounded-2xl max-h-152 sm:max-h-152 md:max-h-128 w-full sm:w-80 mt-7 shadow-2xl overflow-y-auto">
      {selectedSport && (
        <div>
          <h2 className="text-lg font-semibold mb-2 text-center dark:text-white">
            News for {selectedSport}
          </h2>
        </div>
      )}
      <div className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-2">
          {news.map((article) => (
            <div
              key={article.title}
              className="bg-white p-4 m-2 rounded-lg shadow-md dark:shadow-slate-600 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="mb-2 w-full h- object-cover rounded-lg"
                />
              )}
              <p className="text-gray-600 dark:text-white">
                {article.description}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

