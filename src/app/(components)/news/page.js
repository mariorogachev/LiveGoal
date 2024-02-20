"use client";

import { useState, useEffect } from "react";
import fetchNewsApi from "./api.js";

const SportsTabs = () => {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [news, setNews] = useState([]);

  const sportsLeagues = {
    Football: ["Premier League", "La Liga", "Serie A"],
    Basketball: ["NBA", "EuroLeague", "CBA"],
    Tennis: ["Wimbledon", "US Open", "French Open"],
  };

  const changeSport = (sport) => {
    setSelectedSport(sport);
    setSelectedLeague("");
    setNews([]);
  };

  const changeLeague = (league) => {
    setSelectedLeague(league);
  };

  useEffect(() => {
    const fetchNews = async () => {
      if (selectedSport && selectedLeague) {
        const newsData = await fetchNewsApi(selectedSport, selectedLeague);
        setNews(newsData);
      }
    };

    fetchNews();
  }, [selectedSport, selectedLeague]);

  return (
    <div className="rounded-2xl flex flex-col md:flex-row mx-28 md:mx-32 md:mt-32 bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow p-4 w-full overflow-y-auto h-[800px] dark:border border-solid">
        {selectedSport && (
          <div>
            <h2 className="text-lg font-semibold mb-2 text-center dark:text-white ">
              Leagues for {selectedSport}
            </h2>

            <div className="flex flex-wrap sticky top-0 py-2 px-4 z-10">
              {sportsLeagues[selectedSport].map((league) => (
                <button
                  key={league}
                  className={`flex-grow py-2 px-4 mb-2 mr-2 ${
                    selectedLeague === league
                      ? "bg-gray-700 text-white"
                      : "hover:bg-gray-700 "
                  } focus:outline-none focus:shadow-outline dark:text-white`}
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
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
              {news.map((article) => (
                <div
                  key={article.title}
                  className="bg-white p-4 m-2 rounded-lg shadow-md dark:shadow-slate-600 dark:bg-gray-800 dark:text-white"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {article.title}
                  </h3>
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
        )}
      </div>
    </div>
  );
};

export default SportsTabs;
