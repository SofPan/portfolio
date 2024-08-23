import React from "react";
import { NavLink } from "react-router-dom";
import Projects from "../Projects/Projects";
import Socials from "../ContactSection/Socials";

const Hero = () => {

  return(
    <div className="hero bg-alt">
      <header className="hero-header">
        <aside>
          <div>
            <h1>
              I'm <span className="color-dark">Sofia</span><br />
              <span className="small">
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
        <Projects featured={true}/>
      </footer>
    </div>
  );
}

export default Hero;