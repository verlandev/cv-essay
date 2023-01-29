import React from 'react'
import './Contact.scss'
import icon1 from '../../assets/email.png'
import icon2 from '../../assets/linkedin.png'
import icon3 from '../../assets/github.png'


const Contact = ({info}) => {
  console.log(info)

  const {email, linkedin, gitHub} = info;

  return (
    <section className='contact' id='contact'>
      
      <div className='contact__title'>
            <h2 className='contact__h2'>¿Hablamos?</h2>
            <p className='contact__p'>Escríbeme al correo o sígueme en redes sociales</p>
      </div>

      <div className='containers'>
        <div className='container'>
          <img src={icon1} alt='email' className='container__img'/>
          <h3 className='container__h3'>Email</h3>
          <a href={"mailto:" + {email}} className='container__a'>Envíame un email</a>
        </div>

        <div className='container'>
          <img src={icon2} alt='linkedin' className='container__img'/>
          <h3 className='container__h3'>Linkedin</h3>
          <a href={linkedin} className='container__a'>Escríbeme por Linkedin</a>
        </div>

        <div className='container'>
          <img src={icon3} alt='github' className='container__img'/>
          <h3 className='container__h3'>GitHub</h3>
          <a href={gitHub} className='container__a'>Echa un vistazo a mi trabajo</a>
        </div>
      </div>
    </section>
  )
}

export default Contact
