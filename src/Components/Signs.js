import React, { Component } from 'react'
import signInfo from '/Users/myra/supernovas/unit-2/project/project2/src/data/horoscope2.json'

class Signs extends Component {
  constructor() {
    super()

    this.state = {
      signInfo
    }
  }

  render() {
    return (

      <div>
        {this.state.signInfo.map((sign) =>
          <div>
            <img src={sign.image} />
            <h4>{sign.title}</h4>
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