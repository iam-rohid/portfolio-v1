import React from "react";
import { TagType } from "../../types/blog-type";
import Tag from "../Tag";

const SideBarTagList = (props: { tags: TagType[]; title?: string }) => {
  const { tags, title: listTitle } = props;
  return (
    <div className="flex flex-col">
      {listTitle && <h2 className="section-title">{listTitle}</h2>}
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

export default SideBarTagList;
