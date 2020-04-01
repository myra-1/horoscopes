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
        {this.state.signInfo.map((sign, id) =>
          <div key={id}>
            <Link to={`/horoscope/${sign.title}`}>
              <Sign sign={sign} />
            </Link>
          </div>
        )}
      </div >

    )
  }
}

export default Signs


// <Route path='/horoscope/' render={routerProps => <Horoscope signInfo={signInfo} {...routerProps} />} />
{/* <Route path='/horoscope/:signType'
render={(routerProps) =>
  <Horoscope sign={sign} {...routerProps} />} /> */}


// render() {
//   return (

//     <div className='zodiacMap'>
//       {this.state.signInfo.map((sign) =>
//         <Link to='/horoscope/:signType'>
//           <Sign sign={sign} />
//         </Link>
//       )}
//     </div >
//   )
// }
// }

//horsoscope2 json cred:
// BEAUTIFUL DATA BROUGHT TO YOU BY:
// http://newsmobile.in/json-horoscope/

/// PRAISE THE LORD / SPIRITS / UNIVERSE for this helpful website: https://tylermcginnis.com/react-router-nested-routes/