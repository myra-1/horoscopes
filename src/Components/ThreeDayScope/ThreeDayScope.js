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
      day: 'Today'
    }
  }

  clickYesterday() {
    this.setState({ 'day': 'Yesterday' }, this.componentDidMount)
  }
  clickToday() {
    this.setState({ 'day': 'Today' }, this.componentDidMount)
  }

  clickTmrw() {
    this.setState({ 'day': 'Tomorrow' }, this.componentDidMount)
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
        <h1>{this.state.sign}</h1>
        <h4>({this.state.dateRange})</h4>
        <SunFacts {...this.state} />
        <div className='threeScopes'>
          <h3>{this.state.day} - {this.state.currentDate}</h3>
          <p>{this.state.description}</p>
        </div>
        <span className='threeButtons'>
          <button onClick={() => this.clickYesterday()}>Yesterday</button>
          <button onClick={() => this.clickToday()}>Today</button>
          <button onClick={() => this.clickTmrw()}>Tomorrow</button>
        </span>
        <Link to='/' style={{ textDecoration: 'none', color: 'purple', gridRowStart: '4', gridColumnStart: '7', alignSelf: 'center' }}>
          <h3 style={{ border: 'solid 1px purple', padding: '10px', textAlign: 'center' }}>Pick another sign</h3>
        </Link>
      </div >


    )
  }
}

export default ThreeDayScope


/// THANK TO ONE OF THE AMAZING COMMENTERS WHO ANSWERED MY ISSUE
// https://stackoverflow.com/questions/34800893/reactjs-need-to-click-twice-to-set-state-and-run-function
// "If you want a function to execute after the state transition completes, pass it in as a callback:"