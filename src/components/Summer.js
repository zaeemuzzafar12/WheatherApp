import React from 'react'
import img from './images/summer.jpeg'

function Summer() {
  return (
    <>
    <div>
        <img src={img} width={300} height={300} />
    </div>
    <div>
        <span><i className="massive loading sun icon"></i></span>
    </div>
    <div>
        <h1>Too hort lets hit the beach</h1>
    </div>
    </>
  )
}

export default Summer