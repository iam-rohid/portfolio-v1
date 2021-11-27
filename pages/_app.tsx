import React, { Fragment } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ThemeProvider from "../hooks/useTheme";
import "tailwindcss/tailwind.css";
import "../styles/index.scss";
import "../styles/material-darker.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Fragment>
        <div className="relative">
          <Head>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-6QZTGSP5LL"
            ></script>
            <script>
              {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6QZTGSP5LL');
              `}
            </script>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
              crossOrigin="anonymous"
            />
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
