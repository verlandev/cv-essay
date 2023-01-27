import React from 'react'

import CV from '../../components/00. CV/CV'
import ProfessionalLife from '../../components/04. ProfessionalLife/ProfessionalLife'




const {experience} = CV


const ExperiencePage = () => {
  return (
    <div className='experiencePage'>
        <ProfessionalLife experience = {experience}/>
      
    </div>
  )
}

export default ExperiencePage
