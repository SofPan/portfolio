import React from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = props => {
  const mapListItems = props.listItems.map(project => {
    console.log(project);
    return <ProjectListItem 
      key={project.id} 
      id={project.id}
      title={project.name}
      description={project.description}
      language={project.language}
      thumbnail={project.url}
      url={project.html_url}
    />
  })
  return(
    <ul className="project-list">
      {mapListItems}
    </ul>
  );
}

export default ProjectList;