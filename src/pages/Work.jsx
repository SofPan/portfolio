import { NavLink } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Socials from "../components/ContactSection/Socials";
import useApi from "../contexts/useAPI";

const Work = () => {
  const {projects} = useApi();
  
  return(
    <>
      <div className="page_Work bg-alt full-height">
        <header>
          <NavLink to="/" className="btn btn-primary">Home</NavLink>
        </header>
        <main>
          <section>
            <h2>My Work</h2>
            <Projects listItems={projects} />
          </section>
          {/* <section>
            <h2>Testimonials</h2>
            <Projects listItems={projects} />
          </section> */}
        </main>
      </div>
      <footer className="bg-main scalloped ">
        <div className="footer-inner flex justify-between">
          <Socials />
          <NavLink to="/contact" className="btn btn-primary">Contact Me</NavLink>
        </div>
      </footer>
    </>
  )
}

export default Work;