import React from "react";

import Image from "next/image";
import Logo from "@/public/images/logofinal.png";

import Instagram from "@/public/svg/instagram.svg";
import Facebook from "@/public/svg/facebook.svg";
import GitHub from "@/public/svg/github.svg";

const Footer = () => {
  return (
    <>
      <div className=" mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0 ">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image
                src={Logo}
                width={90}
                height={200}
                alt="Picture of the author"
              />
              <span className="self-center text-4xl uppercase dark:text-white">
                LiveGoal
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    LiveGoal
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/mariorogachev"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              LiveGoal
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=100086488427565"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white "
            >
              <Image src={Facebook} width={20} />
            </a>
            <a
              href="https://www.instagram.com/mariorogachev/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Image src={Instagram} width={20} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://github.com/mariorogachev"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <Image src={GitHub} width={20} />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
