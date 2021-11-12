import React from "react";

const IconButton = (props: {
  onClick?: () => void;
  icon: JSX.Element;
  className?: string;
}) => {
  const { onClick, icon, className } = props;
  return (
    <button
      onClick={onClick}
      className={`flex h-10 w-10 rounded-md items-center justify-center bg-gray-900 dark:bg-white dark:bg-opacity-0 bg-opacity-0 hover:bg-opacity-5 dark:hover:bg-opacity-10 active:bg-opacity-10 dark:active:bg-opacity-20 ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
