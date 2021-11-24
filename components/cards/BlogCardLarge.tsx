/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { BlogType } from "../../types/blog-type";

const BlogCardLarge = (props: { blog: BlogType }) => {
  const {
    blog: {
      slug,
      title,
      excerpt,
      createdAt,
      coverPhoto: { url: imageUrl },
    },
  } = props;

  return (
    <article>
      <Link href={`/blogs/${slug}`}>
        <a className="flex flex-col gap-4 group">
          <img
            src={imageUrl}
            alt={`${title} - Thumbnail`}
            className="w-full h-full object-cover rounded-xl"
            style={{ aspectRatio: "16/9" }}
          />
          <p className="text-sm opacity-80">
            Published On {new Date(createdAt).toLocaleString()}
          </p>
          <h3 className="text-2xl lg:text-3xl leading-normal font-bold group-hover:underline">
            {title}
          </h3>
          <p>{excerpt}</p>
          <div className="flex flex-row items-center">
            <b className="mr-2 group-hover:mr-4 transition-all duration-300">
              Read More
            </b>
            <ArrowRightIcon className="w-5 h-5 transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogCardLarge;
