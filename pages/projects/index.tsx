import React from "react";
import Head from "next/head";
import ProjectCard from "../../components/cards/ProjectCard";
import { ProjectType } from "../../types/project-type";
import { GetStaticProps } from "next";
import { client } from "../../apolloClient";
import { gql } from "@apollo/client";

const ProjectsPage = ({ projects }) => {
  return (
    <main className="container py-16">
      <Head>
        <title>Projects - Rohid.dev</title>
        <meta name="description" content="All Projects form rohid.dev" />
      </Head>
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <h3 className="section-title">Projects</h3>

          <div className="flex flex-col gap-16">
            {projects.map((project: ProjectType, i) => (
              <ProjectCard project={project} key={i} />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="border-2 h-96 border-gray-200 dark:border-gray-700 sticky top-24 rounded-xl border-dashed"></div>
        </div>
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
