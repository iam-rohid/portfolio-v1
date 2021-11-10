import { DuplicateIcon } from "@heroicons/react/outline";
import React, { useRef } from "react";

const HeroSection = () => {
  const emailAddress = useRef("sayhi@rohid.dev");

  return (
    <section>
      <div className="container py-6 lg:py-32 flex flex-col-reverse lg:flex-row items-center">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
          <p className="text-lg">Hi, there 👋</p>
          <h1 className="font-medium text-4xl mb-4">
            I'm <span className="font-black">Rohid</span>
          </h1>
          <p className="mb-6 text-lg">Front-End Developer, UI/UX Designer</p>
          <p className="mb-12 dark:text-gray-400 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe
            dignissimos ipsa repellat dolor veritatis fugit praesentium eos
            deserunt voluptates, dicta quae ipsum impedit totam.
          </p>
          <div className="flex lg:flex-row flex-col-reverse gap-4 w-full">
            <button className="lg:flex-1 h-14 text-lg bg-primary-500 hover:bg-primary-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-150 active:bg-primary-700 hover:shadow-xl active:shadow-none rounded-xl font-semibold text-white">
              Let's Talk
            </button>
            <div className="lg:flex-1 h-14 flex flex-row items-center rounded-xl border border-gray-100 dark:border-gray-800 px-1">
              <p className="flex-1 px-4 pr-8 text-left">
                {emailAddress.current}
              </p>
              <button className="w-11 h-11 rounded-lg text-white bg-primary-500 hover:bg-primary-600 active:bg-primary-700 flex items-center justify-center hover:-translate-y-1 active:translate-y-0 hover:shadow-xl active:shadow-none transition-all duration-150">
                <DuplicateIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 w-full relative h-[20rem] md:h-[24rem] overflow-visible scale-75 md:scale-100 select-none">
          <div className="absolute inset-1/2 -translate-x-48 sm:-translate-x-44 translate-y-6 w-36 h-36 sm:w-40 sm:h-40 bg-white dark:bg-gray-900 shadow-lg flex items-center justify-center rounded-2xl">
            <span className="text-[4rem] sm:text-[5rem]">🏋️</span>
          </div>
          <div className="absolute inset-1/2 -translate-x-52 sm:-translate-x-52 -translate-y-40 sm:-translate-y-48 w-40 h-40 sm:w-48 sm:h-48 bg-white dark:bg-gray-900 shadow-xl flex items-center justify-center rounded-2xl">
            <span className="text-[6rem] sm:text-[7rem]">👨‍🎨</span>
          </div>
          <div className="absolute inset-1/2 -translate-x-8 sm:-translate-x-0 -translate-y-32 right-16 w-56 h-56 sm:w-64 sm:h-64 bg-white dark:bg-gray-900 shadow-2xl flex items-center justify-center rounded-3xl">
            <span className="text-[9rem] sm:text-[10rem]">🧑‍💻</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
