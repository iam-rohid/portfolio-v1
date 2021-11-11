import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-4">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
          <p className="text-lg">Hi, there 👋</p>
          <h1 className="font-medium text-4xl mb-4">
            I'm <span className="font-black">Rohid</span>
          </h1>
          <h3 className="mb-6 text-xl font-semibold">
            Front-End Developer, UI/UX Designer
          </h3>
          <p className="mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint saepe
            dignissimos ipsa repellat dolor veritatis fugit praesentium eos
            deserunt voluptates, dicta quae ipsum impedit totam.
          </p>
          <button className="px-20 h-14 text-lg bg-primary-500 hover:bg-primary-600 active:bg-primary-700 rounded-xl font-semibold text-white">
            Let's Talk
          </button>
        </div>
        <div className="lg:flex-1 w-full relative h-[14rem] md:h-[24rem] overflow-visible scale-75 lg:scale-100 select-none">
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
