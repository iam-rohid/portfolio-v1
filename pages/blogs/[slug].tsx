/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../apolloClient";
import { gql } from "@apollo/client";
import Markdown from "../../components/Markdown";
import Head from "next/head";
import Tag from "../../components/Tag";

const BlogPage = ({ blog }) => {
  return (
    <main className="container flex flex-col gap-8 py-8">
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt || blog.title || ""} />
        <meta
          name="keywords"
          content={blog.tags.map((tag) => tag.name).join(", ")}
        ></meta>
      </Head>
      <header className="flex flex-col gap-4">
        <div
          className="w-full relative rounded-3xl overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={blog.coverPhoto.url}
            alt={`${blog.title} - Cover Photo`}
            className="absolute inset-0 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold">{blog.title}</h1>
        <p>
          Published on{" "}
          <strong>{new Date(blog.createdAt).toDateString()}</strong>
        </p>
        <ul className="flex flex-row flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <li>
              <Tag tag={tag} key={tag.slug} size="sm" />
            </li>
          ))}
        </ul>
      </header>
      <div className="w-full flex-1 min-w-0 flex flex-row gap-8 max-w-3xl mx-auto">
        <article className="flex-1 min-w-0">
          <Markdown>{blog.body}</Markdown>
        </article>
        {/* <aside className="relative top-0 w-80 hidden lg:block">
          <div className="w-full sticky top-24 flex flex-col gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full h-64"></div>
            <div className="bg-white dark:bg-gray-800 rounded-xl w-full h-96"></div>
          </div>
        </aside> */}
      </div>
    </main>
  );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { blogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs {
          slug
        }
      }
    `,
  });

  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query GetData {
        blogs(where: { slug: "${params.slug}" }) {
          title
          body
          createdAt
          coverPhoto {
            url
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
      }
    `,
  });
  return {
    props: {
      blog: data.blogs[0],
    },
  };
};
