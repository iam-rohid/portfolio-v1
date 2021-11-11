import React from "react";
import BlogsSection from "../components/BlogsSection";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import ProjectsSection from "../components/ProjectsSection";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <ProjectsSection />
      <BlogsSection />
    </div>
  );
};

export default HomePage;
