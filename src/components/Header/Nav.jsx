import React from "react";

const Nav = () => {
  return(
    <nav>
      <img src="./logo.png" alt="logo"/>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;