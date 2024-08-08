import React from "react";
import ProjectListItem from "./ProjectListItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectList = props => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const mapListItems = props.listItems.map(project => {
    return <ProjectListItem 
      key={project.id} 
      id={project.id}
      title={project.name}
      description={project.description}
      language={project.language}
      thumbnail={project.thumbnail}
      url={project.url}
    />
  })
  return(
    <ul className="project-list">
      {props.listItems.length > 3 ?
        <Slider {...settings}>
          {mapListItems}
        </Slider>
        :
        <div>
          {mapListItems}
        </div>
      }
    </ul>
  );
}

export default ProjectList;