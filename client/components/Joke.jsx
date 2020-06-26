import React from 'react'
import request from 'superagent'

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
      <>
        <div className="setup">{this.state.setup}</div>
        <div className="punchline">{this.state.punchline}</div>
        {/* <button onClick={this.randomiseJoke}>New Joke</button> */}
      </>
      )
    }
}

export default Joke
