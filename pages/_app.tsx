import type { AppProps } from "next/app";
import Head from "next/head";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { SessionProvider } from "next-auth/react";

import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Airbnb clone</title>
        <meta name="description" content="Airbnb clone with nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
