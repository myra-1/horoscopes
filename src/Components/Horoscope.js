import React, { Component } from 'react'

import HoroscopeDaily from './HoroscopeDaily'
import HoroscopeWeekly from './HoroscopeWeekly'


class Horoscope extends Component {
  render() {
    return (
      <div>
        <h1>horoscope page</h1>
        <HoroscopeDaily />
        <HoroscopeWeekly />
      </div>
    )
  }
}

export default Horoscope