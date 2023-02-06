import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineProject, AiOutlineHeart, AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} 
      className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} 
      className={activeNav === '#projects' ? 'active' : ''}><AiOutlineProject /></a>
      <a href="#education" onClick={() => setActiveNav('#education')} 
      className={activeNav === '#education' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#hobbies" onClick={() => setActiveNav('#hobbies')} 
      className={activeNav === '#hobbies' ? 'active' : ''}><AiOutlineHeart /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav