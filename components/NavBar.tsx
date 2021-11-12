import React, { useEffect, useState } from "react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const router = useRouter();
  const { isDark, setIsDark } = useTheme();
  const [isAtTop, setIsAtTop] = useState(true);

  const onScrollChange = () => {
    if (window.scrollY === 0 && !isAtTop) {
      setIsAtTop(true);
    }
    if (window.scrollY !== 0 && isAtTop) {
      setIsAtTop(false);
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", onScrollChange);
    return () => {
      document.removeEventListener("scroll", onScrollChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAtTop]);
  return (
    <nav
      className={`nav-bar w-full h-14 md:h-16 sticky left-0 right-0 z-30 top-0 duration-300 ${
        isAtTop ? "bg-transparent" : "bg-white dark:bg-gray-900"
      }`}
      style={{ transitionProperty: "background-color" }}
    >
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
              name="Projects"
              href="/projects"
              isActive={router.asPath === "/projects"}
            />
            <NavMenuButton
              name="Blogs"
              href="/blogs"
              isActive={router.asPath === "/blogs"}
            />
            <NavMenuButton
              name="About"
              href="/about"
              isActive={router.asPath === "/about"}
            />
            <NavMenuButton
              name="Let's Talk"
              href="/contact"
              isActive={router.asPath === "/contact"}
            />
          </ul>
        </div>
        <div className="md:flex-1 h-14 md:h-16 flex flex-row items-center justify-end gap-2 fixed md:static top-0 right-0 px-4">
          <NavIconButton
            icon={<SunIcon className="w-6 h-6" />}
            activeIcon={<MoonIcon className="w-6 h-6" />}
            isActive={isDark}
            onClick={() => setIsDark(!isDark)}
          />
          {/* <button className="hidden md:flex h-10 w-32 rounded-lg texts items-center justify-center text-white bg-primary-500 font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors">
            Let's Talk
          </button> */}
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
          className={`transition-opacity duration-300 whitespace-nowrap ${
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
