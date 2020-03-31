import React, { Component } from 'react'
import axios from 'axios'

class SunFacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      today: ''
    }
  }

  componentDidMount = async () => {
    const signId = this.props.match.params.signId

    const response = await axios.post('https://aztro.sameerkumar.website/?sign=capricorn&day=today')
    console.log(response)
    console.log(signId)

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

export default SunFacts