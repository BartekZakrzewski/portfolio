import React from 'react'

const Projects = (props) => {
  return (
    <div className='projects section' id='projects'>
        { props.children }
    </div>
  )
}

export default Projects