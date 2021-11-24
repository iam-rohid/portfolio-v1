import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React, { Fragment } from "react";
import { client } from "../../apolloClient";
import { BlogsQuery } from "../../constants/querys";
import Head from "next/head";
import BlogCardLarge from "../../components/cards/BlogCardLarge";
import { BlogListAd } from "../../components/ads";

const TutorialsPage = ({ blogs }) => {
  return (
    <main className="container py-16">
      <Head>
        <title>Tutorials - Rohid.dev</title>
        <meta name="description" content="All Tutorials form rohid.dev" />
      </Head>
      <div>
        <div className="section-title">Tutorials</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {blogs.map((blog, i) => (
            <Fragment key={blog.slug}>
              <BlogCardLarge blog={blog} key={blog.slug} />
              {i % 2 === 1 && <BlogListAd />}
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TutorialsPage;
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
