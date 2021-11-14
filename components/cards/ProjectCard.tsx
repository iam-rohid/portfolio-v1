import { ExternalLinkIcon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import IconButton from "../IconButton";
import { ProjectType } from "../../types/project-type";

const ProjectCard = (props: {
  project: ProjectType;
  isEven?: boolean;
  compact?: boolean;
}) => {
  const { isEven, compact, project } = props;
  return (
    <article
      className={`w-full rounded-3xl overflow-visible flex flex-col ${
        compact
          ? "gap-4"
          : isEven
          ? "lg:flex-row-reverse lg:items-center gap-4 lg:gap-12"
          : "lg:flex-row lg:items-center gap-4 lg:gap-12"
      }`}
    >
      <Link href={project.link || project.repoUrl || "#"} passHref>
        <a className="flex-1" target="_blank">
          <div
            className={`overflow-hidden relative rounded-2xl w-full`}
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={project.coverImage}
              alt={`${project.title} - Thumbnail`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              objectFit="cover"
              layout="fill"
              loading="lazy"
            />
          </div>
        </a>
      </Link>

      <div
        className={`flex flex-1 flex-col text-center ${
          compact ? "text-center" : "text-center lg:text-left"
        }`}
      >
        <Link href={project.link || project.repoUrl || "#"} passHref>
          <a
            target="_blank"
            className="text-2xl lg:text-3xl font-bold hover:underline"
          >
            {project.title}
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
    </article>
  );
};

export default ProjectCard;
