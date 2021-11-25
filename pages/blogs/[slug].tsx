/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "../../apolloClient";
import { gql } from "@apollo/client";
import Markdown from "../../components/Markdown";
import Head from "next/head";
import SideBarTagList from "../../components/widgets/SidebarTagList";
import SideBarBlogList from "../../components/widgets/SidebarBlogList";
import { VarticalAd, WideAd } from "../../components/ads";
import { useRouter } from "next/router";

const BlogPage = ({ blog, popularBlogs }) => {
  const router = useRouter();
  return (
    <main>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.excerpt} />
        <meta
          name="keywords"
          content={[
            ...blog.tags.map((tag) => tag.name),
            "Rohid",
            "Rohidul Islam",
            "Rohid Dev",
          ].join(", ")}
        ></meta>

        <link
          rel="canonical"
          href={`https://rohidulislam.com/${router.asPath}`}
        />
        <meta property="og:title" content={blog.title} />
        <meta property="og:desription" content={blog.excerpt} />
        <meta property="og:site_name" content="Rohid.dev" />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://rohidulislam.com/${router.asPath}`}
        />
        <meta
          name="image"
          itemProp="image"
          property="og:image"
          content={blog.coverPhoto.url}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={blog.title} />
        <meta property="twitter:description" content={blog.excerpt} />
        <meta property="twitter:image" content={blog.coverPhoto.url} />
        <meta property="twitter:creator" content="@rohid_dev" />
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
      <div className="container flex flex-col gap-16">
        <div className="grid grid-cols-3 gap-8 py-16 z-10">
          <article className="col-span-3 lg:col-span-2">
            <img
              src={blog.coverPhoto.url}
              alt={`${blog.title} - Cover Photo`}
              className="w-full overflow-hidden object-cover rounded-xl"
              style={{ aspectRatio: "16/9" }}
            />
            <h1 className="text-4xl font-black leading-normal py-2">
              {blog.title}
            </h1>
            <p className="py-2">
              <span>Published on </span>
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <div className="py-8">
              <WideAd />
            </div>
            <Markdown>{blog.body}</Markdown>
          </article>
          <aside className="col-span-3 lg:col-span-1 flex flex-col gap-16">
            {blog.tags && (
              <Fragment>
                <SideBarTagList tags={blog.tags} title="Tags" />
                <VarticalAd />
              </Fragment>
            )}
            <SideBarBlogList blogs={popularBlogs} title="Related Articles" />
            <VarticalAd />
          </aside>
        </div>
        <WideAd />
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
    data: { blogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(where: { slug: "${params.slug}" }) {
          title
          body
          createdAt
          updatedAt
          slug
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

  const {
    data: { blogs: popularBlogs },
  } = await client.query({
    query: gql`
      query GetData {
        blogs(orderBy: updatedAt_DESC, where: { isPopular: true }, first: 4) {
          slug
          title
          excerpt
          createdAt
          updatedAt
          coverPhoto {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      blog: blogs[0],
      popularBlogs,
    },
  };
};
