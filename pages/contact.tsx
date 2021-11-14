import React from "react";
import ContactSection from "../components/sections/ContactSection";

const ContactPage = () => {
  return (
    <div className="container flex items-center flex-col">
      <div className="py-14 text-center prose">
        <h1>Hey! Let&apos;s Talk 👋😃</h1>
        <p>
          It&apos;s unbelievable that we haven&apos;t met each other yet.
          Let&apos;s have a coffee together. I will pay the bill.
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8"
      >
        <div className="col-span-2 rounded-xl bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 ring-2 ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-within:ring-primary-500">
          <input
            placeholder="Your Name"
            type="text"
            className="w-full h-14 bg-transparent outline-none border-none px-4"
          />
        </div>
        <div className="col-span-2 rounded-xl bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 ring-2 ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-within:ring-primary-500">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-14 bg-transparent outline-none border-none px-4"
          />
        </div>
        <div className="col-span-2 rounded-xl bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 ring-2 ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-within:ring-primary-500">
          <textarea
            placeholder="Say hi 👋"
            className="w-full h-64 bg-transparent outline-none border-none p-4 resize-none"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <button className="w-full text-xl h-14 text-white font-semibold bg-primary-500 hover:bg-primary-600 active:bg-primary-700 rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
