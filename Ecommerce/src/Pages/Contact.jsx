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
                       <li className='call'><i class="fa-solid fa-phone"></i></li><br /><br />
                       <p style={{marginTop:'5px', marginLeft:'10px'}}>Call To Us</p><br /><br />
                   </div>
                   <p>We are Avaiable 24/7,days a week,</p><br />
                   <p>Phone:+91 9876543210</p>
               </div>
                 <hr style={{ border: "1px solid black", margin: "10px 0",  width:"400px", paddingLeft:'10px'}} />
               <div className="infobox1">
                   <div className="infocontent">
                       <li className='call'><i class="fa-solid fa-message"></i></li>
                       <p style={{marginTop:'5px',marginLeft:'10px'}}>Write To Us</p>
                   </div><br />
                   <p>Fill out our form and we will contact</p><br />
                   <p>you within 24hours.</p><br />
                   <p>Email:abc@customersupprot.com</p>
               </div>               
            </div>
            <div className="contact-container">
              <form action="submit">
                   <div className="form-conatiner">
                 <div className="form-group">
                  <input type="text" name='name' placeholder='your Name' required style={{width:'250px', height:'40px', paddingLeft:'10px', borderRadius:'0.5rem'}}/>
                 </div>
                  <div className="form-group">
                  <input type="text" name='email' placeholder='Your Email ' required style={{width:'250px', height:'40px', paddingLeft:'10px',borderRadius:'0.5rem' }}/>
                 </div>
                 <div className="form-group">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    maxLength="15"
                    name="phone"
                    placeholder="Your Phone"
                    required style={{width:'250px', height:'40px', paddingLeft:'10px',borderRadius:'0.5rem'}}
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/\D/g, '');
                    }}
                  />

                  </div>                    
                    </div> 
                  <div className="form-group-full-width">
                    <input type="text" name='message' placeholder='message' style={{width:'800px', height:'200px',paddingLeft:'30px',borderRadius:'0.5rem'}}/>
                  </div>
                  <button type="submit" style={{width:'200px', marginLeft:'70%',backgroundColor:'var(--hover)'}}>Send message</button>
              </form>
            </div>
         </div>

    </div>
  )
}

export default Contact
