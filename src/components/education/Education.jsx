import React from 'react'
import './education.css'
import WESTERN from '../../assets/WESTERN.jpg'

const Education = () => {
  return (
    <section id='education'>
      <h5>Fresh Graduate With Excellent Learning Skills</h5>
      <h2>My Education</h2>

      <div className="container education__container">
        
        <div className="education__content">
            <article className='degree__card'>
              <h5>Degree</h5>
              <small>Bachelor of Software Engineering</small>
            </article>

          <article className='courses__card'>
            <h5>Key Courses</h5>
            <small>Algorithms and Data Structures</small><br></br>
            <small>Database Management Systems</small><br></br>
            <small>Web Technologies</small><br></br>
            <small>Software Project and Process Management</small><br></br>
            <small>Computer Networking</small><br></br>
            <small>Software Engineering Design</small><br></br>
            <small>Software Testing and Maintenance</small><br></br>
            <small>Information Security</small><br></br>
            <small>Cloud Computing</small><br></br>
          </article>
        </div>

        <div className="western">
          <div className="western-image">
            <img src={WESTERN} alt="About Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education