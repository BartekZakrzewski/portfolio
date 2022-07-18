import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_450jizu', 'template_5676evo', form.current, 'eJjg2wqADZIE-SbT6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="name">
            <label>Name</label>
            <input type="text" name="user_name" id='Name' required/>
        </div>
        <div className="email">
            <label>Email</label>
            <input type="email" name="user_email" id='Email' required/>
        </div>
        <div className="message">
            <label>Message</label>
            <textarea name="message" id='Message' required/>
        </div>
        <div className="submit">
            <input type="submit" value="Send" className='send' />
        </div>
    </form>
  );
};

export default Email;