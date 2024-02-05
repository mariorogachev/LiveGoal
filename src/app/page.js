'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

const SportsTabs = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedLeague, setSelectedLeague] = useState('');
  const [news, setNews] = useState([]);

  const apiKey = '400c8180e1b540a99102c3482600eade';

  const sportsLeagues = {
    Football: ['Premier League', 'La Liga', 'Serie A'],
    Basketball: ['NBA', 'EuroLeague', 'CBA'],
    Tennis: ['Wimbledon', 'US Open', 'French Open'],
  };

  const changeSport = (sport) => {
    setSelectedSport(sport);
    setSelectedLeague(''); 
    setNews([]); 
  };

  const changeLeague = (league) => {
    setSelectedLeague(league);
  };

  useEffect(() => {
    const fetchNews = async () => {
      if (selectedSport && selectedLeague) {
        try {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${apiKey}`, {
            params: {
              category: selectedSport.toLowerCase(),
              q: selectedLeague,
            },
          });

          setNews(response.data.articles);
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      }
    };

    fetchNews();
  }, [selectedSport, selectedLeague]);

  return (
    <div className="flex dark:border border-solid h-screen bg-gray-100">
      <div className=" bg-gray-800 text-white p-4 ">
        <h1 className="text-2xl font-semibold mb-4">Sports Tabs</h1>
        <div>
          <h2 className="text-lg font-semibold mb-2">Sports</h2>
          <button className={`w-full py-2 px-4 mb-2 text-left ${selectedSport === 'Football' ? 'bg-gray-700' : 'hover:bg-gray-700'} focus:outline-none focus:shadow-outline`} onClick={() => changeSport('Football')}>Football</button>
          <button className={`w-full py-2 px-4 mb-2 text-left ${selectedSport === 'Basketball' ? 'bg-gray-700' : 'hover:bg-gray-700'} focus:outline-none focus:shadow-outline`} onClick={() => changeSport('Basketball')}>Basketball</button>
          <button className={`w-full py-2 px-4 mb-2 text-left ${selectedSport === 'Tennis' ? 'bg-gray-700' : 'hover:bg-gray-700'} focus:outline-none focus:shadow-outline`} onClick={() => changeSport('Tennis')}>Tennis</button>
          {/* Add more sports as needed */}
        </div>
      </div>
      <div className="flex-grow w-2/3 p-4 overflow-y-auto">
        {selectedSport && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Leagues for {selectedSport}</h2>
            <div className="flex">
              {sportsLeagues[selectedSport].map((league) => (
                <button
                  key={league}
                  className={`flex-grow py-2 px-4 mr-2 ${selectedLeague === league ? 'bg-gray-700' : 'hover:bg-gray-700'} focus:outline-none focus:shadow-outline`}
                  onClick={() => changeLeague(league)}
                >
                  {league}
                </button>
              ))}
            </div>
          </div>
        )}
        {news.length > 0 && (
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {news.map((article) => (
                <div key={article.title} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="mb-2 w-full h- object-cover rounded-lg" />}
                  <p className="text-gray-600">{article.description}</p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">Read more</a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SportsTabs;




