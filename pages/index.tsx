import { ConnectWallet, MediaRenderer, useActiveListings, useAddress, useContract, useDisconnect, useMetamask, } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import Link from "next/link";

import router from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";



const Home: NextPage = () => {
  // Connect your marketplace smart contract here (replace this address)
  const { contract: marketplace } = useContract("0x617c36B652c41d6e442B5a9CCf4De6Ff37478Ab6", "marketplace");
  const { data: listings, isLoading: loadingListings } = useActiveListings(marketplace);
  const address = useAddress();



  return (
    <>
      <Header />
      <section className="body-font" id="listing-section">
        {/* Content */}
        <div className="container px-5 py-24 mx-auto">


          {/* Top Section */}
          <h1 className='font-smf text-3xl'>Supermodule Marketplace </h1>



          <div className="">
            <ConnectWallet />
          </div>


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


          {
            // If the listings are loading, show a loading message
            loadingListings ? (
              <div className="flex">
                <svg id="joinSpinner" className="animate-spin h-6 w-6 border-color-white mr-3" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                Loading...

              </div>

            ) : (
              // Otherwise, show the listings

              <div className="flex flex-wrap -m-4">
                {listings?.map((listing) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="p-4 md:w-1/3">
                    <div
                      key={listing.id}
                      className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
                      onClick={() => router.push(`/listing/${listing.id}`)}
                    >
                      <MediaRenderer className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={listing.asset.image}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{listing.buyoutCurrencyValuePerToken.displayValue}

                          {listing.buyoutCurrencyValuePerToken.symbol}

                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          <Link href={`/listing/${listing.id}`}>
                            <a className="text-xl font-bold text-primary2">{listing.asset.name}</a>
                          </Link>
                        </h1>
                        <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                        <div className="flex items-center flex-wrap ">
                          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                          </span>
                          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            )
          }


        </div>
      </section>

      <Footer />

    </>

  );
};

export default Home;
