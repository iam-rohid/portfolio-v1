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
        <a className="flex flex-col gap-2 group">
          <h3 className="text-xl lg:text-2xl leading-normal font-bold group-hover:text-primary-500 transition-all duration-300">
            {title}
          </h3>
          <p>{excerpt}</p>
          <div className="flex flex-row items-center">
            <p className="mr-0 group-hover:mr-2 transition-all duration-150">
              Read More
            </p>
            <ArrowRightIcon className="w-5 h-5 transition-all duration-150 opacity-0 group-hover:opacity-100" />
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogCardLarge;
