/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../apolloClient";
import { gql } from "@apollo/client";
import Markdown from "../../components/Markdown";
import Head from "next/head";
import Tag from "../../components/Tag";
import SideBarTagList from "../../components/widgets/SidebarTagList";
import SideBarBlogList from "../../components/widgets/SidebarBlogList";

const BlogPage = ({ blog, tags }) => {
  return (
    <main className="">
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt || blog.title || ""} />
        <meta
          name="keywords"
          content={[
            ...blog.tags.map((tag) => tag.name),
            "Rohid",
            "Rohidul Islam",
            "Rohid Dev",
          ].join(", ")}
        ></meta>
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blog.title}",
            "datePublished": "${blog.createdAt}",
            "dateModified": "${blog.updatedAt}"
          `}
        </script>
      </Head>
      <div
        className="w-full h-64 md:h-80 lg:h-96 relative"
        style={{ zIndex: -10 }}
      >
        <img
          src={blog.coverPhoto.url}
          alt={`${blog.title} - Cover Photo`}
          className="w-full overflow-hidden object-cover h-full saturate-150"
        />
        <div className="absolute inset-0 bg-white dark:bg-gray-900 backdrop-blur-xl bg-opacity-30 dark:bg-opacity-30"></div>
      </div>
      <div className="grid grid-cols-3 gap-16 container py-16 z-10">
        <article className="col-span-3 md:col-span-2">
          <div className="flex flex-col gap-8">
            <img
              src={blog.coverPhoto.url}
              alt={`${blog.title} - Cover Photo`}
              className="w-full overflow-hidden object-cover -mt-48 lg:-mt-80 rounded-2xl"
              style={{ aspectRatio: "16/9" }}
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold">{blog.title}</h1>
              <p className="">
                <span>Published on </span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <ul className="flex flex-row flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <li key={tag.slug}>
                    <Tag tag={tag} size="sm" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Markdown>{blog.body}</Markdown>
        </article>
        <aside className="col-span-3 md:col-span-1 flex flex-col gap-16">
          {blog.tags && blog.tags.lenght > 0 && (
            <SideBarTagList tags={blog.tags} title="Tags" />
          )}
          <SideBarBlogList blogs={[blog, blog]} title="Relative blogs" />
        </aside>
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
  const {
    data: { blogs, tags },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(where: { slug: "${params.slug}" }) {
          title
          body
          createdAt
          updatedAt
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
      blog: blogs[0],
      tags,
    },
  };
};
