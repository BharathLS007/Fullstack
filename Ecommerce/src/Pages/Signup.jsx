import React from 'react'
import { Link } from 'react-router-dom'
import checkoutcart from '../images/checkoutcart.png'
import Navbar from '../Components/Navbar'
function Signup() {
  return (
    <div>
      <Navbar/>
        <div className="container">
            <div className="signform">
              <div className="checkout">
                <img src={checkoutcart} alt="Checkout Cart" />
              </div>
              <div className="signupform">
                <form>
                  <h3>Create an account</h3>
                  <p>Enter your details below</p>
                  <div className="content">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="content">
                    <input type="text" placeholder="Phone or Email" />
                  </div>
                  <div className="content">
                    <input type="password" placeholder="Password" />
                  </div>
                  <button type="submit" className="secondary">Create Account</button>
                  <button type="button" className="primary">Sign Up With Google</button>
                  <p>
                    Already have an account? <Link to="/Login">Log In</Link>
                  </p>
                </form>
              </div>
            </div>
        </div>


      </div>
  )
}

export default Signup
