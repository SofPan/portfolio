import { NavLink } from "react-router-dom";
import Socials from "../components/ContactSection/Socials";
import Form from "../components/ContactSection/Form";

const ContactPage = () => {
  return(
    <>
      <div className="page_Work bg-alt full-height">
        <header>
          <NavLink to="/" className="btn btn-primary">Home</NavLink>
        </header>
        <main>
          <section>
            <h2>Contact Me</h2>
            <Form />
          </section>
        </main>
      </div>
      <footer className="bg-main scalloped ">
        <div className="footer-inner flex justify-between">
          <Socials />
          <NavLink to="/work" className="btn btn-primary">My Work</NavLink>
        </div>
      </footer>
    </>
  )
}

export default ContactPage;