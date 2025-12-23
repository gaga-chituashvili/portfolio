import React from "react";
import "../reset.css";
import Skills from "../component/Skills";
import Education from "../component/Education";
import Project from "../component/Project";
import Experience from "../component/Experience";
import Cover from "../component/Cover";
import Contact from "../component/Contact";
import Social from "../component/Social";
import Header from "../component/Header";

const Home = () => {
  return (
    <section className="home_page flex flex-col p-2 md:p-12 gap-y-36">
      <Header />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Contact />
      <Cover />
      <Social />
    </section>
  );
};

export default Home;
