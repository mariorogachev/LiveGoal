"use client";

import React from "react";
import DateSelector from "./(components)/(date)/dateselector";

import { useState } from "react";
import Fixtures from "./(components)/result/fixtures";

import "@/app/global.css";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <>
      <div className="flex flex-wrap items-stretch dark:text-white h-screen mt-36 justify-center">
        <div className="dark:bg-gray-700 bg-gray-400 rounded-2xl w-full sm:w-1/3 md:w-1/4 lg:w-1/6  mx-3 shadow-2xl">
          <h1 className="text-center text-2xl mt-1">Leagues</h1>
        </div>

        <div className="dark:bg-gray-700 bg-gray-400 rounded-2xl w-full sm:w-1/3 md:w-1/3 lg:w-1/3 mx-3 shadow-2xl">
          <h1 className="text-center text-2xl mt-1">Results</h1>
          <Fixtures selectedDate={selectedDate} />
        </div>

        <div className="dark:bg-gray-700 bg-gray-400 rounded-2xl h-32 sm:h-80 w-full sm:w-1/3 md:w-1/4 lg:w-1/6  mx-3 shadow-2xl relative">
          <DateSelector onDateChange={handleDateChange} />
          <div className="dark:bg-gray-700 absolute top-full bg-gray-400 rounded-2xl h-32 sm:h-full w-full sm:w-80 mt-7  shadow-2xl">
            <h1 className="text-center text-2xl mt-1">Featured News</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
