import React, { Fragment } from "react";
import AboutSection from "../components/AboutSection";
import BlogsSection from "../components/BlogsSection";
import ContactSection from "../components/ContactSection";
import Email from "../components/Email";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import SocialMediaLinks from "../components/SocialMediaLinks";

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
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
      </div>
    </Fragment>
  );
};

export default HomePage;
