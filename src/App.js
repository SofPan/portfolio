import { Routes, Route } from 'react-router-dom';
import './styles.css';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/Work';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
