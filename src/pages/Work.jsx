import { NavLink } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Socials from "../components/ContactSection/Socials";

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

const Work = () => {
  return(
    <div className="bg-alt">
      <header>
        <NavLink to="/" className="btn btn-primary">Home</NavLink>
      </header>
      <main>
        <section>
          <h2>Github</h2>
          <Projects listItems={DUMMY_PROJECTS} />
        </section>
        <section>
          <h2>Websites</h2>
          <Projects listItems={DUMMY_PROJECTS} />
        </section>
        <section>
          <h2>Testimonials</h2>
          <Projects listItems={DUMMY_PROJECTS} />
        </section>
      </main>
      <footer className="bg-main scalloped ">
        <div className="footer-inner flex justify-between">
          <Socials />
          <NavLink to="/contact" className="btn btn-primary">Contact Me</NavLink>
        </div>
      </footer>
    </div>
  )
}

export default Work;