import React, { Component } from 'react'
import axios from 'axios'
import SunFacts from './SunFacts'

class ThreeDayScope extends Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      compatibility: '',
      mood: '',
      color: '',
      luckyNumber: '',
      luckyTime: '',
      sign: '',
      day: 'today'
    }
  }

  clickYesterday() {
    this.setState({ 'day': 'yesterday' }, this.componentDidMount)
    console.log('hello')
    console.log(this.state.day)
  }
  clickToday() {
    this.setState({ 'day': 'today' }, this.componentDidMount)
    console.log('hello')
    console.log(this.state.day)
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
      description: response.data.description,
      sign: signId,
      compatibility: response.data.compatibility,
      mood: response.data.mood,
      color: response.data.color,
      luckyNumber: response.data['lucky_number'],
      luckyTime: response.data['lucky_time']
    }
    )
  }

  render() {
    return (
      <div>
        <h1>{this.state.sign}</h1>
        <p>{this.state.description}</p>
        <button onClick={() => this.clickYesterday()}>Yesterday</button>
        <button onClick={() => this.clickToday()}>Today</button>
        <button onClick={() => this.clickTmrw()}>Tomorrow</button>
        <SunFacts {...this.state} />
      </div >


    )
  }
}

export default ThreeDayScope


/// THANK TO ONE OF THE AMAZING COMMENTERS WHO ANSWERED MY ISSUE
// https://stackoverflow.com/questions/34800893/reactjs-need-to-click-twice-to-set-state-and-run-function
// "If you want a function to execute after the state transition completes, pass it in as a callback:"