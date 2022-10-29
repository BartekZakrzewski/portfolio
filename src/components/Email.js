import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Email() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 1000);
      }, (error) => {
          console.log(error.text);
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 1000);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="name">
            <label>Name</label>
            <input type="text" name="user_name" id='Name' placeholder='Name' required/>
        </div>
        <div className="email">
            <label>Email</label>
            <input type="email" name="user_email" id='Email' placeholder='Email' required/>
        </div>
        <div className="message">
            <label>Message</label>
            <textarea name="message" id='Message' placeholder='Message' required/>
        </div>
        <div className="submit">
            <input type="submit" value="Send" className='send' />
            <div className={`succ`}>
                {(sent && "Message sent succesfuly!")}
            </div>
            <div className={`err`}>
                {(err && "Error...")}
            </div>
        </div>
    </form>
  );
};

export default Email;