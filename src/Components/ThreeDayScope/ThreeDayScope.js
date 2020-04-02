import React, { Component } from 'react'
import axios from 'axios'
import SunFacts from '../SunFacts/SunFacts'
import { Link } from 'react-router-dom'

class ThreeDayScope extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateRange: '',
      currentDate: '',
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
  }
  clickToday() {
    this.setState({ 'day': 'today' }, this.componentDidMount)
  }

  clickTmrw() {
    this.setState({ 'day': 'tomorrow' }, this.componentDidMount)
  }

  componentDidMount = async () => {
    const signId = this.props.match.params.signId

    const response = await axios.post(`https://aztro.sameerkumar.website/?sign=${signId}&day=${this.state.day}`)

    this.setState({
      dateRange: response.data['date_range'],
      currentDate: response.data['current_date'],
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
      <div className="scopeAndFacts">
        <SunFacts {...this.state} />
        <div className='threeScopes'>
          <h1>{this.state.sign}</h1>
          <h4>{this.state.dateRange}</h4>
          <h5>Horoscope for {this.state.currentDate}</h5>
          <p>{this.state.description}</p>
          <span className='threeButtons'>
            <button onClick={() => this.clickYesterday()}>Yesterday</button>
            <button onClick={() => this.clickToday()}>Today</button>
            <button onClick={() => this.clickTmrw()}>Tomorrow</button>
          </span>
        </div>
        <Link to='/' style={{ textDecoration: 'none', color: 'purple' }}>
          <h3>Home</h3>
        </Link>
      </div >


    )
  }
}

export default ThreeDayScope


/// THANK TO ONE OF THE AMAZING COMMENTERS WHO ANSWERED MY ISSUE
// https://stackoverflow.com/questions/34800893/reactjs-need-to-click-twice-to-set-state-and-run-function
// "If you want a function to execute after the state transition completes, pass it in as a callback:"