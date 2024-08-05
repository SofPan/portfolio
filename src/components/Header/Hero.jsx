import React from "react";
import { NavLink } from "react-router-dom";
import Projects from "../Projects/Projects";
import Socials from "../ContactSection/Socials";

const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "Title 1",
    description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
    skills: ["react", "ruby", "javascript"],
    thumbnail: "https://picsum.photos/200"
  },
  {
    id: 2,
    title: "Title 2",
    description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
    skills: ["react", "ruby", "javascript"],
    thumbnail: "https://picsum.photos/300"
  },
  {
    id: 3,
    title: "Title 3",
    description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
    skills: ["react", "ruby", "javascript"],
    thumbnail: "https://picsum.photos/400"
  }
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
      <footer className="hero-footer">
        <Socials />
        <Projects listItems={DUMMY_PROJECTS} />
      </footer>
    </div>
  );
}

export default Hero;