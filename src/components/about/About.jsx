import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {MdOutlineWeb} from 'react-icons/md'
import {AiFillDatabase} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Coding Experience</h5>
              <small>4+ Years Project-Based</small>
            </article>

            <article className='about__card'>
              <MdOutlineWeb className='about__icon'/>
              <h5>Frontend</h5>
              <small>JavaScript</small><br></br>
              <small>React</small><br></br>
              <small>HTML5</small><br></br>
              <small>CSS3</small>
            </article>

            <article className='about__card'>
              <AiFillDatabase className='about__icon'/>
              <h5>Backend</h5>
              <small>Java</small><br></br>
              <small>SQL</small><br></br>
              <small>NodeJS</small><br></br>
              <small>Python</small>
            </article>
          </div>

          <p>
          I am a driven Software Engineer with 4+ years of programming experience. 
          I help companies bring innovative ideas to life will full-stack development. 
          I work well in a team, proven with group experience opportunities throughout 
          my 4 years at Western University. I am customer-driven, always striving 
          to make clients 100% satisfied. I have excellent experience with 
          Java, JavaScript, React, HTML, CSS, Unity, and Node.js.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About