import React from "react";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../data/projects.json";
import { ProjectType } from "../../types/project-type";

const ProjectsPage = () => {
  return (
    <div className="container py-16">
      <div className="flex flex-col gap-16">
        {projects.map((project: ProjectType, i) => (
          <ProjectCard project={project} key={i} isEven={i % 2 != 0} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
