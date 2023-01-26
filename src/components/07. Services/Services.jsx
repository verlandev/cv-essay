import React from 'react'
import './Services.scss'
import image from '../../assets/cheque.png'

const Services = ({services}) => {

  return (
    <section className='services'>
       <div className='services__title'>
          <p className='services__p'>Lo que soy capaz de hacer</p>       
          <h2 className='services__h2'>Todo mi arsenal</h2>
        </div>

            
        {services.map((service, index) => 


            <div className='services__container'>         
                <h3 className='services__h3' key={index}>{service.name}</h3>
                <ul className='services__ul'>
                    <li className='services__li'>
                        <span><img className='services__img' src={image} alt='services'/></span>
                        <p className='services__p' key={index}>{service.info}</p>

                    </li>
                </ul>
            </div>
          

            )}



    </section>
  )
}


export default Services
