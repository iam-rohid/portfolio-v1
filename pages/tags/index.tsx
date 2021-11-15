import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { client } from "../../apolloClient";
import Link from "next/link";
import Head from "next/head";
import Tag from "../../components/Tag";

const TagsPage = ({ tags }) => {
  return (
    <main className="container py-16">
      <Head>
        <title>Tags - Rohid.dev</title>
        <meta name="description" content="All tags form rohid.dev" />
      </Head>

      <ul className="flex flex-row flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <Tag tag={tag} key={tag.slug} size="lg" />
        ))}
      </ul>
    </main>
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
