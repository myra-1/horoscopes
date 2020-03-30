import React, { Component } from 'react'
import axios from 'axios'

class WeeklyHoroscope extends Component {
  constructor() {
    super()

    this.state = {
      weekly: ''
    }
  }


  componentDidMount = async () => {
    const response = await axios('https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/week/libra')
    console.log(response)

    this.setState({
      weekly: response.data.horoscope
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.weekly}</p>
      </div>
    )
  }


}

export default WeeklyHoroscope;

