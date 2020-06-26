import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="row container">
      <div className="col-4"></div>

      <div className="col-4 home">
        <p><img className="joke" src="/logo-new.png" /></p>
        <p><img className="middle-text" src="/middletext.png" /></p>
        <Link to="/joke">
          <img className="go-sign" src="/go-sign.png" alt="Go Sign" />
        </Link>
      </div>

      <div className="col-4"></div>

    </div>
    </>
  )
}

export default Home
