import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experiencie/Experience';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import RevealOnScroll from './Components/Animations/RevealOnScroll/RevealOnScroll';

function App() {
  return (
    <div>
      <Navbar />
      <RevealOnScroll>
        <Home />
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <About />
      </RevealOnScroll>
      <RevealOnScroll>
        <Skills />
      </RevealOnScroll>
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>
      <RevealOnScroll>
        <Experience />
      </RevealOnScroll>
      <RevealOnScroll>
        <Education />
      </RevealOnScroll>
      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
      <Footer />
    </div>
  );
}

export default App;
