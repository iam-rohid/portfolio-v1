/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ProjectType } from "../../types/project-type";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";

const ProjectCard = (props: { project: ProjectType; index: number }) => {
  const { project, index } = props;
  return (
    <article
      className={`group relative w-full overflow-visible items-center flex ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } gap-4 md:gap-8 flex-col`}
    >
      <Link href={`/projects/${project.slug}`} passHref>
        <a className="inset-0 absolute"></a>
      </Link>
      <Link href={`/projects/${project.slug}`} passHref>
        <a className="flex-1">
          <img
            src={project.coverPhoto.url}
            alt={`${project.title} - Thumbnail`}
            className="w-full h-full object-cover rounded-xl md:rounded-2xl"
            style={{ aspectRatio: "16/9" }}
          />
        </a>
      </Link>
      <div
        className={`flex flex-col w-full z-10 pointer-events-none text-left flex-1`}
      >
        <h3 className="text-xl md:text-2xl leading-normal font-bold group-hover:text-primary-500 transition-all duration-150">
          {project.title}
        </h3>
        {project.excerpt && (
          <p className="mt-3 leading-relaxed text-sm md:text-base">
            {project.excerpt}
          </p>
        )}
        <div
          className={`flex flex-row gap-2 w-full mt-2 md:mt-4 justify-center md:justify-start`}
        >
          {project.liveLink && (
            <Link href={project.liveLink}>
              <a
                className="hover:underline w-10 h-10 rounded-xl flex items-center justify-center bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10 pointer-events-auto"
                target="_blank"
                title="Live"
              >
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            </Link>
          )}
          {project.sourceLink && (
            <Link href={project.sourceLink}>
              <a
                className="hover:underline w-10 h-10 rounded-xl flex items-center justify-center bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10 pointer-events-auto"
                target="_blank"
                title="Source Code"
              >
                <CodeIcon className="w-6 h-6" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
