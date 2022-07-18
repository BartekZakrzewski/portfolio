import React from 'react'

const Navitem = (props) => {
  return (
    <li className='nav-item'>
        <a href={ props.href }>
            { props.dir }
            { props.icon }
        </a>
    </li>
  )
}

export default Navitem;