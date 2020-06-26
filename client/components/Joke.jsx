import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

const jokesURL = 'https://official-joke-api.appspot.com/random_joke'

class Joke extends React.Component {
    state = {
      setup: '',
      punchline: ''
    }

    componentDidMount () {
      request.get(jokesURL)
        .then(res => {
          const { setup, punchline } = res.body
          this.setState({ setup, punchline })
        })
    }

    render () {
      return (
        <div className="container">
          <div className="body-text">
            <div className="setup">{this.state.setup}</div>
            <div className="punchline">{this.state.punchline}</div>
          </div>
          <Link to="/">
            <img className="go-again-sign" src="/go-again.png" alt="Go Again Sign" />
          </Link>
        </div>
      )
    }
}

export default Joke
