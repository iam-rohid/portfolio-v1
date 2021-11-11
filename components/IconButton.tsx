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
      className={`flex h-10 w-10 rounded-md items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 active:bg-gray-200 dark:active:bg-gray-600 ${className}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
