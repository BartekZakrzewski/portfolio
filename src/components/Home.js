import React from 'react'

const Home = (props) => {
  return (
    <div className="home section" id={ 'home' }>
        { props.children }
    </div>
  )
}

export default Home