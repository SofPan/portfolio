import React from "react";
import ProjectList from "./ProjectList";

const Projects = props => {
  return(
    <section className="projects flex flex-column" id="projects">
      <ProjectList featured={props.featured}/>
    </section>
  );
}

export default Projects;