/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ProjectType } from "../../types/project-type";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";

const ProjectCard = (props: { project: ProjectType }) => {
  const { project } = props;
  return (
    <article
      className={`group relative w-full overflow-visible items-center flex flex-col gap-8`}
    >
      <Link href={`/projects/${project.slug}`} passHref>
        <a className="inset-0 absolute"></a>
      </Link>
      <Link href={`/projects/${project.slug}`} passHref>
        <a>
          <img
            src={project.coverPhoto.url}
            alt={`${project.title} - Thumbnail`}
            className="w-full h-full object-cover rounded-xl md:rounded-2xl"
            style={{ aspectRatio: "16/9" }}
          />
        </a>
      </Link>
      <div
        className={`flex flex-col w-full z-10 pointer-events-none text-left`}
      >
        <h3 className="text-lg md:text-3xl leading-normal font-bold group-hover:underline">
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
