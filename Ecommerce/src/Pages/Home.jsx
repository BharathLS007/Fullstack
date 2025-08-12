import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import iphone from '../images/iphone.png'
import Discountcard from '../Components/Discountcard'
function Home() {
  return (
    <div>
        <Navbar/>
               
         <div className="container">
           <div className="leftside-nav">
           <div className="nav-links"><Link to="/Mensdress">Men's Dress</Link></div>
           <div className="nav-links"><Link to="/Womensdress">Women's Dress</Link></div>
           <div className="nav-links"><Link to="/Toys">Toys</Link></div>
           <div className="nav-links"><Link to="/Electronics">Electronics</Link></div>
           <div className="nav-links"><Link to="#">Medicine</Link></div>
           <div className="nav-links"><Link to="#">Sports & Outdoor</Link></div>
           <div className="nav-links"><Link to="#">Baby's & Toys</Link></div>
           <div className="nav-links"><Link to="#">Groceries & Pets</Link></div>
           <div className="nav-links"><Link to="#">Health & Beauty</Link></div>
            </div>
            <div className="banner">
              <img src={iphone} alt="bannerimg" />
            </div>
         </div>
     
         <div className="container">
           <div className="Today">
            <p className='sale'>Today</p>
           </div>
         </div>

         <div className="container">
           <h2 className='Countdown'>Flash Sales</h2>
         </div>
           <Discountcard/>
     </div>
  )
}

export default Home
