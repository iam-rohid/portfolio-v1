import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
const HeroSection = () => {
  return (
    <section>
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-4">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start lg:text-left text-center">
          <p className="text-lg">Hi, there 👋</p>
          <h1 className="font-medium text-4xl mb-4">
            I&apos;m <span className="font-black">Rohid</span>
          </h1>
          <h3 className="mb-6 text-xl font-semibold">
            Front-End Developer, UI/UX Designer, Game Developer
          </h3>
          <p className="mb-12 leading-relaxed">
            I&apos;m a sowftware developer specializeing in building responsibe
            front-end website/web applications. I also love to do UI design with
            Figma. I also do unity 3d mobile game development.
          </p>
          <Link href="/contact" passHref>
            <a className="relative px-24 py-4 rounded-2xl text-xl font-semibold text-white flex flex-row items-center gap-4 bg-gradient-to-tr from-blue-600 to-purple-500 group">
              <p className="whitespace-nowrap">Let&apos;s Talk</p>
              <ChevronRightIcon className="w-8 h-8 absolute right-12 group-hover:right-8 opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </a>
          </Link>
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
