import React from 'react'
import './Menu.scss'

const Menu = () => {
  return (
    <section className='menu'>
               
        <div className='showExperience'>
          <h3 className='showExperience__h3'>Mi experiencia profesional</h3>
          <p className='showExperience__p'>Por si te interesa conocer las empresas, cargos y funciones que he ocupado. Verás que me encanta el mundo digital. </p>
          <a className='showExperience__a' href='#Experience'>Echa un ojo</a>
        </div>
        
        <div className='showEducation'>
          <h3 className='showEducation__h3'>Mis estudios</h3>
          <p className='showEducation__p'>Aquí te cuento cómo, dónde y con quién me he formado. Te adelanto que es mucho tiempo dedicado a incar los codos.</p>
          <a className='showEducation__a' href='#Education'>Mira, mira</a>
        </div>
    
    </section>
  )
}


export default Menu
