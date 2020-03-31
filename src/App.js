import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import signInfo from '/Users/myra/supernovas/unit-2/project/project2/src/data/horoscope2.json'

import Header from './Components/Header'
import Footer from './Components/Footer'

import Horoscope from './Components/Horoscope'
import Signs from './Components/Signs'
import Sign from './Components/Sign'
import SunFacts from './Components/SunFacts'

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
          <Route exact path='/horoscope' component={Horoscope} />
          <Route path={'/horoscope/:signId'} component={SunFacts} />
          {/* <SunFacts /> */}
          {/* <Route path='/horoscope/' render={routerProps => <Horoscope signInfo={signInfo} {...routerProps} />} /> */}
        </main>
        <Footer />
      </>
    )
  }
}

export default App;


{/* <Route path='/horoscope/:signType'
render={(routerProps) =>
  <Horoscope signInfo={this.state.signInfo} {...routerProps} />} /> */}





/// THOUGHTS
// - need to set up horoscope route / link to be specific to the image clicked

// - need to match the title: 
//     from the json file => to the path => to the API on the horoscope page








// https://github.com/sameerkumar18/aztro

//horsoscope2 json cred:
// BEAUTIFUL DATA BROUGHT TO YOU BY:
// http://newsmobile.in/json-horoscope/