import React from 'react'
import './Testimonials.scss';


const Testimonials = (testimonials) => {
  
  const testimonialsInfo = testimonials.testimonials
 
    return (
    
    <section className='testimonials'>
        <div className='testimonials__title'>
          <h2 className='testimonials__h2'>¿Qué dicen de mí?</h2>
          <p className='testimonials__p'>Aquí una muestra de lo que piensan los que mejor me conocen: <br></br>compañer@s de trabajo, amig@s, familiares. ¿Quién mejor para contarte lo que doy de sí?</p>       
        </div>

      {testimonialsInfo.map((testimonial, index) => 
      
      
      <div className='slide' key={index}>
        <div className='testimonial'>
          <img className='testimonial__img' src={testimonial.image} alt={testimonial.name} />
          <h3 className='testimonial__h3'>{testimonial.name}</h3>
          <h4 className='testimonial__h4'>{testimonial.position}</h4>
          <p className='testimonial__p--def'>{testimonial.def}</p>
          <p className='testimonial__p'>{testimonial.text}</p>
        </div>
      </div>

      )}
      
    </section>
  )
}

export default Testimonials
