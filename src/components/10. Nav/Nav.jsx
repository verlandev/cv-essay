import React from 'react'
import './Nav.scss'
import { GoHome } from 'react-icons/go'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { SlPeople } from 'react-icons/sl'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='nav'>
        <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''} ><GoHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href='#skills' onClick={() => setActiveNav ('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><BsBook /></a>
        <a href='#testimonials' onClick={() => setActiveNav ('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><SlPeople/></a>
        <a href='#faqs' onClick={() => setActiveNav ('#faqs')} className={activeNav === '#faqs' ? 'active' : ''}><AiOutlineQuestionCircle /></a>
        <a href='#contact' onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav
