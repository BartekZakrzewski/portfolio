import React from 'react'

const Project = (props) => {
  return (
    <div className="project">
        <div className={`${ props.cl }`}>
            { props.icon }
        </div>
        <a href={`${ props.websitehref }`} target="_about:blank" className='site'>
            { props.text }
        </a>
        <a href={`${ props.githubhref }`} target="_about:blank" className='git'>
            GitHub Repository
        </a>
    </div>
  )
}

export default Project