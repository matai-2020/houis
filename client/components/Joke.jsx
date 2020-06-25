import React from 'react'

export default class Joke extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      setup: `What's the best thing about a Boolean`,
      punchline: `Even if you're wrong, you're only off by a bit.`
    }
  }

  randomiseJoke () {
    // Math.Random()
    // setState
  }

  componentDidMount () {
    this.randomiseJoke()
  }

  render () {
    return (
      <>
        <div className="setup">{this.state.setup}</div>
        <div className="punchline">{this.state.punchline}</div>
        <button onClick={this.randomiseJoke}>New Joke</button>
      </>
    )
  }
}
