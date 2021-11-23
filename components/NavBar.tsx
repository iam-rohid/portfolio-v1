import React, { useEffect, useState } from "react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../hooks/useTheme";
import Logo from "./Logo";

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
      className={`nav-bar w-full h-14 md:h-16 sticky left-0 right-0 z-30 top-0 bg-white dark:bg-gray-800`}
      style={{ transitionProperty: "background-color" }}
    >
      <div className="h-full flex flex-row gap-4 container">
        <div className="h-full lg:flex-1 flex flex-row items-center justify-start">
          <Link href="/" passHref>
            <a>
              <Logo className="h-8" />
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
            {/* <NavMenuButton
              name="Home"
              href="/"
              isActive={router.asPath === "/"}
            /> */}
            <NavMenuButton
              name="Projects"
              href="/projects"
              isActive={router.asPath.startsWith("/projects")}
            />
            <NavMenuButton
              name="Blogs"
              href="/blogs"
              isActive={router.asPath.startsWith("/blogs")}
            />
            <NavMenuButton
              name="Tags"
              href="/tags"
              isActive={router.asPath.startsWith("/tags")}
            />
            <NavMenuButton
              name="About Me"
              href="/about"
              isActive={router.asPath.startsWith("/about")}
            />
            <NavMenuButton
              name="Let's Talk"
              href="/contact"
              isActive={router.asPath.startsWith("/contact")}
            />
          </ul>
        </div>
        <div className="md:flex-1 h-14 md:h-16 flex flex-row items-center justify-end gap-2 fixed md:static top-0 right-8">
          <NavIconButton
            icon={<SunIcon className="w-6 h-6" />}
            activeIcon={<MoonIcon className="w-6 h-6" />}
            isActive={isDark}
            onClick={() => setIsDark(!isDark)}
          />
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
    <li
      className={`transition-opacity duration-300 whitespace-nowrap group-hover:opacity-100 group relative lg:h-full w-full md:w-auto ${
        isActive ? "opacity-100" : "opacity-70"
      }`}
    >
      <Link href={href} passHref>
        <a
          title={name}
          className={`h-full px-5 w-full flex items-center justify-center ${className}`}
        >
          {name}
          <span
            className={`h-1 bg-primary-500 rounded-full absolute bottom-0 transition-all duration-300 mb-2 ${
              isActive ? "w-8" : "w-0"
            }`}
          ></span>
        </a>
      </Link>
    </li>
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
