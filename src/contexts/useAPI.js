import { useEffect, useState } from "react";
export const PROJECTS = [
  {
    id: 0,
    name: "MedConnect",
    description: "Connecting available doctors with patients, built using PERN stack",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/med-bg.jpg",
    url: "https://github.com/SofPan/MedConnect",
    isFeatured: true
  },
  {
    id: 1,
    name: "Jungle",
    description: "A mini e-commerce app built using Rails 6.1",
    language: ["Ruby", "Rails", "PostgreSQL"],
    thumbnail: "/assets/project-thumbs/jungle_thumb.png",
    url: "https://github.com/SofPan/jungle",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Photolabs",
    description: "Picture favorites wall built using React",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/photolabs_thumb.png",
    url: "https://github.com/SofPan/photolabs",
    isFeatured: true,
  },
  {
    id: 3,
    name: "Photolabs",
    description: "Picture favorites wall built using React",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/photolabs_thumb.png",
    url: "https://github.com/SofPan/photolabs",
    isFeatured: false,
  },
  {
    id: 4,
    name: "Photolabs",
    description: "Picture favorites wall built using React",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/photolabs_thumb.png",
    url: "https://github.com/SofPan/photolabs",
    isFeatured: false,
  },
  {
    id: 5,
    name: "Photolabs",
    description: "Picture favorites wall built using React",
    language: ["React", "PostgreSQL", "Express", "Node"],
    thumbnail: "/assets/project-thumbs/photolabs_thumb.png",
    url: "https://github.com/SofPan/photolabs",
    isFeatured: false,
  },
]

const useApi = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(PROJECTS);
    setLoading(false);
  }, []);

  return {
    projects,
    loading
  }

}

export default useApi;