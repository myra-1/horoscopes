import React from 'react'
import './SunFacts.css'
import '/Users/myra/supernovas/unit-2/project/project2/src/Components/ThreeDayScope/ThreeDayScope.css'

const SunFacts = (props) => {
  return (
    <div className='sunFacts'>
      <h3>Sun Facts</h3>
      <p>Compatibility: {props.compatibility}</p>
      <p>Mood: {props.mood}</p>
      <p>Color: {props.color}</p>
      <p>Lucky Number: {props.luckyNumber}</p>
      <p>Lucky Time: {props.luckyTime}</p>
    </div>
  )
}

export default SunFacts
