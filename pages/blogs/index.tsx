import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { client } from "../../apolloClient";
import BlogCard from "../../components/cards/BlogCard";
import { BlogsQuery } from "../../constants/querys";
import { BlogType } from "../../types/blog-type";
import Head from "next/head";

const BLogsPage = ({ blogs }) => {
  return (
    <main className="container py-16">
      <Head>
        <title>Blogs - Rohid.dev</title>
        <meta name="description" content="All blogs form rohid.dev" />
      </Head>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {blogs.map((blog: BlogType, i) => (
          <BlogCard key={i} blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default BLogsPage;
export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { blogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs ${BlogsQuery}
      }
    `,
  });
  return {
    props: {
      blogs,
    },
  };
};
