"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logofinal.png";
import Sun from "@/public/svg/sun.svg";
import Moon from "@/public/svg/moon.svg";
import MenuTab from "@/public/svg/menutab.svg";
import SearchLogo from "@/public/svg/searchicon.svg";
import "../global.css";

const Header = () => {
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

  const savedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const initialTheme =
    savedTheme ||
    (typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const logoImage = document.getElementById("logo-image");

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      logoImage.classList.add("dark-logo");
      document.documentElement.classList.add("dark");
    } else {
      logoImage.classList.remove("dark-logo");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="bg-gray-200 fixed w-full z-20 top-0 start-0 dark:bg-gray-900">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-3">
          <div className="flex">
            <Image
              id="logo-image"
              src={Logo}
              alt="Logo"
              width={70}
              height={100}
            />
            <h1 className="ml-3 mt-1 self-center text-7xl text-gray-900 md:text-7xl lg:text-7xl dark:text-gray-200">
              LiveGoal
            </h1>
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {" "}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Image src={MenuTab} width={70} height={100} />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <form className="w-80 mx-16">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <Image priority src={SearchLogo} alt="Search" width={20} />
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="placeholder-black bg-transparent bflock w-full p-4 ps-10 text-sm text-black border border-black rounded-lg  focus:ring-gray-900 focus:border-blue-500  dark:border-gray-600  dark:text-white"
                  placeholder="Search..."
                  required=""
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
            <ul className=" text-gray-900 text-4xl flex flex-col p-4 md:p-0 mt-10 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-transparent md:dark:bg-transparent dark:white dark:text-white">
              <li>
                <Link
                  href="/"
                  className="block md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/result">Results</Link>
              </li>
              <li>
                <Link href="/news">News</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <button onClick={handleThemeSwitch}>
                  {theme === "dark" ? (
                    <Image
                      src={Sun}
                      className="invert"
                      width={30}
                      height={10}
                    />
                  ) : (
                    <Image src={Moon} width={28} />
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex bg-gray-300 px-52">
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Football" ? "bg-gray-700" : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Football")}
          >
            Football
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Basketball"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Basketball")}
          >
            Basketball
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Tennis" ? "bg-gray-700" : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Tennis")}
          >
            Tennis
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Hockey" ? "bg-gray-700" : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Hockey")}
          >
            Hockey
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Esports" ? "bg-gray-700" : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Esports")}
          >
            Esports
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "MotorSport"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("MotorSport")}
          >
            MotorSport
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Volleyball"
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Volleyball")}
          >
            Volleyball
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Baseball" ? "bg-gray-700" : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Baseball")}
          >
            Baseball
          </button>
          <button
            className={`uppercase h-10 flex-1 text-center ${
              selectedSport === "Rugby" ? "bg-gray-700" : "hover:bg-gray-700"
            } focus:outline-none focus:shadow-outline`}
            onClick={() => changeSport("Rugby")}
          >
            Rugby
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
