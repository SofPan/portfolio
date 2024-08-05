import React from "react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = props => {
  const mapListItems = props.listItems.map(project => {
    return <ProjectListItem 
      key={project.id} 
      id={project.id}
      title={project.title}
      description={project.description}
      skills={project.skills}
      thumbnail={project.thumbnail}
    />
  })
  return(
    <ul className="project-list">
      {mapListItems}
    </ul>
  );
}

export default ProjectList;