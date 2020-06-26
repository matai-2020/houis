import React from 'react'
import request from 'superagent'
import { Link } from 'react-router-dom'

const jokesURL = 'https://official-joke-api.appspot.com/random_joke'

class Joke extends React.Component {
    state = {
      setup: '',
      punchline: '',
      image: ''
    }

    handler () {
      request.get(jokesURL)
        .then(res => {
          const { setup, punchline } = res.body
          this.setState({ setup, punchline, image: '/go-again.png' })
        })
    }

    componentDidMount () {
      
      this.handler()
    }

    render () {
      return (
        <div className="container">
          <div className="body-text">
            <div className="setup">{this.state.setup}</div>
            <div className="punchline">{this.state.punchline}</div>
          </div>
          <Link onClick={() => this.handler()}>
            <img className="go-again-sign" src={this.state.image} />
          </Link>
        </div>
      )
    }
}

export default Joke
