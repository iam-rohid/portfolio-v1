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
import { BlogType } from "../types/blog-type";
import { ProjectType } from "../types/project-type";

const HomePage = ({ blogs, projects }) => {
  return (
    <main className="flex flex-col gap-20 md:gap-32 py-14 md:py-32">
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
      <HeroSection />
      <ProjectsSection projects={projects as ProjectType[]} />
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

      {/* <section className="px-4 w-full max-w-2xl mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="relative flex items-center flex-col gap-6"
        >
          <input
            type="email"
            className="w-full px-10 py-4 md:py-6 rounded-2xl md:rounded-3xl text-xl outline-none bg-white dark:bg-gray-800 flex flex-row md:pr-52 focus:shadow-xl transition-shadow duration-300"
            placeholder="Email"
          />
          <button
            type="submit"
            className="hover:-translate-y-2 active:-translate-y-0 transition-all duration-150 px-10 justify-center py-3 rounded-2xl text-xl font-semibold text-white flex flex-row items-center gap-4 bg-gradient-to-tr from-blue-600 to-purple-500 group hover:shadow-lg active:shadow-none md:absolute top-3 right-3 w-full md:w-auto"
          >
            <p className="whitespace-nowrap">Subscribe</p>
          </button>
        </form>
      </section> */}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { blogs, projects },
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
      }
    `,
  });
  return {
    props: {
      blogs,
      projects,
    },
  };
};

export default HomePage;
