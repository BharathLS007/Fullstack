import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <Navbar/>
      
      <div className="leftside-nav" > 
         <div className="nav-links"><Link to="Mensdress">Mensdress</Link></div>
         <div className="nav-links"><Link to="Womensdress">Womensdress</Link></div>
         <div className="nav-links"><Link to="Toys">Toys</Link></div>
         <div className="nav-links"><Link to="Electronics">Electronics</Link></div>
         <div className="nav-links"><Link to="#">Medicine</Link></div>
         <div className="nav-links"><Link to="#">Sport& Outdoor</Link></div>
         <div className="nav-links"><Link to="#">Baby's & Toys</Link></div>
         <div className="nav-links"><Link to="#">Groceries& pets</Link></div>
         <div className="nav-links"><Link to="#">Health & Beauty</Link></div>
      </div>
 
     </div>
  )
}

export default Home
