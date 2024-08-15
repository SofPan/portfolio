import { NavLink } from "react-router-dom";
import Socials from "../components/ContactSection/Socials";

const Contact = () => {
  return(
    <>
      <div className="page_Work bg-alt full-height">
        <header>
          <NavLink to="/" className="btn btn-primary">Home</NavLink>
        </header>
        <main>
          <section>
            <h2>Contact Me</h2>
          </section>
        </main>
      </div>
      <footer className="bg-main scalloped ">
        <div className="footer-inner flex justify-between">
          <Socials />
          <NavLink to="/contact" className="btn btn-primary">My Work</NavLink>
        </div>
      </footer>
    </>
  )
}

export default Contact;