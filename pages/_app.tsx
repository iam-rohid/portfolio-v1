import React, { Fragment } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ThemeProvider from "../hooks/useTheme";
import "../styles/index.scss";
import "../styles/material-darker.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Fragment>
        {/* <Background /> */}
        <div className="relative">
          <Head>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
              crossOrigin="anonymous"
            ></script>
          </Head>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Fragment>
    </ThemeProvider>
  );
};

export default MyApp;
