import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="w-full mx-auto px-4 py-14 max-w-5xl ">
      <div>
        <h3 className="text-center text-3xl font-black">About Me</h3>
      </div>
      <div className="pt-14 flex flex-col-reverse lg:flex-row gap-8 lg:items-start items-center">
        <div className="flex-1 w-full p-4 prose max-w-none">
          <p>
            Hi 👋, My name is <strong>Rohidul Islam Rohid</strong>. I&apos;m
            intrested in Web application development, Mobile application
            development, Mobile game development, UI Designing etc. I just love
            to do things that has something to do with design.
          </p>
          <p>
            Here are a few technologies I&apos;m using daily in my work : 👇
          </p>
          <ul className="grid grid-cols-2 lg:grid-cols-3">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Electron</li>
            <li>Tailwindcss</li>
            <li>SASS</li>
            <li>Github</li>
            <li>Figma</li>
            <li>Unity</li>
            <li>Flutter</li>
            <li>Dart</li>
            <li>Adobe Illustrator</li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div
          className="w-56 lg:w-72 group relative"
          style={{ aspectRatio: "2/3" }}
        >
          <div className="w-full h-full absolute -bottom-6 -right-6 rounded-2xl ring-2 ring-gray-400 dark:ring-gray-500 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-300"></div>
          <Image
            src="/assets/images/avatar.png"
            alt="Rohidul Islam Rohid"
            className="w-full h-full object-cover rounded-2xl transition-all duration-300 absolute overflow-hidden"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
