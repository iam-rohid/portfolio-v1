import React, { Fragment } from "react";
import Script from "next/script";
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
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6QZTGSP5LL"
            strategy="beforeInteractive"
          />

          <Script id="google-analytics" strategy="beforeInteractive">
            {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6QZTGSP5LL');
            `}
          </Script>
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7322439099058988"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />

          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Fragment>
    </ThemeProvider>
  );
};

export default MyApp;
