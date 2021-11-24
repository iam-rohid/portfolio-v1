/* eslint-disable @next/next/no-img-element */
import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { BlogType } from "../../types/blog-type";
import BlogCardSmall from "../cards/BlogCardSmall";

const PopularBlogs = (props: { blogs: BlogType[] }) => {
  const { blogs } = props;
  return (
    <section id="categories" className="flex flex-col">
      <h2 className="section-title">Popular Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <BlogCardSmall blog={blog} key={blog.slug} />
        ))}
      </div>
    </section>
  );
};

export default PopularBlogs;
