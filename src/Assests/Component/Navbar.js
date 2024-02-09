import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div id='header'>
        <h1>eastCode</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Work</li>
                <li>Career</li>
                <li>Cases</li>
            </ul>
        </nav>
        <button>Schedule a Call</button>
    </div>
  )
}

export default Navbar