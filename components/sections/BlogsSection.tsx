import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
import BlogCard from "../cards/BlogCard";
import { BlogType } from "../../types/blog-type";

const BlogsSection = (props: { blogs: BlogType[] }) => {
  const { blogs } = props;
  return (
    <section className="container" id="blogs">
      <div className="flex flex-row justify-between items-center py-14">
        <h1 className="text-center text-3xl font-black">Blogs</h1>
        <Link href="/blogs" passHref>
          <a className="h-10 px-4 hover:bg-opacity-10 dark:hover:bg-opacity-10 bg-gray-900 dark:bg-white bg-opacity-0 dark:bg-opacity-0 items-center justify-center flex flex-row rounded-lg gap-2">
            <p className="whitespace-nowrap">See More</p>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
