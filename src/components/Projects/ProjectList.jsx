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
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const mapListItems = props.listItems.map(project => {
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
      <Slider {...settings}>
        {mapListItems}
      </Slider>
    </ul>
  );
}

export default ProjectList;