import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogType } from "../../types/blog-type";

const BlogCard = (props: { blog: BlogType }) => {
  const { blog } = props;
  return (
    <Link href={blog.link} passHref>
      <a target="_blank">
        <article className="group w-full rounded-2xl lg:rounded-3xl overflow-hidden">
          <div
            style={{ aspectRatio: "16/9" }}
            className="w-full object-cover rounded-2xl lg:rounded-3xl overflow-hidden"
          >
            <Image
              src={blog.coverImage}
              alt={`${blog.title} - Thumbnail`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              objectFit="cover"
              layout="responsive"
              width="16"
              height="9"
            />
          </div>
          <div className="md:px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold">{blog.title}</h1>
            <p className="mt-2 opacity-60 text-sm">{blog.date}</p>

            {blog.excerpt && (
              <p className="text-sm md:text-base mt-3 leading-relaxed">
                {blog.excerpt}
              </p>
            )}
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
