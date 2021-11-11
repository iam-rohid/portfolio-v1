import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
