import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Navitem from './components/Navitem';
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

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <Header>
        <Logo/>
        <Nav cl={`navbar ${isOpen && "get-menu"}`}>
          <Navitem dir='Home' href='/' icon={<BiDockTop />} />
          <Navitem dir='Projects' href='#projects' icon={<FaJsSquare />}/>
          <Navitem dir='Contact' href='#contact' icon={<FaEnvelope />}/>
          <li className='nav-item'>
            <a href={ 'https://github.com/BartekZakrzewski' }>
                <FaGithub />
            </a>
          </li>
        </Nav>
        <button className={`menu-button ${isOpen && 'rotate'}`} onClick={() => setOpen(!isOpen)}>
          <FaChevronLeft />
        </button>
      </Header>
      <Main>
        <Home>
          <span>Welcome</span>
        </Home>
        <Projects>
          <Project icon={<FaReact />} websitehref={'https://www.creative-collisions.io/'} githubhref={'https://github.com/BartekZakrzewski/creative-collisions/tree/main'} text={'Creative Collisions'} cl={'react'} />
          <Project icon={<FaReact />} websitehref={'https://school-blog-presentation.vercel.app/'} githubhref={'https://github.com/BartekZakrzewski/school-blog-presentation/tree/main'} text={'Web 3.0 Blog'} cl={'react'} />
          <Project icon={<FaJsSquare />} websitehref={'https://fliko-website.vercel.app/'} githubhref={'https://github.com/BartekZakrzewski/fliko/tree/main'} text={'Fliko'} cl={'js'} />
        </Projects>
        <Contact>
          <Email />
        </Contact>
      </Main>
    </div>
  );
}

export default App;
