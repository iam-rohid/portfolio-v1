import React from "react";
import BlogCard from "../../components/BlogCard";

const BLogsPage = () => {
  return (
    <div className="container py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default BLogsPage;
