import React from "react";

const ProjectListItem = (props) => {
  let language = props.language
  if (Array.isArray(language)){
    language = props.language.map(lang => {
      if (props.language.indexOf(lang) === props.language.length - 1){
        return lang;
      }
      return lang + " / ";
    })
  }

  const determineClasses = () => {
    let classes = 'project-pane';
    if (props.isFeatured) classes+= ' featured';
    return classes;
  }
  return(
    <li className={determineClasses()} key={props.id}>
      <div className="project-pane_thumb">
      </div>
      {/* {!loading &&  */}
          <div className="project-pane_details">
            <h4 className="project-title">{props.title}</h4>
            <span className="project-skills">{language}</span>
            <a href={props.url} target="_blank" rel="noreferrer" className="project-link">
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