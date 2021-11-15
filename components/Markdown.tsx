import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkHighlightjs from "remark-highlight.js";
import "remark-highlight.js";

const Markdown = (props: { children: string }) => {
  const md = props.children || "";
  return (
    <ReactMarkdown
      className="prose md:prose-lg max-w-none min-w-0 py-8"
      remarkPlugins={[remarkMath, remarkGfm, remarkHighlightjs]}
      rehypePlugins={[rehypeKatex]}
    >
      {md}
    </ReactMarkdown>
  );
};

export default Markdown;
