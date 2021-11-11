import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ChevronRightIcon } from "@heroicons/react/outline";

const ProjectsSection = () => {
  return (
    <section className="container" id="projects">
      <div className="flex flex-row justify-between items-center py-14">
        <h1 className="text-center text-3xl font-black">Projects</h1>
        <Link href="/projects" passHref>
          <a className="h-10 px-4 hover:bg-opacity-10 dark:hover:bg-opacity-10 bg-gray-900 dark:bg-white bg-opacity-0 dark:bg-opacity-0 items-center justify-center flex flex-row rounded-lg gap-2">
            <p className="whitespace-nowrap">See More</p>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </Link>
      </div>
      <div className="flex flex-col gap-12">
        <ProjectCard />
        <ProjectCard isEven />
        <ProjectCard />
        <ProjectCard isEven />
      </div>
    </section>
  );
};

export default ProjectsSection;
