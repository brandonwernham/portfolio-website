import React from 'react'
import Resume from '../../assets/BrandonWernham_Resume2023.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Send Message</a>
    </div>
  )
}

export default CTA