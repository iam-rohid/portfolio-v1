import React, { Fragment } from "react";
import { BlogType } from "../../types/blog-type";
import { PostAd } from "../ads";
import BlogCardSmall from "../cards/BlogCardSmall";

const SideBarBlogList = (props: { blogs: BlogType[]; title?: string }) => {
  const { blogs, title: listTitle } = props;
  return (
    <section id="categories" className="flex flex-col">
      {listTitle && <h2 className="section-title">{listTitle}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">
        {blogs.map((blog, i) => (
          <Fragment key={blog.slug}>
            <BlogCardSmall blog={blog} key={blog.slug} />
            {(i === 0 || i === 2 || i === 4) && <PostAd />}
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default SideBarBlogList;
