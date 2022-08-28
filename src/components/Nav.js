import React from 'react'
import Scrollspy from 'react-scrollspy'

const Nav = (props) => {
  return (
    <Scrollspy items={ ['home', 'projects', 'contact'] } currentClassName="active" className={ `${props.cl}` }>
      { props.children }
    </Scrollspy>
  )
}

export default Nav;