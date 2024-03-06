"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/logofinal.png";
import Sun from "@/public/svg/sun.svg";
import Moon from "@/public/svg/moon.svg";
import MenuTab from "@/public/svg/menutab.svg";
import SearchLogo from "@/public/svg/searchicon.svg";
import SearchBar from "./(searchbar)/searchbar";
import "../global.css";

import Sport from "./SportsTab";

const Header = () => {
  const [selectedSport, setSelectedSport] = useState("");

  const handleSportChange = (sport) => {
    setSelectedSport(sport);
  };

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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
            id="navbar-sticky"
          >
            <ul className=" text-gray-900 text-4xl flex flex-col p-4 md:p-0 mt-10 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-transparent md:dark:bg-transparent dark:white dark:text-white">
              <li>
                <Link
                  href="/"
                  className="block md:bg-transparent "
                  aria-current="page"
                >
                  Scores
                </Link>
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
        <Sport
          selectedSport={selectedSport}
          onChangeSport={handleSportChange}
        />
      </nav>
    </>
  );
};

export default Header;
