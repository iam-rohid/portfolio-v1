/* eslint-disable @next/next/no-img-element */
import gql from "graphql-tag";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { client } from "../../apolloClient";
import Head from "next/head";
import Link from "next/link";
import Markdown from "../../components/Markdown";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const ProjectPage = ({ project }) => {
  const router = useRouter();
  return (
    <main className="container flex flex-col gap-8 py-8">
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.excerpt || project.title} />
        <link
          rel="canonical"
          href={`https://rohidulislam.com/${router.asPath}`}
        />
        <meta property="og:title" content={project.title} />
        <meta
          property="og:desription"
          content={project.excerpt || project.title}
        />
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
          content={project.coverPhoto.url}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={project.title} />
        <meta property="twitter:description" content={project.excerpt} />
        <meta property="twitter:image" content={project.coverPhoto.url} />
        <meta property="twitter:creator" content="@rohid_dev" />
      </Head>
      <header className="flex flex-col gap-4">
        <div
          className="w-full relative rounded-3xl overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={project.coverPhoto.url}
            alt={`${project.title} - Cover Photo`}
            className="absolute inset-0 object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {project.completedAt ? (
          <p>
            Completed on{" "}
            <strong>{new Date(project.completedAt).toDateString()}</strong>
          </p>
        ) : (
          <p>Currently in development</p>
        )}
        <div className="flex flex-row flex-wrap gap-2">
          {project.liveLink && (
            <Link href={project.liveLink}>
              <a
                target="_blank"
                className="flex flex-row whitespace-nowrap gap-2 px-4 py-2 rounded-lg bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10"
              >
                <p>Live View</p>
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            </Link>
          )}
          {project.sourceLink && (
            <Link href={project.sourceLink}>
              <a
                target="_blank"
                className="flex flex-row whitespace-nowrap gap-2 px-4 py-2 rounded-lg bg-black dark:bg-white bg-opacity-0 dark:bg-opacity-0 hover:bg-opacity-10 dark:hover:bg-opacity-10"
              >
                <p>Source Code</p>
                <CodeIcon className="w-6 h-6" />
              </a>
            </Link>
          )}
        </div>
      </header>
      <div className="w-full flex-1 min-w-0 flex flex-row gap-8 max-w-4xl mx-auto">
        <article className="flex-1 min-w-0">
          <Markdown>{project.body}</Markdown>
        </article>
      </div>
    </main>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { projects },
  } = await client.query({
    query: gql`
      query GetData {
        projects {
          slug
        }
      }
    `,
  });

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug,
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
        projects(where: { slug: "${params.slug}" }) {
          title
          excerpt
          isFeatured
          completedAt
          liveLink
          sourceLink
          coverPhoto {
            url
          }
          body
        }
      }
    `,
  });
  return {
    props: {
      project: data.projects[0],
    },
  };
};
