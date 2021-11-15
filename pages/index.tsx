import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { client } from "../apolloClient";
import BlogsSection from "../components/sections/BlogsSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import { BlogsQuery } from "../constants/querys";
import projects from "../data/projects.json";
import { BlogType } from "../types/blog-type";
import { ProjectType } from "../types/project-type";

const HomePage = ({ blogs }) => {
  return (
    <div className="flex flex-col gap-20 md:gap-32 py-14 md:py-32">
      <HeroSection />
      <ProjectsSection projects={(projects as ProjectType[]).slice(0, 3)} />
      <BlogsSection blogs={(blogs as BlogType[]).slice(0, 4)} />
    </div>
  );
};

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

export default HomePage;
