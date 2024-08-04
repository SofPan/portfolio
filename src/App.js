import './styles.css';

import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/ContactSection/Contact';
// import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
        <Contact />
        {/* <About /> */}
      </main>
    </div>
  );
}

export default App;
