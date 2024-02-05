'use client'
import Image from "next/image"
import Link from "next/link";
import Logo from '../../../public/logofinal.png'
import { useState } from "react";
import { useEffect } from "react";
import SportsTabs from "../news/page";
import '../global.css'


export default function Header(){
  
  const savedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
  const initialTheme = savedTheme || (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  useEffect(() => {
    
    const logoImage = document.getElementById("logo-image");
    if (theme === 'dark') {
      logoImage.classList.add('dark-logo');
    } else {
      logoImage.classList.remove('dark-logo');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  

    return(
        <>
        

        <nav className="bg-gray-100 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 ">
  <div className=" max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex ">
    <Image
    id="logo-image"
      src={Logo}
      alt="Logo"
      width={70}
      height={100}
    />
      <h1 className="ml-3 self-center text-7xl text-gray-900 md:text-7xl lg:text-7xl dark:text-white">LiveGoal</h1>
      </div>
      <div>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        
    </button>
  </div>
  <div className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="bg-gray-100 text-gray-900 text-4xl flex flex-col p-4 md:p-0 mt-10 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:white dark:text-white">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="#">Results</a>
      </li>
      <li>
      <Link href="/news ">News</Link>
      </li>
      <li>
        <a href="#" >Favourites</a>
      </li>
      <li>
      <button onClick={handleThemeSwitch}>
  {theme === 'dark' ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="currentColor" className="bi bi-moon-fill" viewBox="0 0 16 16">
      <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278 "/>
    </svg>
  )}
</button>
      </li>
    </ul>
  </div>
  </div>
</nav>

        
        </>
    )
}
