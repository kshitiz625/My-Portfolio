import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Extracurricular from './components/Extracurricular';
import Socials from './components/Socials';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Extracurricular />
      {/* <Socials /> */}
      
    </div>
  );
}

export default App;
