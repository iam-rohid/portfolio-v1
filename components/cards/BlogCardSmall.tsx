/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { BlogType } from "../../types/blog-type";

const BlogCardSmall = (props: { blog: BlogType }) => {
  const {
    blog: {
      slug,
      title,
      coverPhoto: { url: imageUrl },
    },
  } = props;
  return (
    <article>
      <Link href={`/blogs/${slug}`}>
        <a className="flex flex-col gap-4 group">
          <h3 className="text-xl font-bold group-hover:text-primary-500 leading-normal transition-colors duration-150">
            {title}
          </h3>
        </a>
      </Link>
    </article>
  );
};

export default BlogCardSmall;
