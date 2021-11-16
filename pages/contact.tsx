import React from "react";
import Head from "next/head";
const ContactPage = () => {
  return (
    <div className="container flex items-center flex-col">
      <Head>
        <title>Contact - Rohid.dev</title>
        <meta name="description" content="Contact Page" />
      </Head>

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
        <div className="col-span-2 rounded-xl bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 ring-2 ring-transparent ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 focus-within:ring-primary-500">
          <input
            placeholder="Your Name"
            type="text"
            className="w-full h-14 bg-transparent outline-none border-none px-4"
          />
        </div>
        <div className="col-span-2 rounded-xl bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 ring-2 ring-transparent ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 focus-within:ring-primary-500">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-14 bg-transparent outline-none border-none px-4"
          />
        </div>
        <div className="col-span-2 rounded-xl bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 ring-2 ring-transparent ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 focus-within:ring-primary-500">
          <textarea
            placeholder="Say hi 👋"
            className="w-full h-64 bg-transparent outline-none border-none p-4 resize-none"
          />
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <button
            type="submit"
            className="relative px-24 w-full justify-center py-4 rounded-2xl text-xl font-semibold text-white flex flex-row items-center gap-4 bg-gradient-to-tr from-blue-600 to-purple-500 group"
          >
            <p className="whitespace-nowrap">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
