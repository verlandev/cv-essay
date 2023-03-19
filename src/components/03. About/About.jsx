import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'
import icon1 from '../../assets/profession.png'
import icon2 from '../../assets/academy.png'
import arrow from '../../assets/bombilla.png'


const About = (info) => {
  
    const aboutMeInfo = info.info.aboutMe

  return (

  <section className='about' id='about'>
     
        <div className='aboutPresentation'>
            <img className='aboutPresentation__img' src={arrow} alt='arrow' />
            <h2 className='aboutPresentation__h2'>Sobre mí</h2>
                {aboutMeInfo.map((aboutMe, index) => 
            <p className='aboutPresentation__p'>{aboutMe.presentation}</p>
                )}
        </div>

        <div className='aboutContainers'>       
          <div className='showExperience'>
            <img src={icon1} alt='profession' className='showExperience__icon--profession'></img>
            <h3 className='showExperience__h3'>Mi experiencia</h3>
            <p className='showExperience__p'>Conoce las empresas, cargos y funciones que he ocupado. Como ves son ya algunos años nadando en el mundo digital. </p>
            <Link to={'/experience'} className='showExperience__Link'>Echa un vistazo a la pecera</Link>
          </div>
          
          <div className='showEducation'>
            <img src={icon2} alt='academy' className='showEducation__icon'></img>
            <h3 className='showEducation__h3'>Mis estudios</h3>
            <p className='showEducation__p'>Aquí te cuento cómo, dónde y con quién me he formado. Te adelanto que es mucho tiempo incando los codos.</p>
            <Link to={'/education'} className='showEducation__Link'>Mira, mira...</Link>
          </div>
        </div>

      
    </section>
  )
}


export default About
