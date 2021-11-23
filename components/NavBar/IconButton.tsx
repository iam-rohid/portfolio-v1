import React from "react";

const IconButton = (props: {
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

export default IconButton;
