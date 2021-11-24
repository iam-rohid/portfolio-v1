import React from "react";
import { TagType } from "../../types/blog-type";
import Tag from "../Tag";
const PopularTags = (props: { tags: TagType[] }) => {
  const { tags } = props;
  return (
    <div className="flex flex-col">
      <h2 className="section-title">Popular Tags</h2>
      <div>
        <ul className="flex flex-row flex-wrap gap-4">
          {tags.map((tag) => (
            <Tag size="md" tag={tag} key={tag.slug} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
