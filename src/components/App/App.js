import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ArtProjects from '../ArtProjects/ArtProjects';
import Resume from '../Resume/Resume';
import ArtGallery from '../ArtGallery/ArtGallery';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';

function App() {
  return (
    <div className="App">
      {' '}
      <Header />
      <Skills />
      {/*   <Projects />
      <ArtProjects />
      <Resume />*/}
      <ArtGallery />
      <Footer />
    </div>
  );
}

export default App;
