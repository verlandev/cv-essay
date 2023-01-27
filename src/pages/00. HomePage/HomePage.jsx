import React from 'react'

import CV from '../../components/00. CV/CV'
import Header from '../../components/01. Header/Header';
import Menu from '../../components/03. Menu/Menu';
import Skills from '../../components/06. Skills/Skills';
import Services from '../../components/07. Services/Services';
import Testimonials from '../../components/08. Testimonials/Testimonials';
import Contact from '../../components/09. Contact/Contact';

const {info} = CV
const {testimonials} = CV
const {skills} = CV
const {languages} = CV
const {services} = CV


const Home = () => {
  return (
    <div className='homePage'>
      <Header info = {info}/>
      <Menu info = {info}/>
      <Skills 
          skills = {skills}
          languages = {languages}
          />
      <Services services = {services}/>
      <Testimonials testimonials = {testimonials}/>
      <Contact />
    </div>
  )
}

export default Home
