import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1s9py6q', 'template_w65t5nq', form.current, 'QGfDrgTFlnjvkQnnI')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_options">
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>shinepark123@gmail.com</h5>
            <a href="mailto:shinepark123@gmail.com" target="_blank">Send a Message!</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact