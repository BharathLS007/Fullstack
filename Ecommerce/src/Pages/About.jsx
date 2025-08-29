import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function About() {
  return (
    <div>
      <Navbar/>
                 <div className="third-nav">
                    <Link to="/" className='contacthome'>Home </Link>
                    <p className='space'>/</p>
                    <Link to="/About" className='Contactcontact'>About</Link>
                  </div>

                  
    </div>
  )
}

export default About
