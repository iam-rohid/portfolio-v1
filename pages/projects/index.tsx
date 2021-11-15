import React from "react";
import Head from "next/head";
import ProjectCard from "../../components/cards/ProjectCard";
import projects from "../../data/projects.json";
import { ProjectType } from "../../types/project-type";

const ProjectsPage = () => {
  return (
    <main className="container py-16">
      <Head>
        <title>Projects - Rohid.dev</title>
        <meta name="description" content="All Projects form rohid.dev" />
      </Head>

      <div className="flex flex-col gap-16">
        {projects.map((project: ProjectType, i) => (
          <ProjectCard project={project} key={i} isEven={i % 2 != 0} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;
