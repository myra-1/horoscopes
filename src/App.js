import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import signInfo from './data/horoscope2'

import Header from './Components/Header'
import Footer from './Components/Footer'

import Horoscope from './Components/Horoscope'
import Signs from './Components/Signs'
import Sign from './Components/Sign'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Route exact path='/' component={Signs} />
        <Route exact path='/horoscope' component={Horoscope} />
      </main>
      <Footer />
    </>
  )
}

export default App;


// https://github.com/sameerkumar18/aztro

//horsoscope2 json cred:
// BEAUTIFUL DATA BROUGHT TO YOU BY:
// http://newsmobile.in/json-horoscope/