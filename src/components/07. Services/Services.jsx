import React from 'react'
import './Services.scss'
import image from '../../assets/check.png'

const Services = ({services}) => {

  return (
    <section className='services' id='services'>
       <div className='services__title'>
          <p className='services__p'>Lo que soy capaz de hacer</p>       
          <h2 className='services__h2'>Todo mi arsenal</h2>
        </div>

        <div className='servicesContainers'>
            {services.map((service, index) => 

          <div className='serviceContainer'>         
            <h3 className='serviceContainer__h3'>{service.name}</h3>
            <ul className='serviceContainer__ul'>
            {service.info.map((info, index) => {
                return ( 
                <li className='serviceContainer__li'>
                    <span><img className='serviceContainer__img' src={image} alt='serviceContainer'/></span>
                    <p className='serviceContainer__p' key={index}>{info}</p>
                </li>
                )} 
              )}
            </ul>
            </div>
        )}
      </div>
            


    </section>
  )
}


export default Services
