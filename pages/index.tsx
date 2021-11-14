import React from "react";
import BlogsSection from "../components/sections/BlogsSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import blogs from "../data/blogs.json";
import projects from "../data/projects.json";
import { BlogType } from "../types/blog-type";
import { ProjectType } from "../types/project-type";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-20 md:gap-32 py-14 md:py-32">
      <HeroSection />
      <ProjectsSection projects={(projects as ProjectType[]).slice(0, 3)} />
      <BlogsSection blogs={(blogs as BlogType[]).slice(0, 4)} />
    </div>
  );
};

export default HomePage;
