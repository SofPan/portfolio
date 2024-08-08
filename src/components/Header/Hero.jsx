import React from "react";
import { NavLink } from "react-router-dom";
import Projects from "../Projects/Projects";
import Socials from "../ContactSection/Socials";

const FEATURED = [
  {
    id: 0,
    name: "MedConnect",
    description: "Connecting available doctors with patients, built using PERN stack",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/med-bg.jpg",
    url: "https://github.com/SofPan/MedConnect"
  },
  {
    id: 1,
    name: "Jungle",
    description: "A mini e-commerce app built using Rails 6.1",
    language: ["Ruby", "Rails", "PostgreSQL"],
    thumbnail: "/assets/project-thumbs/jungle_thumb.png",
    url: "https://github.com/SofPan/jungle"
  },
  {
    id: 2,
    name: "Photolabs",
    description: "Picture favorites wall built using React",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/photolabs_thumb.png",
    url: "https://github.com/SofPan/photolabs"
  },
]

const Hero = () => {

  return(
    <div className="hero bg-alt">
      <header className="hero-header">
        <aside>
          <div>
            <h1>
              I'm <span className="color-dark">Sofia</span><br />
              <span class="small">
                A <span className="color-dark">Freelance Web Developer</span>
              </span>
            </h1>
          </div>
          <div>
            <NavLink to="/work" className="btn btn-primary">My Work</NavLink>
            <NavLink to="/contact" className="btn btn-primary">Contact Me</NavLink>
          </div>
        </aside>
        <article className="hero-text-block">
          <p>
            With over <span className="color-dark">5 years </span> of experience across the fullstack, I can bring <span className="color-dark">innovation</span>, and <span className="color-dark">polish</span> to your project. Reach out today so we can arrange a meeting!
          </p>
        </article>
      </header>
      <footer className="hero-footer scalloped">
        <Socials />
        <Projects listItems={FEATURED} />
      </footer>
    </div>
  );
}

export default Hero;