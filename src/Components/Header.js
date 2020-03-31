import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        {/* <h3>Home</h3> */}
      </nav>
      <Link to='/'><h1>Horoscope Central</h1></Link>
    </header>
  )
}

export default Header