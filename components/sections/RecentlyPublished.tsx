import React from "react";
import { BlogType } from "../../types/blog-type";
import BlogCardLarge from "../cards/BlogCardLarge";

const RecentlyPublished = (props: { blogs: BlogType[] }) => {
  const { blogs } = props;
  return (
    <section className="flex flex-col">
      <h2 className="section-title">Recently Published</h2>
      <div className="flex flex-col gap-16">
        {blogs.map((blog) => (
          <BlogCardLarge blog={blog} key={blog.slug} />
        ))}
      </div>
    </section>
  );
};

export default RecentlyPublished;
