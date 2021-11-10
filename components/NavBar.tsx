import React, { useEffect, useState } from "react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const ThemeKey = "THEME";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState<boolean>(null);
  const [showSideBar, setShowSideBar] = useState(false);

  const router = useRouter();

  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
    if (showSideBar) {
      document.body.classList.add("overflow-hidden");
    }
  }, [showSideBar]);

  useEffect(() => {
    if (!window || darkMode === null) return;
    document.documentElement.classList.remove("dark");
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(ThemeKey, "dark");
    } else {
      localStorage.setItem(ThemeKey, "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const theme = localStorage.getItem(ThemeKey);
    const isDark =
      theme === undefined
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : theme === "dark";
    console.log(theme);
    setDarkMode(isDark);
  }, []);

  return (
    <nav className="nav-bar w-full h-16 bg-white dark:bg-gray-800 sticky top-0 left-0 right-0">
      <div className="h-full flex flex-row gap-4 container">
        <div className="h-full lg:flex-1 flex flex-row items-center justify-start">
          <Link href="/" passHref>
            <a className="font-bold text-xl h-full items-center justify-center flex">
              Rohid
            </a>
          </Link>
        </div>

        {showSideBar && (
          <div
            onClick={() => setShowSideBar(false)}
            className={`md:hidden w-screen h-screen fixed inset-0 bg-black bg-opacity-20`}
          ></div>
        )}

        <div
          className={`flex items-center justify-center fixed md:static h-screen md:h-auto w-64 md:w-auto top-0  bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent  ${
            showSideBar ? "right-0" : "-right-64"
          }`}
        >
          <ul className="flex flex-col md:flex-row h-full items-center justify-start w-full pt-20 md:pt-0">
            <NavMenuButton
              name="About"
              href="/#about"
              isActive={router.asPath === "/#about"}
            />
            <NavMenuButton
              name="Projects"
              href="/#projects"
              isActive={router.asPath === "/#projects"}
            />
            <NavMenuButton
              name="Blogs"
              href="/#blogs"
              isActive={router.asPath === "/#blogs"}
            />
            <NavMenuButton
              name="Contact Me"
              href="/#contact"
              isActive={router.asPath === "/#contact"}
            />
          </ul>
        </div>
        <div className="md:flex-1 h-16 flex flex-row items-center justify-end gap-2 fixed md:static top-0 right-0 px-4">
          <NavIconButton
            icon={<SunIcon className="w-6 h-6" />}
            activeIcon={<MoonIcon className="w-6 h-6" />}
            isActive={darkMode}
            onClick={() => setDarkMode(!darkMode)}
          />
          <button className="flex h-10 w-32 rounded-lg texts items-center justify-center text-white bg-primary-500 font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors">
            Let's Talk
          </button>
          <NavIconButton
            icon={<MenuIcon className="w-6 h-6" />}
            activeIcon={<XIcon className="w-6 h-6" />}
            isActive={showSideBar}
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
            className="md:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

const NavMenuButton = (props: {
  className?: string;
  name: string;
  href: string;
  isActive: boolean;
}) => {
  const { name, href, isActive, className } = props;
  return (
    <Link href={href} passHref>
      <a
        className={`lg:h-full py-6 lg:py-0 px-6 w-full md:w-auto flex items-center justify-center relative ${className}`}
      >
        <li
          className={`transition-all duration-300 whitespace-nowrap ${
            isActive ? "opacity-100" : "opacity-70"
          }`}
        >
          {name}
        </li>
        <span
          className={`h-1 bg-primary-500 rounded-full absolute bottom-0 transition-all duration-300 ${
            isActive ? "w-8" : "w-0"
          }`}
        ></span>
      </a>
    </Link>
  );
};

const NavIconButton = (props: {
  onClick: () => void;
  icon: JSX.Element;
  activeIcon?: JSX.Element;
  isActive?: boolean;
  className?: string;
}) => {
  const { onClick, icon, activeIcon, isActive, className } = props;
  return (
    <button
      className={`flex h-10 rounded-md items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-700 ${className}`}
      onClick={onClick}
      style={{ aspectRatio: "1" }}
    >
      {isActive && activeIcon ? activeIcon : icon}
    </button>
  );
};
export default NavBar;
