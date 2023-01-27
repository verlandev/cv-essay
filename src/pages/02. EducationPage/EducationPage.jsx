import React from 'react'

import CV from '../../components/00. CV/CV'
import AcademicLife from '../../components/05. AcademicLife/AcademicLife'


const {education} = CV

const EducationPage = () => {
  return (
    <div className='educationPage'>
        <AcademicLife education = {education} />
    </div>
  )
}

export default EducationPage
