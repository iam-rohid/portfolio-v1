import React from "react";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../data/projects.json";
import { ProjectType } from "../../types/project-type";

const ProjectsPage = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project: ProjectType, i) => (
          <ProjectCard compact project={project} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
