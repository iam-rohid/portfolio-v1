import React from "react";
import BlogCard from "./BlogCard";

const BlogsSection = () => {
  return (
    <section className="container" id="blogs">
      <h1 className="text-center text-3xl font-black">Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-14 gap-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default BlogsSection;
