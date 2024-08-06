import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/Work';
import { createContext } from 'react';
import useApi from './contexts/useAPI';

export const ProjectContext = createContext();

function App() {
  const { loading, ghProjects } = useApi();

  return (
    <div className="App">
      <ProjectContext.Provider value={{ loading, ghProjects }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ProjectContext.Provider>
    </div>
  );
}

export default App;
