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
          <a className="h-10 px-4 hover:bg-gray-200 dark:hover:bg-gray-800 items-center justify-center flex flex-row rounded-lg gap-2">
            <p className="whitespace-nowrap">See More</p>
            <ChevronRightIcon className="w-5 h-5" />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {blogs.map((blog, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
