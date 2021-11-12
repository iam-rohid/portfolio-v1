import React, { Fragment } from "react";
import "tailwindcss/tailwind.css";
import Background from "../components/Background";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ThemeProvider from "../hooks/useTheme";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Fragment>
        <Background />
        <div className="relative">
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Fragment>
    </ThemeProvider>
  );
};

export default MyApp;
