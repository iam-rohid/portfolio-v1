/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ProjectType } from "../../types/project-type";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";

const ProjectCard = (props: {
  project: ProjectType;
  isEven?: boolean;
  compact?: boolean;
}) => {
  const { isEven, compact, project } = props;
  return (
    <article
      className={`group w-full rounded-3xl overflow-visible flex bg-white dark:bg-gray-800 items-center px-4 flex-col ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <Link href={`/projects/${project.slug}`} passHref>
        <a
          className={`overflow-hidden relative rounded-3xl w-full flex-1 -translate-y-5 shadow-lg group-hover:shadow-xl group-hover:-translate-y-8 transition-all duration-300`}
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={project.coverPhoto.url}
            alt={`${project.title} - Thumbnail`}
            className="w-full h-full object-cover"
          />
        </a>
      </Link>

      <div
        className={`flex flex-1 flex-col text-center ${
          compact ? "text-center" : "text-center lg:text-left"
        }`}
      >
        <div className="md:p-8 px-4 pb-6">
          <Link href={`/projects/${project.slug}`} passHref>
            <a>
              <h3 className="text-2xl lg:text-2xl font-bold">
                {project.title}
              </h3>
            </a>
          </Link>

          {project.excerpt && !compact && (
            <p className="mt-3 leading-relaxed lg:inline-block hidden">
              {project.excerpt}
            </p>
          )}

          <div
            className={`flex flex-row gap-2 w-full ${
              compact ? "justify-center" : "justify-center lg:justify-start"
            }`}
          >
            {project.liveLink && (
              <Link href={project.liveLink}>
                <a
                  className="hover:underline mt-4 w-10 h-10 rounded-xl flex items-center justify-center bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10"
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
                  className="hover:underline mt-4 w-10 h-10 rounded-xl flex items-center justify-center bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10"
                  target="_blank"
                  title="Source Code"
                >
                  <CodeIcon className="w-6 h-6" />
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
