import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <section>
        <div className="container py-16 flex flex-row items-center">
          <div className="flex-1 flex flex-col justify-center items-start">
            <p className="text-lg">Hi, there 👋</p>
            <h1 className="font-medium text-4xl mb-4">
              I'm <span className="font-black">Rohid</span>
            </h1>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
              saepe dignissimos ipsa repellat dolor veritatis fugit praesentium
              eos deserunt voluptates, dicta quae ipsum impedit totam.
            </p>
            <button className="px-16 py-3 bg-primary-500 hover:bg-primary-600 hover:shadow-xl hover:-mt-1 transition-all active:bg-primary-700 active:shadow-none active:mt-0 rounded-xl text-lg font-semibold text-white">
              Let's Talk
            </button>
          </div>
          <div className="flex-1"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
