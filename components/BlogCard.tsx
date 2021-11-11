import React from "react";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href="#" passHref>
      <a>
        <article className="group w-full rounded-2xl lg:rounded-3xl overflow-hidden">
          <div
            style={{ aspectRatio: "16/9" }}
            className="w-full object-cover rounded-2xl lg:rounded-3xl overflow-hidden"
          >
            <img
              src="\assets\thumbnails\4.png"
              alt="Thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="md:px-4 py-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              This is a project card
            </h1>

            <p className="text-sm md:text-base mt-3 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, a.
              Nisi illum ipsa perferendis nemo.
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
