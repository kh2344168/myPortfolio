
import React from 'react';
import "./Contact.css"
import {AiOutlineMail} from "react-icons/ai";
import {BsMessenger} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mbxg24d', 'template_r6ir1ij', form.current, 'zI25F9e_vWnujeibV')
      .then((result) => {
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <BsMessenger className='contact_options_icon'/>
            <h4>messenger</h4>
            <h5>kh2344168@gmail.com</h5>
            <a href="http://m.me/zz.zz0123456" target="_blank">send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineMail className='contact_options_icon' />
            <h4>email</h4>
            <h5>kh2344168@gmail.com</h5>
            <a href="mailto:kh2344168@gmail.com" >send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_options_icon'/>
            <h4>Whatsapp</h4>
            <h5>+201158206428</h5>
            <a href="https://api.whatsapp.com/send?phone=+01009554149" target="_blank">send a message</a>
          </article>
        </div>
        {/* END OF CONTCT OPTIONS */}
        <form ref={form} onSubmit={sendEmail} action="">
          <input type="text" name="name" placeholder='your full name' required />
          <input type="email" name="email" placeholder="your email" required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='your message' required></textarea>
          <button type="submit" className='btn btn_primary'> send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact