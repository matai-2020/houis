import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div><h1>JOKE</h1></div>
      <div><h1>on-the</h1></div>
      <Link to="/joke">
        <div>
          <img src="" alt="Go Sign" />
        </div>
      </Link>

    </>
  )
}

export default Home
