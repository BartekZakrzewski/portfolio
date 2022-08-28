import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const Contact = (props) => {
  return (
    <div className="contact" id='contact'>
        <h1 className='email-me'>
          Email Me!
        </h1>
        { props.children }
        <ul className='other-contacts'>
          <li className='other-link'>
            <a href="https://www.facebook.com/bartek.zakrzewski.923/" className="facebook" target={'_about:blank'}>
              <FaFacebook />
              <span className="text">
                Facebook
              </span>
            </a>
          </li>
          <li className='other-link'>
            <a href="https://github.com/BartekZakrzewski" className="github-other" target={'_about:blank'}>
              <FaGithub />
              <span className="text">
                Github
              </span>
            </a>
          </li>
          <li className='other-link'>
            <a href="https://discordapp.com/users/779296833197310003" className="discord" target={'_about:blank'}>
              <FaDiscord />
              <span className="text">
                Discord
              </span>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Contact;