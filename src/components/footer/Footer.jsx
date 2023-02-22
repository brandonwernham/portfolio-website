import React from 'react'
import './footer.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Brandon Wernham</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/brandon-wernham-90771722a/"><AiFillLinkedin /></a>
        <a href="https://github.com/brandonwernham"><AiFillGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Brandon Wernham. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer