import React from "react";
import Projects from "../Projects/Projects";
import Socials from "../ContactSection/Socials";

const Hero = () => {
  return(
    <div className="hero bg-alt">
      <header className="hero-header flex flex-column">
        <div>
          <h1>
            I'm <span className="color-dark">Sofia</span><br />
            <span class="small">
              A <span className="color-dark">Freelance Web Developer</span>
            </span>
          </h1>
        </div>
        <div>
          <button className="btn btn-primary">My Work</button>
          <button className="btn btn-primary">Contact Me</button>
        </div>
      </header>
      <footer className="hero-footer">
        <Socials />
        <Projects />
      </footer>
    </div>
  );
}

export default Hero;