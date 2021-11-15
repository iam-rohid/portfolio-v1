import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { client } from "../../apolloClient";
import { BlogsQuery } from "../../constants/querys";
import Link from "next/link";
const TagsPage = ({ tags }) => {
  return (
    <div className="container py-16">
      <ul className="flex flex-row flex-wrap justify-center gap-4">
        {tags.map((tag) => (
          <Link href={`tags/${tag.slug}`} key={tag.slug}>
            <a className="hover:brightness-110 active:brightness-90">
              <li
                className="px-4 py-1 rounded-lg text-lg font-semibold"
                style={{
                  backgroundColor: tag.backgroundColor?.css || "rgba(0,0,0,.1)",
                  color: tag.foregroundColor?.css || "inherit",
                }}
              >
                #{tag.name}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TagsPage;
export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { tags },
  } = await client.query({
    query: gql`
      query GetData {
        tags {
          name
          slug
          backgroundColor {
            css
            rgba {
              r
              g
              b
              a
            }
          }
          foregroundColor {
            css
            rgba {
              r
              g
              b
              a
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      tags,
    },
  };
};
