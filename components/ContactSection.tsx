import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="">
      <div className="container">
        <div>
          <h3 className="text-center text-3xl font-black">Say hi 👋😃</h3>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-8 pt-14"
        >
          <div className="col-span-2 md:col-span-1 rounded-xl bg-gray-100 dark:bg-gray-800 ring-2 ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-within:ring-primary-500">
            <input
              placeholder="Your name"
              type="text"
              className="w-full h-14 bg-transparent outline-none border-none px-4"
            />
          </div>
          <div className="col-span-2 md:col-span-1 rounded-xl bg-gray-100 dark:bg-gray-800 ring-2 ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-within:ring-primary-500">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-14 bg-transparent outline-none border-none px-4"
            />
          </div>
          <div className="col-span-2 rounded-xl bg-gray-100 dark:bg-gray-800 ring-2 ring-transparent ring-offset-2 ring-offset-white dark:ring-offset-gray-900 focus-within:ring-primary-500">
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
    </section>
  );
};

export default ContactSection;
