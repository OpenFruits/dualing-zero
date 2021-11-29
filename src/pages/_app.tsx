import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Dualing demonstration" />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
