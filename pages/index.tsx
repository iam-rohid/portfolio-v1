import { gql } from "@apollo/client";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import Head from "next/head";
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
    <main className="flex flex-col gap-20 md:gap-32 py-14 md:py-32">
      <Head>
        <title>Rohid.dev</title>
        <meta
          name="description"
          content="Hi, I'm rohid. I'm a sowftware developer specializeing in building responsibe front-end website/web applications. I also love to do UI design with Figma. I also do unity 3d mobile game development."
        />
        <meta
          name="keywords"
          content="Rohid, Rohid.dev, Dev, Developer, Portfolio, Developer Portfolio, Portfolio Site, React Developer, Modern, Blog"
        />
      </Head>

      <HeroSection />

      <ProjectsSection projects={(projects as ProjectType[]).slice(0, 3)} />

      <BlogsSection blogs={(blogs as BlogType[]).slice(0, 4)} />

      <section className="container">
        <div className="bg-white dark:bg-gray-800 rounded-3xl w-full flex flex-col md:flex-row items-center p-4 py-10 gap-8 md:gap-4">
          <div className="flex-1 items-center justify-center flex">
            <h3 className="text-3xl font-bold">Start a Project</h3>
          </div>
          <div className="flex-1 items-center justify-center flex">
            <p className="text-center text-lg">
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </p>
          </div>
          <div className="flex-1 w-full items-center justify-center flex">
            <Link href="/contact" passHref>
              <a className="relative px-20 justify-center py-4 rounded-2xl text-xl font-semibold text-white flex flex-row items-center gap-4 bg-gradient-to-tr from-blue-600 to-purple-500 group">
                <p className="whitespace-nowrap">Let&apos;s do this</p>
                <ChevronRightIcon className="w-8 h-8 absolute right-12 group-hover:right-8 opacity-0 group-hover:opacity-100 transition-all duration-200" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
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
