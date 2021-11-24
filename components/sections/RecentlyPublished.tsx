/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { BlogType } from "../../types/blog-type";
import { ArrowRightIcon } from "@heroicons/react/outline";

const RecentlyPublished = (props: { blogs: BlogType[] }) => {
  const { blogs } = props;
  return (
    <section className="flex flex-col">
      <h2 className="section-title">Recently Published</h2>
      <div className="flex flex-col gap-16">
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
                <p className="text-sm opacity-80">
                  Published On {new Date(blog.createdAt).toLocaleString()}
                </p>
                <h3 className="text-2xl lg:text-3xl leading-normal font-bold group-hover:underline">
                  {blog.title}
                </h3>
                <p>{blog.excerpt}</p>
                <div className="flex flex-row items-center">
                  <b className="mr-2 group-hover:mr-4 transition-all duration-300">
                    Read More
                  </b>
                  <ArrowRightIcon className="w-5 h-5 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                </div>
              </a>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RecentlyPublished;
