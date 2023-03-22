import React from 'react'

import CV from '../../components/00. CV/CV'
import Header from '../../components/01. Header/Header';
import About from '../../components/03. About/About';
import Skills from '../../components/06. Skills/Skills';
// import Services from '../../components/07. Services/Services';
import Testimonials from '../../components/08. Testimonials/Testimonials';
import FAQ from '../../components/11. FAQ/FAQ'
import Contact from '../../components/09. Contact/Contact';
import Nav from '../../components/10. Nav/Nav';

const { info } = CV
const { testimonials } = CV
const { skills } = CV
const { languages } = CV
const { services } = CV
const { faqs } = CV


const Home = () => {
  return (
    <div className='homePage'>
      <Header info = {info}/>
      <About info = {info}/>
      <Skills 
          skills = {skills}
          languages = {languages}
          services = {services}
          />
      {/* <Services services = {services}/> */}
      <Testimonials testimonials = {testimonials}/>
      <FAQ faq={faqs}/>
      <Contact info = {info}/>
      <Nav />
    </div>
  )
}

export default Home
