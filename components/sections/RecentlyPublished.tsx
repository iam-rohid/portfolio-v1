import React, { Fragment } from "react";
import { BlogType } from "../../types/blog-type";
import { BlogListAd } from "../ads";
import BlogCardLarge from "../cards/BlogCardLarge";

const RecentlyPublished = (props: { blogs: BlogType[] }) => {
  const { blogs } = props;
  return (
    <section className="flex flex-col">
      <h2 className="section-title">Recently Published</h2>
      <div className="flex flex-col gap-16">
        {blogs.map((blog, i) => (
          <Fragment key={blog.slug}>
            <BlogCardLarge blog={blog} />
            {(i === 1 || i === 3) && <BlogListAd />}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default RecentlyPublished;
