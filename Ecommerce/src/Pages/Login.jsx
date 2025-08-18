import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import checkoutcart from '../images/checkoutcart.png';
import Navbar from '../Components/Navbar';

function Login() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="signform">
          <div className="checkout">
            <img src={checkoutcart} alt="Checkout Cart" />
          </div>
          <div className="signupform">
            <form>
              <h3>Welcome Back</h3>
              <p>Log in to your account</p>
              <div className="content">
                <input type="text" placeholder="Phone or Email" />
              </div>
              <div className="content">
                <input type="password" placeholder="Password" />
              </div>
              <button type="submit" className="secondary">Log In</button>
              <p>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
