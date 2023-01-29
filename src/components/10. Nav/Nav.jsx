import React from 'react'
import './Nav.scss'
import { GoHome } from 'react-icons/go'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='nav'>
        <a href='#' onClick={() => setActiveNav('#')}  className={activeNav === '#' ? 'active' : ''} ><GoHome /></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href='#skills' onClick={() => setActiveNav ('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><BsBook /></a>
        <a href='#services' onClick={() => setActiveNav ('#services')} className={activeNav === '#services' ? 'active' : ''} ><RiServiceLine /></a>
        <a href='#contact' onClick={() => setActiveNav ('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMail /></a>
    </nav>
  )
}

export default Nav
