import React from 'react'
import logo from '../../assets/headerimg.jpg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practices</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar