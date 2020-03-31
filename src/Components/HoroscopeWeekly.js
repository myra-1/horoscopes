import React, { Component } from 'react'
import axios from 'axios'

class HoroscopeWeekly extends Component {
  constructor() {
    super()

    this.state = {
      weekly: ''
    }
  }


  componentDidMount = async () => {
    const signType = this.props.match.params.signType

    const response = await axios(`https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/week/${signType}`)
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

export default HoroscopeWeekly;

