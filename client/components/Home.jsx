import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="joke">
          <img src="/logo.png" />
        </div>
        <div className="middle-text">
          <img src="/middletext.png" />
        </div>
        <Link to="/joke">
          <div className="go-sign">
            <img src="/go-sign.png" alt="Go Sign" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home
