import React from "react";
import Link from "next/link";
import { TagType } from "../types/blog-type";

const Tag = (props: { tag: TagType; size: "sm" | "md" | "lg" }) => {
  const { tag, size } = props;
  return (
    <Link key={tag.slug} href={`/tags/${tag.slug}`} passHref>
      <a
        className={`hover:brightness-110 active:brightness-90 ${
          size === "sm"
            ? "px-2.5 py-1 rounded-md text-sm"
            : size == "md"
            ? "px-3 py-1.5 rounded-lg text-base"
            : "px-3.5 py-1.5 rounded-xl text-lg"
        }`}
        style={{
          backgroundColor: tag.backgroundColor
            ? `rgba(${tag.backgroundColor.rgba.r},${tag.backgroundColor.rgba.g},${tag.backgroundColor.rgba.b},1)`
            : "rgba(0,0,0,.1)",
          color:
            `rgba(${tag.foregroundColor.rgba.r},${tag.foregroundColor.rgba.g},${tag.foregroundColor.rgba.b},1)` ||
            "inherit",
        }}
      >
        <span className="opacity-50">#</span>
        {tag.slug}
      </a>
    </Link>
  );
};

export default Tag;
