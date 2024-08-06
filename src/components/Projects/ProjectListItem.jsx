import React, { useContext } from "react";
import { ProjectContext } from "../../App";

const ProjectListItem = (props) => {
  const {loading} = useContext(ProjectContext);
  return(
    <li className="project-pane" key={props.id}>
      {/* <div className="project-pane_thumb">
        <img className="project-thumb" src={props.thumbnail} alt="thumbnail" />
      </div> */}
      {!loading && 
          <div className="project-pane_details">
            <h4 className="project-title">{props.title}</h4>
            <span className="project-skills">{props.language}</span>
            <a href={props.url} target="_blank" rel="noreferrer">
              <p className="project-description">{props.description}</p>
            </a>
          </div>
      }
    </li>
  );
}

export default ProjectListItem;