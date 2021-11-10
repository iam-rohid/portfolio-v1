import "tailwindcss/tailwind.css";
import NavBar from "../components/NavBar";
import "../styles/index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
