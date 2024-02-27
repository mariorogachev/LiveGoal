"use client";

import React from "react";
import DateSelector from "./(components)/(date)/dateselector";

import { useState } from "react";
import Fixtures from "./(components)/result/fixtures";
import LeaguesByCountry from "./(components)/(leagues)/leaguesbycountry";
import News1 from "./(components)/news/news";

import "@/app/global.css";

const Home = () => {
  
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <>
     <div className="flex flex-wrap items-stretch dark:text-white max-h-max mt-36 justify-center">
  <div className="dark:bg-gray-700 bg-white rounded-2xl w-full sm:w-1/3 md:w-1/4 lg:w-1/6 mx-3 shadow-2xl">
    <h1 className="text-center text-2xl mt-1">Leagues</h1>
    <LeaguesByCountry />
  </div>

  <div className="dark:bg-gray-700 bg-white rounded-2xl w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mx-3 shadow-2xl">
    <h1 className="text-center text-2xl mt-1">Results</h1>
    <Fixtures selectedDate={selectedDate} />
  </div>

  <div className="dark:bg-gray-700 bg-white rounded-2xl h-32 sm:h-80 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 mx-3 shadow-2xl relative">
    <DateSelector onDateChange={handleDateChange} />
    <News1 />
  </div>
</div>
    </>
  );
};

export default Home;
