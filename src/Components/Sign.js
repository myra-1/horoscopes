import React from 'react'

const Sign = (props) => {
  return (
    <div>
      <img className='zodiacImg' src={props.sign.image} />
      <h4 className='zodiacTitle'>{props.sign.title}</h4>
    </div>
  )
}

export default Sign