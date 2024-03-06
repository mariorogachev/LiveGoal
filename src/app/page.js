"use client";

import React from "react";
import DateSelector from "./(components)/(date)/dateselector";
import Head from "next/head";

import { useState } from "react";

import Fixtures from "./(components)/result/fixtures";
import LeaguesByCountry from "./(components)/(leagues)/leaguesbycountry";
import Widget from "./(components)/result/widget";
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

        <div className="dark:bg-gray-700 bg-trapnsparent h-32 sm:h-72 w-full sm:w-1/3 md:w-1/4 lg:w-1/6  mx-3 relative">
          <DateSelector onDateChange={handleDateChange} />
          <div className="dark:bg-gray-700 absolute top-full bg-white rounded-2xl max-h-max sm:h-full w-full sm:w-80 shadow-2xl mt-8">
            <h1 className="text-center text-2xl mt-2 mb-3">Featured News</h1>
            <News1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
