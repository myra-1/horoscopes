import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import signInfo from './data/horoscope2.json'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signs from './Components/Zodiac/Signs'
import ThreeDayScope from './Components/ThreeDayScope/ThreeDayScope'

class App extends Component {
  constructor() {
    super()

    this.state = {
      signInfo
    }
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <Route exact path='/' component={Signs} />
          <Route path={'/horoscope/:signId'} component={ThreeDayScope} />
        </main>
        <Footer />
      </>
    )
  }
}

export default App;