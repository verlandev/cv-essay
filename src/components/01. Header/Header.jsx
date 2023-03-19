import React from 'react';
import './Header.scss';
import image from '../../assets/firma.jpg'
import curriculum from '../../assets/CV-Beatriz-Martinez-Larrucea-2023.pdf'

const Header = ({info}) => {


  const {name, surname, city} = info;

  return (
    <header className='header'>
        <div className='presentation'>
            <h5 className='presentation__h5'>Hola, soy</h5>
            <h2 className='presentation__h2'>{name}{' '}{surname}</h2>
            <h5 className='presentation__h5--position'>Full Stack Developer Junior</h5>
            <p className='presentation__p'>en {city}</p>
        </div>
        <div className='presentation__imageProfile'>
          <img className='presentation__image' src={image} alt={name}/>
        </div>

        <div className='presentation__buttons'>
          <a href={curriculum} download className='presentation__button--cv'> Mi CV en PDF</a>
          <a href='#contact' className='presentation__button--contactMe'>¿Hablamos?</a>
        </div>
    </header>
  )
}

export default Header
