import React, { Fragment } from "react";
import AboutSection from "../components/sections/AboutSection";
import BlogsSection from "../components/sections/BlogsSection";
import ContactSection from "../components/sections/ContactSection";
import Email from "../components/Email";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SocialMediaLinks from "../components/SocialMediaLinks";
import blogs from "../data/blogs.json";
import projects from "../data/projects.json";
import { BlogType } from "../types/blog-type";
import { ProjectType } from "../types/project-type";

const HomePage = () => {
  return (
    <Fragment>
      <div className="sm:block hidden">
        <SocialMediaLinks />
        <Email />
      </div>
      <div className="sm:px-20 flex flex-col gap-20 md:gap-32 py-14 md:py-32">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={(projects as ProjectType[]).slice(0, 3)} />
        <BlogsSection blogs={(blogs as BlogType[]).slice(0, 4)} />
        <ContactSection />
      </div>
    </Fragment>
  );
};

export default HomePage;
