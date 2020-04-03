import React, { Component } from 'react'
import signInfo from './horoscope2.json'
import Sign from './Sign'
import './Signs.css'
import { Link } from 'react-router-dom'

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
        {this.state.signInfo.map((sign, id) =>
          <div key={id}>
            <Link style={{ color: 'orange', textDecoration: 'none' }} to={`/horoscope/${sign.title}`}>
              <Sign sign={sign} />
            </Link>
          </div>
        )}
      </div >

    )
  }
}

export default Signs


//horsoscope2 json cred:
// BEAUTIFUL DATA BROUGHT TO YOU BY:
// http://newsmobile.in/json-horoscope/

/// PRAISE THE LORD / SPIRITS / UNIVERSE for this helpful website: https://tylermcginnis.com/react-router-nested-routes/