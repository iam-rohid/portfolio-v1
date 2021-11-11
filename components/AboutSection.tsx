import React from "react";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="w-full mx-auto px-4 py-14 max-w-5xl ">
        <div>
          <h3 className="text-center text-3xl font-black">About Me</h3>
        </div>
        <div className="pt-14 flex flex-col-reverse lg:flex-row gap-8 lg:items-start items-center">
          <div className="flex-1 w-full p-4 prose max-w-none">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
              praesentium adipisci. Culpa alias itaque et ea officia! Corporis
              suscipit unde incidunt dolorem, perspiciatis a omnis explicabo
              blanditiis possimus voluptatibus reprehenderit cum asperiores.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              rem non vel exercitationem <a href="">repudiandae</a> dicta beatae
              cum optio sed natus?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              accusantium facilis quisquam debitis blanditiis reprehenderit!
            </p>
            <div className="grid grid-cols-2">
              <ul>
                <li>Hlelo</li>
                <li>Hlelo</li>
                <li>Hlelo</li>
              </ul>
              <ul>
                <li>Hlelo</li>
                <li>Hlelo</li>
                <li>Hlelo</li>
              </ul>
            </div>
          </div>
          <div
            className="w-56 lg:w-72 group relative"
            style={{ aspectRatio: "2/3" }}
          >
            <div className="w-full h-full absolute -bottom-6 -right-6 rounded-2xl ring-2 ring-gray-400 dark:ring-gray-500 group-hover:-bottom-4 group-hover:-right-4 transition-all duration-300"></div>
            <img
              src="/assets/images/avatar.png"
              alt="Rohidul Islam Rohid"
              className="w-full h-full object-cover rounded-2xl transition-all duration-300 absolute overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
