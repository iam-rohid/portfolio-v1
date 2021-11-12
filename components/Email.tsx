import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("rohidul209@gmail.com");
  const [emailCopied, setEmailCopied] = useState(false);
  const onClick = () => {
    if (emailCopied) return;
    window.navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };
  return (
    <div className="fixed bottom-0 right-0 w-20 h-96 flex flex-col items-center justify-end gap-8">
      <button
        className="px-4 text-gray-600 dark:text-gray-400"
        onClick={onClick}
      >
        <p
          className={`vertical-r1 leading-relaxed text-lg transition-all duration-300 ${
            emailCopied
              ? "text-green-500"
              : "hover:text-primary-500 dark:hover:text-primary-500 hover:-translate-y-2 "
          }`}
        >
          {emailCopied ? "Email copied to clipboard" : email}
        </p>
      </button>
      <div className="w-0.5 h-14 bg-gray-600 dark:bg-gray-400" />
    </div>
  );
};

export default Email;
