import React from 'react'

export default class Joke extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      setup: ``,
      punchline: ``
    }
  }

  randomiseJoke () {
    // call api -> get route server
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
