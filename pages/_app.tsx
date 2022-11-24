import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Head from "next/head";
import SupermoduleFooter from "../components/SupermoduleFooter";
import Header from "../components/Header";
import Script from "next/script";


// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>

      <Head>
        <title>Supermodule Marketplace </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Worlds first Marketplace with real world utility services."
        />
        <meta
          name="keywords"
          content="Supermodule, Marketplace, NFT Marketplace, Metaverse, Web3, NFT, Crypto, Utility Service, Blockchain Service Provider"
        />
        <link rel="apple-touch-icon" sizes="57x57" href="./favicon/apple-icon-57x57.png"></link>
        <link rel="apple-touch-icon" sizes="60x60" href="./favicon/apple-icon-60x60.png"></link>
        <link rel="apple-touch-icon" sizes="72x72" href="./favicon/apple-icon-72x72.png"></link>
        <link rel="apple-touch-icon" sizes="76x76" href="./favicon/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="./favicon/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="./favicon/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="./favicon/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="./favicon/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-icon-180x180.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="./favicon/android-icon-192x192.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="96x96" href="./favicon/favicon-96x96.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png"></link>
        <link rel="manifest" href="./favicon/manifest.json"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="msapplication-TileImage" content="./favicon/ms-icon-144x144.png"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="description"
          content="Your Marketplace for Blockchain, Metaverse, Web3, NFT, Crypto Services. Start building your blockchain utilities 🚀" />

        <meta property="og:url" content="https://supermodule.io" />
        <meta property="og:type" content="Website" />
        <meta property="og:title" content="www.supermodule.io" />
        <meta property="og:description"
          content="Your Marketplace for Blockchain, Metaverse, Web3, NFT, Crypto Services. Start building your blockchain utilities 🚀" />
        <meta property="og:image" content="https://supermodule.io/assets/images/logos/supermodule_logo_black.png" />
        <meta property="og:image" content="https://supermodule.io/assets/images/logos/supermodule_logo_white.png" />

        <body
          className="flex flex-col bg-ltheme dark:bg-dtheme  xs:text-[20px] xs:leading-[27px] text-[16px] leading-[23px] font-normal dark:text-dtext text-ltext transition-colors duration-200 ease-in-out h-screen"></body>
      </Head>

      <Script id="theme-switch" src="./liquid.js" strategy="afterInteractive" ></Script>
      <Header />
      <Component {...pageProps} />
      <SupermoduleFooter />

    </ThirdwebProvider>
  );
}

export default MyApp;
