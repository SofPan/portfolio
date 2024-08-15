import React from "react";
import ProjectListItem from "./ProjectListItem";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useApi from "../../contexts/useAPI";

const ProjectList = props => {

  const {projects} = useApi();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const mapListItems = projects.map(project => {
    return <ProjectListItem 
      key={project.id} 
      id={project.id}
      title={project.name}
      description={project.description}
      language={project.language}
      thumbnail={project.thumbnail}
      url={project.url}
      isFeatured={project.isFeatured}
    />
  })
  return(
    <ul className="project-list">
      {
      !props.featured ? 
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