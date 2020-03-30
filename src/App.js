import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
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
        <h1>TEST TEST TEST</h1>
        <br />
        <h1>{this.state.today}</h1>
      </div >
    )
  }
}

export default App;


// https://github.com/sameerkumar18/aztro