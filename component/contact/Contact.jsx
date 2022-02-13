import React, { useState } from 'react'
import { useRef } from 'react'
import "./contact.scss"
import emailjs from 'emailjs-com'

export default function Contact() {

  const formRef = useRef()

  const[message,setMessage] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_179ax3a', 'template_pejhv8o', formRef.current, 'user_z1flD0brMTxErXnaWLo7N')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="contact" id = "contact">
      <div className="left">
        <img src="assets/Contact.JPG" alt="" />
      </div>
      <div className="right">
        <form ref={formRef} onSubmit={handleSubmit}>
          <h1>Contact</h1>
          <input type="text" name= "user_name"  placeholder='Name'/>
          <input type="text" name= "user_subject" placeholder='Subject'/>
          <input type="text" name= "user_email"  placeholder='Email'/>
          <textarea rows="5" name= "user_message" placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, I'll reply ^^</span>}
        </form>
      </div>
    </div>
  )
}
