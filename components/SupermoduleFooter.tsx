import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://github.com/thirdweb-example/marketplace-next-ts";
  return (
    <>
      
  <footer className="bg-lfoot dark:bg-dfoot body-font border-t border-dborder shadow-inner mt-auto">
    <div
      className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center ">


          <span className=" text-3xl font-smf h-10 dark:text-gray-300">Supermodule</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">The world’s first digital marketplace that combines art and technology to
          create unique and exclusive assets that have real value. </p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center text-sm">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium  tracking-widest text-base mb-3">Product</h2>
          <nav className="list-none mb-10">
            <ul>
              <li>
                <a className="text-primary4 hover:text-primary1">Marketplace</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Services</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1"></a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1"></a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium  tracking-widest text-base mb-3">Company</h2>
          <nav className="list-none mb-10">
            <ul>
              <li>
                <a className="text-primary4 hover:text-primary1">About</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Careers</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Partnership </a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1"
                  href="mailto:investor@supermodule.io?subject=Investment Details&body=Please send me a copy of your Investment program!">Investors</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium  tracking-widest text-base mb-3">Resources</h2>
          <nav className="list-none mb-10">
            <ul>
              <li>
                <a className="text-primary4 hover:text-primary1" href="https://discord.gg/NJTDc4wvge">Support</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Feedback</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1"
                  href="https://github.com/SUPERMODULE-IO/resources">Branding</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1" href="https://blog.supermodule.io">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium  tracking-widest text-base mb-3">Policies</h2>
          <nav className="list-none mb-10">
            <ul>
              <li>
                <a className="text-primary4 hover:text-primary1">Terms</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Privacy</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Credits</a>
              </li>
              <li>
                <a className="text-primary4 hover:text-primary1">Licenses</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 <span className="font-smf"><span
              className="text-primary1">S</span>upermodule</span>. All rights reserved.
          <a href="https://twitter.com/vyvakz" aria-label="Twitter" rel="noopener noreferrer" className="text-gray-600 ml-1"
            target="_blank">@vyvakz</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <a className="text-gray-500 hover:text-primary1" href="https://fb.me/supermoduleio" aria-label="Facebook">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
              viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 hover:text-primary1" href="https://twitter.com/supermoduleio"
            aria-label="Twitter">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
              viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
              </path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 hover:text-primary1" href="https://instagram.com/supermoduleio"
            aria-label="Instagram">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 hover:text-primary1" href="https://linkedin.com/company/supermodule"
            aria-label="Linkedin">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
          <a className="ml-3 text-gray-500 hover:text-primary1" href="https://discord.gg/AfBAUMxT5G" aria-label="Discord">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="0" className="w-5 h-5" viewBox="0 0 16 15">
              <path
                d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>

    </>
  );
}
