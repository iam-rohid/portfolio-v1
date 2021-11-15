/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { ProjectType } from "../../types/project-type";

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
      <Link href={project.link || project.repoUrl || "#"} passHref>
        <a
          className={`overflow-hidden relative rounded-3xl w-full flex-1 -translate-y-5 shadow-lg group-hover:shadow-xl group-hover:-translate-y-8 transition-all duration-300`}
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={project.coverImage}
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
          <Link href={project.link || project.repoUrl || "#"} passHref>
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
            className={`flex flex-row gap-4 w-full ${
              compact ? "justify-center" : "justify-center lg:justify-start"
            }`}
          >
            <Link href="#">
              <a className="hover:underline mt-4">Read More</a>
            </Link>
            <Link href="#">
              <a className="hover:underline mt-4">Live</a>
            </Link>
            <Link href="#">
              <a className="hover:underline mt-4">Source Code</a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
