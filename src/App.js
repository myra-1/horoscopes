import React, { Component } from 'react';
import './App.css';
import DailyHoroscope from './Components/DailyHoroscope'
import signInfo from './data/horoscope2'
import WeeklyHoroscope from './Components/WeeklyHoroscope'
import Signs from './Components/Signs'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <Signs />
        {/* <DailyHoroscope />
        <WeeklyHoroscope /> */}
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