import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogType } from "../../types/blog-type";

const BlogCard = (props: { blog: BlogType }) => {
  const { blog } = props;
  return (
    <Link href={blog.link} passHref>
      <a target="_blank">
        <article className="w-full rounded-2xl overflow-hidden">
          <div
            style={{ aspectRatio: "16/9" }}
            className="relative w-full object-cover rounded-2xl overflow-hidden"
          >
            <Image
              src={blog.coverImage}
              alt={`${blog.title} - Thumbnail`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className="md:px-4 py-4 text-center">
            <h1 className="text-2xl md:text-2xl font-bold hover:underline">
              {blog.title}
            </h1>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
