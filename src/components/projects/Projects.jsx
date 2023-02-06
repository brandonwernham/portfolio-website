import React from 'react'
import './projects.css'
//import IMG1 from '../../assets/portfolio1.jpg'
//import IMG2 from '../../assets/portfolio1.jpg'
//import IMG3 from '../../assets/portfolio1.jpg'
//import IMG4 from '../../assets/portfolio1.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container"></div>
      <article className='portfolio__item'>
        <div className="portfolio__item-image"></div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com/brandonwernham/SortingAlgoLearning" 
        className='btn' target='_blank'>Github</a>
        <a href="https://github.com/brandonwernham/SortingAlgoLearning" 
        className='btn btn-primary' target='_blank'>Live Demo</a>
      </article>
    </section>
  )
}

export default Projects