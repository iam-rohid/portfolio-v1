import { XIcon } from "@heroicons/react/outline";
import React from "react";

const SideBar = (props: { onClose: () => void }) => {
  return (
    <aside className="w-full h-full">
      <div className="h-14 flex flex-row justify-between items-center">
        <div className="flex items-center justify-start px-4">
          <h2 className="text-xl font-medium">Menu</h2>
        </div>
      </div>
      <ul className="flex-col flex justify-start">
        <li className="w-full h-12 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-primary-500 dark:active:bg-primary-500 active:text-white flex items-center justify-start bg-transparent">
          Home
        </li>
        <li className="w-full h-12 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-primary-500 dark:active:bg-primary-500 active:text-white flex items-center justify-start bg-transparent">
          About
        </li>
        <li className="w-full h-12 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-primary-500 dark:active:bg-primary-500 active:text-white flex items-center justify-start bg-transparent">
          Services
        </li>
        <li className="w-full h-12 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-primary-500 dark:active:bg-primary-500 active:text-white flex items-center justify-start bg-transparent">
          Portfolio
        </li>
        <li className="w-full h-12 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-primary-500 dark:active:bg-primary-500 active:text-white flex items-center justify-start bg-transparent">
          Blogs
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
