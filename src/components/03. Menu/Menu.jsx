import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

const Menu = () => {
  return (
    <section className='menu'>
               
        <div className='showExperience'>
          <h3 className='showExperience__h3'>Mi experiencia profesional</h3>
          <p className='showExperience__p'>Por si te interesa conocer las empresas, cargos y funciones que he ocupado. Verás que me encanta el mundo digital. </p>
          <Link to={'/experience'} className='showExperience__Link'>Echa un vistazo</Link>
        </div>
        
        <div className='showEducation'>
          <h3 className='showEducation__h3'>Mis estudios</h3>
          <p className='showEducation__p'>Aquí te cuento cómo, dónde y con quién me he formado. Te adelanto que es mucho tiempo incando los codos.</p>
          <Link to={'/education'} className='showEducation__Link'>Mira, mira...</Link>

        </div>
    
    </section>
  )
}


export default Menu
