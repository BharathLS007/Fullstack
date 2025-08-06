import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='Navbar'>
<ul>
    
    <div className="exclusiveleft">
          <li className="exclusive"><span>Exclusive</span></li>
    </div>
 
     <div className="menu">
          <li className="nav-links"><Link to="/">Home</Link></li>
          <li className="nav-links"><Link to="/contact">Contact</Link></li>
          <li className="nav-links"><Link to="/about">About</Link></li>
          <li className="nav-links"><Link to="/signup">Sign Up</Link></li>
     </div>

     <div className="Searchbox">
        <div className="search">
            <input type="text" placeholder='What are you Looking for?' />
        </div>
        <div className="cartbox">
            <li className='cart'><i class="fa-solid fa-cart-shopping"></i></li>
        </div>
     </div>
             
</ul>

    </div>
  )
}

export default Navbar
