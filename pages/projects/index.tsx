import React, { Fragment } from "react";
import Head from "next/head";
import ProjectCard from "../../components/cards/ProjectCard";
import { ProjectType } from "../../types/project-type";
import { GetStaticProps } from "next";
import { client } from "../../apolloClient";
import { gql } from "@apollo/client";
import { BlogListAd, PostAd, VarticalAd, WideAd } from "../../components/ads";

const ProjectsPage = ({ projects }) => {
  return (
    <main className="container py-16">
      <Head>
        <title>Projects - Rohid.dev</title>
        <meta name="description" content="All Projects form rohid.dev" />
      </Head>
      <h3 className="section-title">Projects</h3>
      <div className="flex flex-col gap-8">
        {projects.map((project: ProjectType, i) => (
          <ProjectCard project={project} key={i} index={i} />
        ))}
      </div>
    </main>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { projects },
  } = await client.query({
    query: gql`
      query GetData {
        projects(orderBy: completedAt_DESC) {
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
      }
    `,
  });
  return {
    props: {
      projects,
    },
  };
};
