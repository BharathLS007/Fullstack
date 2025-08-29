import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import twins from '../images/twins.png'
function About() {
  return (
    <div>
      <Navbar/>
                 <div className="third-nav">
                    <Link to="/" className='contacthome'>Home </Link>
                    <p className='space'>/</p>
                    <Link to="/About" className='Contactcontact'>About</Link>
                  </div>

                 <div className="about-container">
                    <div className="about-content-right">
                      <h1>Our Story</h1>
                      <div className="content-right">
                        <p className='story'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nemo veniam, dignissimos voluptates vero nesciunt repellendus perspiciatis in ipsum iste eius tenetur consectetur earum accusantium quibusdam doloremque architecto, culpa dolorum!
                        Incidunt corrupti expedita mollitia officia facere provident nulla, molestias vel rem animi sed nihil minima eum voluptas quo iste praesentium. Excepturi, sint consequuntur? Eum ratione est quisquam magnam, explicabo iusto.
                        Sequi nam odit nesciunt ut laudantium? Magni odit ipsam sequi impedit sapiente assumenda non facilis sint quam animi laborum tenetur, quia possimus atque culpa repellat cum sit numquam blanditiis temporibus?</p>
                      </div>
                      <div className="content-left">
                        <img src={twins} alt="img" />
                      </div>
                    </div>
                 </div>
    </div>
  )
}

export default About
