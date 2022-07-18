import React from 'react'
import './styles/Navbar.scss'

const Header = (props) => {
  return (
    <header className='header'>
        { props.children }
    </header>
  )
}

export default Header;