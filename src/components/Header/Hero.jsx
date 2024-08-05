import React from "react";
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
              <span class="small">
                A <span className="color-dark">Freelance Web Developer</span>
              </span>
            </h1>
          </div>
          <div>
            <button className="btn btn-primary">My Work</button>
            <button className="btn btn-primary">Contact Me</button>
          </div>
        </aside>
        <article className="hero-text-block">
          <p>
            With over <span className="color-dark">5 years </span> of experience across the fullstack, I can bring <span className="color-dark">innovation</span>, and <span className="color-dark">polish</span> to your project. Reach out today so we can arrange a meeting!
          </p>
        </article>
      </header>
      <footer className="hero-footer">
        <Socials />
        <Projects />
      </footer>
    </div>
  );
}

export default Hero;