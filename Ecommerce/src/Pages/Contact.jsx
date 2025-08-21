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
         
         <div className="container3">
            <div className="info-box">
               <div className="infobox1">
                   <div className="infocontent">
                       <li className='call'><i class="fa-solid fa-phone"></i></li>
                       <p>Call To Us</p>
                   </div>
                   <p>We are Avaiable 24/7,days a week,</p>
                   <p>Phone:+91 9876543210</p>
               </div>
                 <hr style={{ border: "1px solid black", margin: "10px 0",  width:"400px"}} />
               <div className="infobox1">
                   <div className="infocontent">
                       <li className='call'><i class="fa-solid fa-message"></i></li>
                       <p>Write To Us</p>
                   </div>
                   <p>Fill out our form and we will contact</p>
                   <p>you within 24hours.</p>
                   <p>Email:abc@customersupprot.com</p>
               </div>               
            </div>
            <div className="contact-container">
              <form action="submit">
                   <div className="form-conatiner">
                 <div className="form-group">
                  <input type="text" name='name' placeholder='your Name' required />
                 </div>
                  <div className="form-group">
                  <input type="text" name='email' placeholder='Your Email ' required />
                 </div>
                 <div className="form-group">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength="15"
                    name="phone"
                    placeholder="Your Phone"
                    required
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, '');
                    }}
                  />

                  </div>                    
                    </div> 
                  <div className="form-group-full-width">
                    <input type="text" name='message' placeholder='message'/>
                  </div>
              </form>
            </div>
         </div>

    </div>
  )
}

export default Contact
