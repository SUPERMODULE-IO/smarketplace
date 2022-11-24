import React from "react";
import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
 // Helpful thirdweb hooks to connect and manage the wallet from metamask.


    return (
        <Html>
            <Head >

            </Head>
          
            <body className="bg-white text-black dark:bg-black dark:text-white">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

