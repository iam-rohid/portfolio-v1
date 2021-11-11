import React from "react";
import BlogCard from "../../components/BlogCard";
import ProjectCard from "../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProjectCard compact />
        <ProjectCard compact />
        <ProjectCard compact />
        <ProjectCard compact />
        <ProjectCard compact />
      </div>
    </div>
  );
};

export default ProjectsPage;
