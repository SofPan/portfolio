import { useEffect, useState } from "react";

const useApi = () => {

  const [ghProjects, setGhProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      return await fetch(`https://api.github.com/users/SofPan/repos?per_page=100`)
        .then((response) => response.json())
        .then((data) => {
          setGhProjects(data);
          setLoading(false);
        });
    }

    if (!ghProjects.length) {
      fetchData();
    }
  }, [ghProjects.length]);

  return {
    ghProjects,
    loading
  }

}

export default useApi;