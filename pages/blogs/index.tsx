import React from "react";
import BlogCard from "../../components/cards/BlogCard";
import blogs from "../../data/blogs.json";
import { BlogType } from "../../types/blog-type";

const BLogsPage = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {blogs.map((blog: BlogType, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BLogsPage;
