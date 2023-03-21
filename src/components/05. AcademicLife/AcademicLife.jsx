import React from 'react'
import './AcademicLife.scss'
import { Link } from 'react-router-dom'

const AcademicLife = (education) => {

   const educationInfo = education.education

  return (
    <section className='education'>
        <div className='education__title'></div>
        <p className='education__p'>¿Qué he estudiado?</p>
        <h2 className='education__h2'>Todos mis estudios</h2>

        <div className='studies'>
            <div className='studies__container'>
            {educationInfo.map((eachStudy, index) =>
                <div className='studies__elements' key={index}>
                    <img className='studies__img' src={eachStudy.logo} alt='academicLogos' />
                    <div className='studies__content'>
                        <h2 className='studies__h2'>{eachStudy.name}</h2>
                        <h4 className='studies__h4'>{eachStudy.where}</h4>
                        <h3 className='studies__h3'>{eachStudy.date}</h3>
                        <p className='studies__p'>{eachStudy.description}</p>
                    </div>
                </div>
                )}
            </div>
        </div>

        <div className="buttonsNav">
            <Link to={'/'} className='home__link'> Atrás</Link>
            <Link to={'/experience'} className='experience__link'>Conoce mi experiencia</Link>
      </div>

      
    </section>
  )
}

export default AcademicLife
