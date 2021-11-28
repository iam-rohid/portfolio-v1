import React from "react";
import Link from "next/link";
import { MenuType } from "../../types";

const FullScreenMenu = (props: {
  sideBarShowen?: boolean;
  onClose?: () => void;
  menu: MenuType;
}) => {
  const { onClose, menu, sideBarShowen } = props;
  return (
    <div
      className={`fixed z-40 md:hidden inset-0 w-full h-full transition-all duration-300 overflow-y-auto bg-white dark:bg-gray-900 ${
        sideBarShowen
          ? "backdrop-blur-lg pointer-events-auto bg-opacity-50 dark:bg-opacity-50"
          : "backdrop-blur-none pointer-events-none bg-opacity-0 dark:bg-opacity-0"
      }`}
    >
      <div
        className={`w-full h-full overflow-y-auto transition-all duration-300 ${
          sideBarShowen ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className={`flex flex-col w-full py-20`}>
          {menu.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>
                <a
                  className="text-2xl font-black py-3 pr-2 pl-10 w-full block"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              </Link>
              {item.subMenu && (
                <ul>
                  {item.subMenu.map((subItem, i) => (
                    <li key={i}>
                      <Link href={subItem.href}>
                        <a className="text-xl font-black py-3 pr-2 pl-20 w-full block">
                          {subItem.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FullScreenMenu;
