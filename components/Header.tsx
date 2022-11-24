import { useAddress, useMetamask, useDisconnect } from "@thirdweb-dev/react";
import Link from "next/link";
import React from "react";

import styles from "../styles/Home.module.css";

export default function Header() {
  // Helpful thirdweb hooks to connect and manage the wallet from metamask.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (


    <header>

      <nav
        className="
   flex flex-wrap
   items-center
   justify-between
   w-full
   py-4
   lg:py-0
   px-4
   fixed
   top-0
   z-10
   shadow-md
  
   bg-lnav       
   dark:bg-dnav
   dark:border-b
   dark:border-dborder
   
 "
      >
        <div className="flex-col px-3">
          <a
            className=" font-smf text-3xl  font-extrabold dark:text-white text-black"
            href="#"
          >
            <title>Supermodule</title>
            <Link href="/" passHref role="button">
              <img
                alt="Supermodule Marketplace"
                className="w-full hidden dark:block"
                src="./sm_logo_white_189x28.png"
              />
            </Link>
            <Link href="/" passHref role="button">
              <img
                alt="Supermodule Marketplace"
                className="w-full block dark:hidden"
                src="./sm_logo_black_189x28.png"
              />
            </Link>
          </a>
        </div>

        <label className="relative flex w-auto grow rounded text-gray-400 focus-within:text-gray-600 px-9 ">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6 pointer-events-none absolute top-1/2 left-10 h-6 w-6 -translate-y-1/2 transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <input id="search" type="search" placeholder="Search" className="form-input w-full appearance-none rounded border-2 border-white dark:border-black bg-gray-300 dark:bg-gray-800 py-2 pl-8 text-sm text-gray-500 placeholder-gray-400 focus:border-primary1 dark:focus:border-primary1  focus:outline-none" />
        </label>


        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="flex-none h-6 w-6 cursor-pointer lg:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className="hidden w-full lg:flex lg:place-items-start lg:w-auto"
          id="menu"
        >
          <ul
            className="
                      pt-4
                      text-base 
                      font-medium
                      lg:flex
                      lg:justify-between 
                      lg:pt-0
                      "
          >

            <li>
              <div className="flex flex-col items-center text-center justify-center md:pr-8">
                <a className=" hover:text-primary2 focus:text-primary1" href="#home-section" id="home">
                  <h2 className="font-medium title-font mt-4 text-lg">Explore</h2>

                </a>
                <div id="menu1-underline" className="w-full h-1 bg-primary1 rounded mb-4"></div>
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center text-center justify-center md:pr-8 ">
                <a className="hover:text-primary2 focus:text-primary1" href="#how-it-works-section" id="how-it-works">
                  <h2 className="font-medium title-font mt-4 text-lg">Leaderboard</h2>
                </a>
                <div id="menu2-underline" className="w-full h-1 bg-primary1 rounded mb-4 hidden "></div>
              </div>

            </li>
            <li>
              <div className="flex flex-col items-center text-center justify-center md:pr-8">
                <a className="hover:text-primary2 focus:text-primary1" href="#services-section" id="services">
                  <h2 className="font-medium title-font mt-4 text-lg">Create</h2>
                </a>
                <div id="menu3-underline" className="w-full h-1 bg-primary1 rounded mb-4 hidden"></div>
              </div>

            </li>

            <li>

            </li>


            <li>
              <div className="flex flex-col items-center text-center justify-center md:pr-8 mt-3">
                {address ? (
                  <>
                    <a
                      className="font-bold items-center bg-primary1 border-0 py-2 px-3 focus:outline-none hover:bg-gray-800  rounded  text-gray-100  flex"
                      onClick={() => disconnectWallet()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                      </svg>

                      Disconnect Wallet | {address.slice(0, 6).concat("...").concat(address.slice(-4))}
                    </a>

                  </>
                ) : (
                  <a
                    className="font-bold items-center bg-primary2  border-0 py-2 px-3 focus:outline-none  hover:bg-primary1  rounded text-gray-100 flex"
                    onClick={() => connectWithMetamask()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg> Connect Wallet
                  </a>
                )}
              </div>
            </li>
            <li>
              <div className="flex flex-col items-center text-center justify-center md:pr-8">
                <button
                  id="colorswitch"
                  name="colorswitch"
                  aria-label="Change Theme"
                  className="items-center mt-3 bg-gray-100 border-0 py-2 px-2 focus:outline-none hover:bg-gray-800 dark:hover:bg-gray-200  rounded-full text-base  dark:bg-gray-800 dark:text-gray-100 "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>

                </button>

              </div>
            </li>
          </ul>

        </div>
      </nav>

      <div className={styles.left}>
        <div>

        </div>
      </div>
      <div className={styles.right}>

      </div>

    </header>
  );
}
