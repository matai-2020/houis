import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Joke from './Joke'

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/joke" component={Joke} />
      </Router>
    </>
  )
}

export default App
