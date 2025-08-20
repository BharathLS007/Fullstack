import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
function Contact() {
  return (
    <div>
      <Navbar/>
      <div className="third-nav">
        <Link to="/" className='contacthome'>Home </Link>
        <p className='space'>/</p>
        <Link to="/Contact" className='Contactcontact'>Contact</Link>
      </div>
    </div>
  )
}

export default Contact
