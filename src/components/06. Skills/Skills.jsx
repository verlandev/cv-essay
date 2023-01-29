import React from 'react'
import './Skills.scss'
import image from '../../assets/checklist.png'

const Skills = ({skills, languages}) => {

    
  return (
    <section className='habilities' id='skills'>
        <div className='habilities__title'>
          <p className='habilities__p'>Principales habilidades</p>       
          <h2 className='habilities__h2'>Mis "armas" del día a día</h2>
        </div>

        <div className='habilitiesContainer'>
            <div className='personalSkills'>
                <h3 className='personalSkills__h3'>Skills</h3>            
                <div className='personalSkills__container'>
                    <ul className='personalSkills__ul'>
                        {skills.map((skill, index)=> 
                        <li className='personalSkills__li' key={index}>
                        <span><img className='personalSkills__img' src={image} alt='skills' /></span><p className='personalSkills__p'>{skill}</p>    
                        </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className='languages'>
                <h3 className='languages__h3'>Idiomas</h3>
                <div className='languages__container'>
                    <ul className='languages__ul'>
                        {languages.map((language, index) => 
                        <li className='languages__li' key={index}>
                            <span><img className='languages__img' src={image} alt='languages'/></span>
                            <p className='languages__p'>{language.language}:</p>
                            <p className='languages__p--level'>{language.level}</p>
                        </li>
                        )}
                    </ul>
                </div>
          </div>

        </div>

    </section>
  )
}

export default Skills
