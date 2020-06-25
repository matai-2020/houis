import React from 'react'

const Joke = () => {
  return (
    <>
      <div className="buildup">Insert Buildup here</div>

      {setTimeout(() => {
        return <div className="punchline">Insert Punchline here</div>
      }, 3000)}

    </>
  )
}

export default Joke
