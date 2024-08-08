import React, { useContext } from "react";
import { ProjectContext } from "../../App";

const ProjectListItem = (props) => {
  // const {loading} = useContext(ProjectContext);
  let language = props.language
  if (Array.isArray(language)){
    language = props.language.map(lang => {
      if (props.language.indexOf(lang) === props.language.length - 1){
        return lang;
      }
      return lang + " / ";
    })
  }
  return(
    <li className="project-pane" key={props.id}>
      <div className="project-pane_thumb">
      </div>
      {/* {!loading &&  */}
          <div className="project-pane_details">
            <h4 className="project-title">{props.title}</h4>
            <span className="project-skills">{language}</span>
            <a href={props.url} target="_blank" rel="noreferrer">
            {props.thumbnail ? 
            <img className="project-thumb" src={props.thumbnail} alt="thumbnail" />
            :
            <p className="project-description">{props.description}</p>
          }
            </a>
          </div>
      {/* } */}
    </li>
  );
}

export default ProjectListItem;