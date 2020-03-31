import React, { Component } from 'react'
import axios from 'axios'

class Horoscope extends Component {
  constructor() {
    super()

    this.state = {
      newScope: '',
      // visible: false
    }
  }

  componentDidMount = async () => {
    const response = await axios
      (`https://cors-anywhere.herokuapp.com/http://horoscope-api.herokuapp.com/horoscope/week/Capricorn`)
    console.log(response)

    this.setState({
      newScope: response.data.horoscope,
    })
  }


  render() {
    return (
      <div>
        <h1>horoscope page</h1>
        <button>week</button>
        {/* <button onClick={() => this.setState({ visible: true })}>week</button> */}
        <p>{this.state.newScope}</p>
      </div>
    )
  }
}

export default Horoscope