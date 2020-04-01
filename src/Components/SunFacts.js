import React, { Component } from 'react'
import axios from 'axios'

class SunFacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      today: '',
      sign: '',
      day: 'today'
    }
    // this.clickTmrw = this.clickTmrw.bind(this)
  }

  clickTmrw() {
    this.setState({ 'day': 'tomorrow' }, this.componentDidMount)
    console.log('hello')
    console.log(this.state.day)
  }


  componentDidMount = async () => {
    const signId = this.props.match.params.signId

    const response = await axios.post(`https://aztro.sameerkumar.website/?sign=${signId}&day=${this.state.day}`)
    console.log(response)
    console.log(signId)
    console.log(this.state.day)

    this.setState({
      today: response.data.description,
      sign: signId
    }
    )
  }

  render() {
    return (
      <div>
        <h1>{this.state.sign}</h1>
        <p>{this.state.today}</p>
        {/* <button onClick={() => this.setState({ day: 'tomorrow' })}>tomorrow</button> */}
        <button onClick={() => this.clickTmrw()}>Tomorrow</button>
      </div >


    )
  }
}

export default SunFacts


/// THANK TO ONE OF THE AMAZING COMMENTERS WHO ANSWERED MY ISSUE
// https://stackoverflow.com/questions/34800893/reactjs-need-to-click-twice-to-set-state-and-run-function
// "If you want a function to execute after the state transition completes, pass it in as a callback:"