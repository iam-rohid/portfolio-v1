import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="container" id="projects">
      <h1 className="text-center text-3xl font-black">Some of my Projects</h1>
      <div className="flex flex-col pt-14 gap-12">
        <ProjectCard />
        <ProjectCard isEven />
        <ProjectCard />
        <ProjectCard isEven />
      </div>
    </section>
  );
};

export default ProjectsSection;
