import React from 'react'

const Project = (props) => {
  return (
    <div className="project">
        <div className={`${ props.cl }`}>
            { props.icon }
        </div>
        <span className='text'>
            { props.text }
        </span>
        <a href={`${ props.websitehref }`} target="_about:blank" className='site'>
            Project Website
        </a>
        <a href={`${ props.githubhref }`} target="_about:blank" className='git'>
            GitHub Repository
        </a>
    </div>
  )
}

export default Project