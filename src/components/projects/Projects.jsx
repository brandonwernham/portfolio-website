import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2.PNG'
import IMG3 from '../../assets/portfolio3.PNG'
import IMG4 from '../../assets/portfolio4.PNG'

const Projects = () => {
  return (
    <section id='projects' className='proj'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Sorting Algorithm Educational Web-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/brandonwernham/SortingAlgoLearning" 
            className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Online Tutoring Web-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/brandonwernham/TutoringPlatform" 
            className='btn' target='_blank'>Github</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>StudyNote (In Progress)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/brandonwernham/StudyNote" 
            className='btn' target='_blank'>Github</a>
            <a href="https://studynote.ca/" 
            className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>My Website Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/brandonwernham/portfolio-website" 
            className='btn' target='_blank'>Github</a>
            <a href="https://brandonwernham.com/" 
            className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects