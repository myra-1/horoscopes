import React from 'react'

const SunFacts = (props) => {
  return (
    <div>
      <h3>Sun Facts</h3>
      <p>{props.compatibility}</p>
      <p>{props.mood}</p>
      <p>{props.color}</p>
      <p>{props.luckyNumber}</p>
      <p>{props.luckyTime}</p>
    </div>
  )
}

export default SunFacts
