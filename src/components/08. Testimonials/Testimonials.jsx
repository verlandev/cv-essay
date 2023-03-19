import React, { useState } from 'react'
import './Testimonials.scss';


const Testimonials = (testimonials) => {

  const testimonialsInfo = testimonials.testimonials
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? testimonialsInfo.length - 1 : currentIndex - 1)
    console.log('funciona')
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonialsInfo.length -1 ? 0 : currentIndex + 1)
    console.log('funciona')
  }

 
    return (
    
    <section className='testimonials' id='testimonials'>
        <div className='testimonials__title'>
          <h2 className='testimonials__h2'>¿Qué dicen de mí?</h2>
          <p className='testimonials__p'>Pero solo las personas que mejor me conocen</p>       
        </div>

      <div class="containerSlider">
        <div className = 'slide'>
        {testimonialsInfo.map((testimonial, index) =>
        
          <div className={`testimonial ${index === currentIndex ? 'active' : 'inactive'}`} key= {index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <img className='testimonial__img' src={testimonial.image} alt={testimonial.name} />
            <h3 className='testimonial__h3'>{testimonial.name}</h3>
            <h4 className='testimonial__h4'>{testimonial.position}</h4>
            <p className='testimonial__p--def'>{testimonial.def}</p>
            <p className='testimonial__p'>{testimonial.text}</p>
          </div>
        )}
        </div>
          <div className='rows'>
            <button className='rowLeft button' onClick={goToPrev}> Anterior </button>
            <button className='rowRight button' onClick={goToNext}> Siguiente </button>
          </div>
      </div>
      
    </section>
  )
}

export default Testimonials
