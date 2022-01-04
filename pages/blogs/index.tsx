import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { client } from "../../apolloClient";
import { BlogsQuery } from "../../constants/querys";
import Head from "next/head";
import BlogCardLarge from "../../components/cards/BlogCardLarge";
import { WideAd } from "../../components/ads";

const BLogsPage = ({ blogs }) => {
  return (
    <main className="container py-16">
      <Head>
        <title>Blogs - Rohid.dev</title>
        <meta name="description" content="All blogs form rohid.dev" />
      </Head>
      <div>
        <div className="section-title">Blogs</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, i) => (
            <BlogCardLarge blog={blog} key={blog.slug} />
          ))}
        </div>
      </div>
      <div className="mt-16"></div>
      <WideAd />
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
        blogs(orderBy: createdAt_DESC) ${BlogsQuery}
      }
    `,
  });
  return {
    props: {
      blogs,
    },
  };
};
