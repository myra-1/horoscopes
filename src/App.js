import React, { Component } from 'react';
import './App.css';
import HoroscopeDaily from './Components/HoroscopeDaily'
import signInfo from './data/horoscope2'
import HoroscopeWeekly from './Components/HoroscopeWeekly'
import Signs from './Components/Signs'
import Sign from './Components/Sign'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Signs />
        {/* <HoroscopeDaily />
        <HoroscopeWeekly /> */}
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