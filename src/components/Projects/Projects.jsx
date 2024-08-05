import React from "react";
import ProjectList from "./ProjectList";

const Projects = () => {
  return(
    <section className="projects flex flex-column" id="projects">
      {/* <h3>Featured</h3> */}
        <ProjectList />
    </section>
  );
}

export default Projects;