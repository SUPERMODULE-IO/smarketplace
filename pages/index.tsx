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
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const marketplace = useMarketplace(
    "0x71EE5708D7f1D9D84cE72BFCB2e4220A1Ed3D800" // Your marketplace contract address here
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(marketplace);

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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>

                <span className="inner"> Start Listing </span>
              </a>
            </Link>
          </div>

          <div className="main">
            {
              // If the listings are loading, show a loading message
              loadingListings ? (
                <div className="flex">
                  <svg id="joinSpinner" className="animate-spin h-6 w-6 border-color-white mr-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                  </svg>
                  Loading...

                </div>

              ) : (
                // Otherwise, show the listings
                <div className={styles.listingGrid}>
                  {listings?.map((listing) => (
                    <div
                      key={listing.id}
                      className={styles.listingShortView}
                      onClick={() => router.push(`/listing/${listing.id}`)}
                    >
                      <MediaRenderer className=" rounded-t-lg"
                        src={listing.asset.image}
                        style={{

                          // Fit the image to the container
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <h2 className={styles.nameContainer}>
                        <Link href={`/listing/${listing.id}`}>
                          <a className="text-xl font-bold text-primary2">{listing.asset.name}</a>
                        </Link>
                      </h2>

                      <p>
                        <b>{listing.buyoutCurrencyValuePerToken.displayValue}</b>{" "}
                        {listing.buyoutCurrencyValuePerToken.symbol}
                      </p>
                    </div>
                  ))}
                </div>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
