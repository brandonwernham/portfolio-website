import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineProject, AiOutlineHeart, AiOutlineMessage} from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#education"><AiOutlineBook /></a>
      <a href="#projects"><AiOutlineProject /></a>
      <a href="#hobbies"><AiOutlineHeart /></a>
      <a href="#contact"><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav