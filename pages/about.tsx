/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto px-4 py-16 max-w-5xl ">
      <Head>
        <title>About - Rohid.dev</title>
        <meta name="description" content="About Page" />
      </Head>

      <div className="mb-16">
        <h3 className="text-center text-3xl font-black">
          About Me <span className="font-normal">👨‍💻</span>
        </h3>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:items-start items-center">
        <div className="flex-1 w-full p-4 prose max-w-none font-medium">
          <p>
            Hi 👋, My name is{" "}
            <span className="font-bold">Rohidul Islam Rohid</span>. I&apos;m
            intrested in Web application development, Mobile application
            development, Mobile game development, UI Designing etc. I just love
            to do things that has something to do with design.
          </p>
          <p>
            Here are some few technologies I&apos;m using daily in my work : 👇
          </p>
          <ul className="grid grid-cols-2 lg:grid-cols-3">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Electron</li>
            <li>Tailwindcss</li>
            <li>SASS</li>
            <li>Github</li>
            <li>Figma</li>
            <li>Unity</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Swift</li>
            <li>SwiftUI</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div
          className="w-80 lg:w-80 group relative"
          style={{ aspectRatio: "3/4" }}
        >
          <img
            src="/assets/images/avatar.jpg"
            alt="Rohidul Islam Rohid"
            className="w-full h-full object-cover rounded-2xl absolute overflow-hidden left-10 top-10 blur-2xl opacity-30"
          />
          <img
            src="/assets/images/avatar.jpg"
            alt="Rohidul Islam Rohid"
            className="inset-0 w-full h-full object-cover rounded-2xl absolute overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
