import React from 'react'

const Nav = (props) => {
  return (
    <ul className={`${props.cl}`}>
        { props.children }
    </ul>
  )
}

export default Nav;