import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hlfxnkb', 'template_b71hd3w', form.current, '6luO1cHmF2QVoNkdC')
      .then((result) => {
          document.getElementById('alert').innerHTML = "Message Sent!"
          document.getElementById('alert').style.color = "green"
          clearForm();
      
      }, (error) => {
          document.getElementById('alert').innerHTML = "Message Error"
          document.getElementById('alert').style.color = "red"
      });

    setTimeout(() => {document.getElementById('alert').innerHTML = "" }, 4000); 
  };

  const clearForm = () => {
    document.getElementById('contactform').reset()
  }
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='icon'/>
            <h4>Email</h4>
            <h5>alex@suremail.im</h5>
            <a href='mailto:alex@suremail.im'>Send Email</a>
          </article>

          <article className='contact_option'>
            <AiOutlineLinkedin className='icon'/>
            <h4>LinkedIn</h4>
            <h5>AlexPhillips02</h5>
            <a href='https://www.linkedin.com/in/alexphillips02/'>LinkedIn</a>
          </article>
        </div>

        <form id='contactform' ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea rows='7' name='message' placeholder='Your Message' required/>

          <div id='contactbutton'>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            <div id='alert'></div>
          </div>

        </form>
      </div>
    
    </section>
  )
}

export default contact