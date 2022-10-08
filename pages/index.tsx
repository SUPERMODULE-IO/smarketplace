import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useMarketplace,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";

const Home: NextPage = () => {


  return (
    <>
      <section className="body-font" id="listing-section">
        {/* Content */}
        <div className={styles.container}>
          {/* Top Section */}
          <h1 className='font-smf text-3xl'>Supermodule Marketplace </h1>



          <div style={{ marginTop: 32, marginBottom: 32 }}>
            <Link href="/create">
              <a className="font-bold items-center bg-primary2 border-0 py-2 px-3 focus:outline-none hover:bg-primary1  rounded  text-gray-100 flex" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>

                <span className="inner"> Start Listing </span>
              </a>
            </Link>
          </div>


        </div>
      </section>
    </>
  );
};

export default Home;
