import React, { Component } from 'react'
import axios from 'axios'

class HoroscopeDaily extends Component {
  constructor() {
    super()

    this.state = {
      today: ''
    }
  }

  componentDidMount = async () => {
    const response = await axios.post('https://aztro.sameerkumar.website/?sign=capricorn&day=today')
    console.log(response)

    this.setState({
      today: response.data.description
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.today}</p>
      </div>


    )
  }
}

export default HoroscopeDaily