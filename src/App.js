import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';
import Email from './components/Email';
import { FaChevronLeft } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { BiDockTop } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { RiNextjsFill } from "react-icons/ri";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <Header>
        <Logo/>
        <ul className={ `navbar ${isOpen && "get-menu"}` }>
          <li className='nav-item'>
            <a href={ '/' }>
                Home
                <BiDockTop />
            </a>
          </li>
          <li className='nav-item'>
            <a href={ '#projects' }>
                Projects
                <FaJsSquare />
            </a>
          </li>
          <li className='nav-item'>
            <a href={ '#contact' }>
                Contact
                <FaEnvelope />
            </a>
          </li>
          <li className='nav-item'>
            <a href={ 'https://github.com/BartekZakrzewski' }>
                <FaGithub />
            </a>
          </li>
        </ul>
        <button className={`menu-button ${isOpen && 'rotate'}`} onClick={() => setOpen(!isOpen)}>
          <FaChevronLeft />
        </button>
      </Header>
      <Main>
        <Home>
          <span>Welcome</span>
        </Home>
        <Projects>
          <Project 
            icon={<FaReact />} 
            websitehref={'https://www.creative-collisions.io/'} 
            githubhref={'https://github.com/BartekZakrzewski/creative-collisions/tree/main'} 
            text={'Creative Collisions'} 
            cl={'react'} 
          />
          <Project 
            icon={<RiNextjsFill />} 
            websitehref={'https://green-daily.vercel.app'} 
            githubhref={'https://github.com/BartekZakrzewski/GreenDAILY'} 
            text={'Green DAILY'} 
            cl={'react'} 
          />
          <Project 
            icon={<FaReact />} 
            websitehref={'https://school-blog-presentation.vercel.app/'} 
            githubhref={'https://github.com/BartekZakrzewski/school-blog-presentation/tree/main'} 
            text={'Web 3.0 Blog'} 
            cl={'react'} 
          />
          <Project 
            icon={<FaReact />} 
            websitehref={'https://citylab.life/'} 
            githubhref={'https://github.com/BartekZakrzewski/pzakrzewski'} 
            text={'CityLab'} 
            cl={'react'} 
          />
          // <Project 
          //   icon={<FaReact />} 
          //   websitehref={'https://hangmn-tsx.stackblitz.io/'} 
          //   githubhref={'https://github.com/BartekZakrzewski/hangman-tsx'} 
          //   text={'Hangman'} 
          //   cl={'react'} 
          // />
          // <Project 
          //   icon={<FaReact />} 
          //   websitehref={'https://sample-product-website-tsx.stackblitz.io'} 
          //   githubhref={'https://github.com/BartekZakrzewski/sample-product-website-tsx'} 
          //   text={'Sample Product Website'} 
          //   cl={'react'} 
          // />
          <Project 
            icon={<FaJsSquare />} 
            websitehref={'https://fliko-website.vercel.app/'} 
            githubhref={'https://github.com/BartekZakrzewski/fliko/tree/main'} 
            text={'Fliko'} 
            cl={'js'} 
          />
        </Projects>
        <Contact>
          <Email />
        </Contact>
      </Main>
    </div>
  );
}

export default App;
