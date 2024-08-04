import React from "react";

const ProjectListItem = (props) => {
  const parseSkills = props.skills.map(skill => {
    if (props.skills.indexOf(skill) === props.skills.length - 1){
      return skill;
    }
    return skill + " / ";
  })
  return(
    <li className="project-pane" key={props.id}>
      <div className="project-pane_thumb">
        <img className="project-thumb" src={props.thumbnail} alt="thumbnail" />
      </div>
      <div className="project-pane_details">
        <h3 className="project-title">{props.title}</h3>
        <span className="project-skills">{parseSkills}</span>
        <p className="project-description">{props.description}</p>
      </div>
    </li>
  );
}

export default ProjectListItem;