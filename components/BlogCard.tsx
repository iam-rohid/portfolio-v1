import React from "react";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href="#" passHref>
      <a>
        <article className="group w-full rounded-3xl overflow-hidden  hover:shadow-xl shadow-none transition-all duration-300 bg-white dark:bg-gray-900 dark:hover:bg-gray-800">
          <div
            style={{ aspectRatio: "16/9" }}
            className="w-full object-cover rounded-3xl overflow-hidden"
          >
            <img
              src="\assets\thumbnails\4.png"
              alt="Thumbnail"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl md:text-3xl font-bold">
              This is a project card
            </h1>

            <p className="hidden sm:inline-block mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, a.
              Nisi illum ipsa perferendis nemo.
            </p>
            <ul className="flex flex-row gap-2 flex-wrap mt-2 opacity-50">
              <li>#react</li>
              <li>#node</li>
              <li>#tailwindcss</li>
              <li>#firebase</li>
              <li>#nextjs</li>
            </ul>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default BlogCard;
