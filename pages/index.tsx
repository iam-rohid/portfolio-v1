import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { client } from "../apolloClient";
import { BlogsQuery } from "../constants/querys";
import RecentlyPublished from "../components/sections/RecentlyPublished";
import PopularTags from "../components/widgets/PopularTags";
import PopularBlogs from "../components/widgets/PopularBlogs";
import BlogCardSmall from "../components/cards/BlogCardSmall";

const HomePage = ({ blogs, tags }) => {
  return (
    <main className="flex flex-col gap-20 md:gap-16 py-8 md:py-16">
      <Head>
        <title>Rohid</title>
        <meta
          name="description"
          content="Hi, I'm rohid. I'm a sowftware developer specializeing in building responsibe front-end website/web applications. I also love to do UI design with Figma. I also do unity 3d mobile game development."
        />
        <meta
          name="keywords"
          content="Rohid, Rohidul Islam, Rohidul, rohid.dev, Dev, Developer, Portfolio, Developer Portfolio, React Developer, Blog"
        />
      </Head>
      <div className="container grid grid-cols-3 gap-4">
        <BlogCardSmall blog={blogs[0]} />
        <BlogCardSmall blog={blogs[0]} />
        <BlogCardSmall blog={blogs[0]} />
      </div>
      <div className="grid grid-cols-3 container gap-16">
        <div className="col-span-3 md:col-span-2">
          <RecentlyPublished blogs={blogs} />
        </div>
        <div className="col-span-3 md:col-span-1 gap-16 flex flex-col">
          <PopularTags tags={tags} />
          <PopularBlogs blogs={blogs} />
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { blogs, projects, tags },
  } = await client.query({
    query: gql`
      query GetData {
        blogs ${BlogsQuery}
        projects(orderBy: completedAt_DESC, where: {isFeatured: true}) {
          slug
          title
          excerpt
          isFeatured
          completedAt
          liveLink
          sourceLink
          coverPhoto {
            url
          }
        }
        tags {
          slug
          name
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
      blogs,
      projects,
      tags,
    },
  };
};

export default HomePage;
