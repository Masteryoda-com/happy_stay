import React from 'react'
import './Navbar.css'
import logo from '../../../../public/images/logo/logo.png'

function Navbar() {
  return (
    <div className='nav-bar'>
      <a href="/">
      <div className="logo">
        <div className="logo-img">
        <img src={logo} alt="" />
        </div>
        <div className="logo-name">
          <h2>Happy Stay</h2>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Navbar