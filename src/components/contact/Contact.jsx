import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wy4irp5', 'template_lpqifd8', form.current, 'MhwrEsWYNfVydlPH4')

      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      alert("The email has been sent.");
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>brandonwern01@gmail.com</h5>
            <a href="mailto:brandonwern01@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Brandon Wernham</h5>
            <a href="https://www.linkedin.com/in/brandon-wernham-90771722a/" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact