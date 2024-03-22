import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/ProjectsSection/Projects';
import Contact from './components/ContactSection/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
      <About />
    </div>
  );
}

export default App;
