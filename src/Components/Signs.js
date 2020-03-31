import React, { Component } from 'react'
import signInfo from '/Users/myra/supernovas/unit-2/project/project2/src/data/horoscope2.json'
import Sign from './Sign'
import './Signs.css'
import { Route, Link } from 'react-router-dom'

class Signs extends Component {
  constructor() {
    super()

    this.state = {
      signInfo
    }
  }

  render() {
    return (

      <div className='zodiacMap'>
        {this.state.signInfo.map((sign) =>
          <Link to='/horoscope'>
            <Sign sign={sign} />
          </Link>
        )}
      </div >
    )
  }
}

export default Signs



//horsoscope2 json cred:
// BEAUTIFUL DATA BROUGHT TO YOU BY:
// http://newsmobile.in/json-horoscope/