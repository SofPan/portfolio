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
      <div className="project-pane_left">
        <img src={props.thumbnail} alt="thumbnail" />
      </div>
      <div className="project-pane_right">
        <h3>{props.title}</h3>
        <span>{parseSkills}</span>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default ProjectListItem;