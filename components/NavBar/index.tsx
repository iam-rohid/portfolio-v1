import React, { useEffect, useState } from "react";
import { MenuIcon, MoonIcon, SunIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useTheme } from "../../hooks/useTheme";
import NavBarMenu from "./NavBarMenu";
import IconButton from "./IconButton";
import { menu } from "./menu";
import FullScreenMenu from "./FullScreenMenu";
import { Github } from "../icons";

const NavBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { isDark, setIsDark } = useTheme();

  useEffect(() => {
    document.documentElement.classList.remove("overflow-hidden");
    if (showSideBar) {
      document.documentElement.classList.add("overflow-hidden");
    }
  }, [showSideBar]);

  return (
    <nav
      className={`w-full sticky left-0 right-0 z-30 top-0 bg-white dark:bg-gray-900 h-16`}
    >
      <div className="h-full flex flex-row gap-8 container">
        <div className="h-full flex flex-row items-center justify-start">
          <Link href="/" passHref>
            <a>
              <span className="text-2xl font-black logo text-primary-500">
                Rohid.dev
              </span>
            </a>
          </Link>
        </div>

        <div className={`h-full md:block hidden`}>
          <NavBarMenu menu={menu} />
        </div>

        <div className="flex flex-row gap-4 items-center justify-end flex-1 fixed md:static z-50 top-2 right-4">
          <IconButton
            icon={<SunIcon className="w-6 h-6" />}
            activeIcon={<MoonIcon className="w-6 h-6" />}
            isActive={isDark}
            onClick={() => setIsDark(!isDark)}
            className=""
          />
          <Link href="https://github.com/rohid-hub">
            <a target="_blank">
              <IconButton
                icon={<Github className="w-6 h-6 fill-current" />}
                isActive={isDark}
              />
            </a>
          </Link>
          <IconButton
            icon={<MenuIcon className="w-6 h-6" />}
            activeIcon={<XIcon className="w-6 h-6" />}
            isActive={showSideBar}
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
            className="md:hidden"
          />
        </div>

        <FullScreenMenu
          sideBarShowen={showSideBar}
          onClose={() => {
            setShowSideBar(false);
          }}
          menu={menu}
        />
      </div>
    </nav>
  );
};

export default NavBar;
