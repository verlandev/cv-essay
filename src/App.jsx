import './App.scss';
import React from 'react';
import Header from './components/01. Header/Header';
import About from './components/02. About/About';
import Menu from './components/03. Menu/Menu';
import Experience from './components/04. Experience/Experience';
import Education from './components/05. Education/Education';
import Testimonials from './components/08. Testimonials/Testimonials';
import Contact from './components/09. Contact/Contact';
import Skills from './components/06. Skills/Skills';
import CV from './components/00. CV/CV'

const {info} = CV
const {testimonials} = CV


function App() {
  return (
    <div className="App">
      <Header info = {info}/>
      <About info = {info}/>
      <Menu />
      <Experience />
      <Education />
      <Skills />
      <Testimonials testimonials = {testimonials}/>
      <Contact />
    </div>
  );
}

export default App;
