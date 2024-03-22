import React from "react";
import ProjectListItem from "./ProjectListItem";


const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "Title 1",
    description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
    skills: ["react", "ruby", "javascript"],
    thumbnail: "http://placebacon.net/200/300"
  },
  {
    id: 2,
    title: "Title 2",
    description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
    skills: ["react", "ruby", "javascript"],
    thumbnail: "http://placebacon.net/200/300"
  },
  {
    id: 3,
    title: "Title 3",
    description: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.",
    skills: ["react", "ruby", "javascript"],
    thumbnail: "http://placebacon.net/200/300"
  }
]

const ProjectList = () => {
  return(
    <ul>
      {DUMMY_PROJECTS.map(project => {
        return <ProjectListItem 
          key={project.id} 
          id={project.id}
          title={project.title}
          description={project.description}
          skills={project.skills}
          thumbnail={project.thumbnail}
        />
      })}
    </ul>
  );
}

export default ProjectList;