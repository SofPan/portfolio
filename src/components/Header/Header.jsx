import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Projects from "../Projects/Projects";

const Header = () => {
  return(
    <header className="header">
      {/* <Nav /> */}
      <Hero />
      {/* <Projects /> */}
    </header>
  );
}

export default Header;