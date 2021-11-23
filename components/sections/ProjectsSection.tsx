import React from "react";
import Link from "next/link";
import ProjectCard from "../cards/ProjectCard";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ProjectType } from "../../types/project-type";

const ProjectsSection = (props: { projects: ProjectType[] }) => {
  const { projects } = props;
  return (
    <section className="container" id="projects">
      <div className="flex flex-row justify-between items-center py-14">
        <h1 className="text-center text-3xl font-black">Projects</h1>
        <Link href="/projects" passHref>
          <a className="h-10 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 items-center justify-center flex flex-row rounded-lg gap-2">
            <p className="whitespace-nowrap">See More Projects</p>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-16">
        {projects.map((project, i) => (
          <ProjectCard project={project} key={i} isEven={i % 2 != 0} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
