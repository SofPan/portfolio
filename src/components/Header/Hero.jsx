import React from "react";
import Projects from "../Projects/Projects";
import Socials from "../ContactSection/Socials";

const Hero = () => {
  return(
    <div className="hero">
      <header className="hero-header flex flex-column">
        <div>
          <h1>
            I'm <span className="color-alt">Sofia</span><br />
            A <span className="color-alt">Freelance Web Developer</span>
          </h1>
        </div>
        <div>
          <button>My Work</button>
          <button>Contact Me</button>
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