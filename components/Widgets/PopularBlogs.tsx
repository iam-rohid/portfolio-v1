import { ArrowRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";
import { BlogType } from "../../types/blog-type";

const PopularBlogs = (props: { blogs: BlogType[] }) => {
  const { blogs } = props;
  return (
    <section id="categories" className="flex flex-col">
      <h2 className="section-title">Popular Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">
        {blogs.map((blog) => (
          <article key={blog.slug} id={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>
              <a className="flex flex-col gap-4 group">
                <img
                  src={blog.coverPhoto.url}
                  alt={`${blog.title} - Thumbnail`}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: "2/1" }}
                />
                <h3 className="text-xl font-bold group-hover:underline leading-normal">
                  {blog.title}
                </h3>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularBlogs;
