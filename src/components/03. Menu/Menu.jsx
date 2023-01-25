import React from 'react'
import './Menu.scss'

const Menu = () => {
  return (
    <div className='menu'>

        
        
        <div className='showExperience'>
          <h3 className='showExperience__h3'>Mi experiencia profesional</h3>
          <p className='showExperience__p'>Aquí te cuento todas las cosas que he hecho mientras he estado trabajando. Verás que me encanta el mundo digital. </p>
          <a href='#Experience'>Pincha para saber más</a>
        </div>
        <div className='showEducation'></div>
        <h3 className='showEducation__h3'>Mis estudios</h3>
          <p className='showEducation__p'>Aquí te cuento cómo, dónde y con quién me he formado. Te adelanto que es mucho tiempo dedicado a incar los codos.</p>
          <a href='#Education'>Mira, mira</a>
    
    </div>
  )
}


export default Menu
