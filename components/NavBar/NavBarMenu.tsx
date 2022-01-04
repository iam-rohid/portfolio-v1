import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { MenuType } from "../../types";

const NavBarMenu = (props: { menu: MenuType }) => {
  const { menu } = props;
  const router = useRouter();

  return (
    <ul className="flex flex-row h-full gap-8">
      {menu.map((item, i) => (
        <NavMenuButton
          key={i}
          isActive={router.asPath === item.href}
          name={item.name}
          href={item.href}
          subMenu={item.subMenu}
        />
      ))}
    </ul>
  );
};

export default NavBarMenu;

const NavMenuButton = (props: {
  name: string;
  href: string;
  isActive: boolean;
  subMenu?: MenuType;
}) => {
  const { name, href, isActive, subMenu } = props;
  const [showSubMenu, setShowSubMenu] = useState(false);

  return (
    <li className="flex flex-row h-full items-center relative">
      <Link href={href} passHref>
        <a
          title={name}
          className="relative h-full items-center flex justify-center px-1"
        >
          {name}
          <span
            className={`h-1 bg-primary-500 rounded-full absolute bottom-0 transition-all duration-300 mb-2 ${
              isActive ? "w-8" : "w-0"
            }`}
          />
        </a>
      </Link>
      {subMenu && (
        <div className="relative">
          <button
            className="px-1 h-full"
            onClick={() => {
              setShowSubMenu(!showSubMenu);
            }}
          >
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          {showSubMenu && (
            <SubMenu
              subMenu={subMenu}
              showSubMenu={showSubMenu}
              onClose={() => {
                setShowSubMenu(false);
              }}
            />
          )}
        </div>
      )}
    </li>
  );
};

const SubMenu = (props: {
  subMenu: MenuType;
  showSubMenu: boolean;
  onClose: () => void;
}) => {
  const { subMenu, showSubMenu, onClose } = props;
  const subMenuRef = useRef(null);

  const onClickDoc = (e: MouseEvent) => {
    if (subMenuRef.current && !subMenuRef.current.contains(e.target)) {
      onClose();
    }
  };
  useEffect(() => {
    if (subMenuRef.current && showSubMenu) {
      document.addEventListener("click", onClickDoc);
    }
    return () => {
      document.removeEventListener("click", onClickDoc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subMenuRef, showSubMenu]);

  return (
    <div
      ref={subMenuRef}
      className="absolute w-80 shadow-2xl top-12 bg-white dark:bg-gray-800 p-4 rounded-xl -left-12"
    >
      <span className="absolute -top-2 w-8 h-8 bg-white dark:bg-gray-800 pointer-events-none left-11 rotate-45 rounded-md" />
      <ul className="grid grid-cols-2">
        {subMenu.map((item, i) => (
          <li key={i} className="flex whitespace-nowrap w-full">
            <Link href={item.href} passHref>
              <a className="hover:text-primary-500 dark:hover:text-primary-500 py-2 px-4 w-full">
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
