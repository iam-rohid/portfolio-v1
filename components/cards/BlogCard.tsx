/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { BlogType } from "../../types/blog-type";
import Tag from "../Tag";

const BlogCard = (props: { blog: BlogType }) => {
  const { blog } = props;
  return (
    <article className="flex flex-col bg-white dark:bg-gray-800 rounded-3xl px-4 group relative">
      <Link href={`/blogs/${blog.slug}`} passHref>
        <a className="inset-0 absolute"></a>
      </Link>
      <Link href={`/blogs/${blog.slug}`} passHref>
        <a
          style={{ aspectRatio: "16/9" }}
          className="relative w-full object-cover rounded-3xl overflow-hidden -translate-y-4 group-hover:-translate-y-8 transition-all duration-300 shadow-lg group-hover:shadow-xl ease-in-out"
        >
          <img
            src={blog.coverPhoto.url}
            alt={`${blog.title} - Thumbnail`}
            className="w-full h-full object-cover"
          />
        </a>
      </Link>
      <div className="px-4 pb-8 pointer-events-none">
        <p className="-translate-y-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
          Published on{" "}
          <strong>{new Date(blog.createdAt).toDateString()}</strong>
        </p>
        <h3 className="text-lg md:text-2xl leading-tight font-bold">
          {blog.title}
        </h3>
      </div>
    </article>
  );
};

export default BlogCard;
