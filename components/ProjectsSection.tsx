import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="container py-14" id="projects">
      <h1 className="text-center text-3xl font-black">Some of my Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-14 gap-12">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectsSection;
