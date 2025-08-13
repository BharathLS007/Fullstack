import React from 'react'
import watch from '../images/watch.png'
import camera from '../images/camera.png'
import phone from '../images/phone.png'
import headset from '../images/headset.png'
import Gamepad from '../images/Gamepad.png'
import pc from '../images/pc.png'
function Categories() {
  return (
    <div>
         <div className="container">
           <div className="Today">
            <p className='sale'>Categories</p>
           </div>
         </div>           
         <div className="container">
           <h2 className='Countdown'>Browse By Category</h2>
         </div>       
          <div className="container">
            <div className="icons">
              <div className="boxicon">
    <li className='items'>
      <img src={phone} alt="Phone" style={{width:"100px", height:"100px"}}/>
      <p className="label">Phone</p>
    </li> 
              </div>
              <div className="boxicon">
                <li className='items'>
      <img src={headset} alt="Headset" style={{width:"100px", height:"100px"}}/>
      <p className="label">Headset</p>
                </li> 
              </div>
              <div className="boxicon">
                <li className='items'>
      <img src={Gamepad} alt="Gamepad" style={{width:"100px", height:"100px"}}/>
      <p className="label">Gamepad</p>
                </li> 
              </div>
              <div className="boxicon">
                <li className='items'>
                 <i className="fa-solid fa-camera" style={{ fontSize: "100px", color: "black" }}></i>
                  <p className="label">Camera</p>
                </li> 
              </div>
              <div className="boxicon">
    <li className='items'>
      <img src={pc} alt="PC" style={{width:"100px", height:"100px"}}/>
      <p className="label">PC</p>
    </li> 
              </div>
              <div className="boxicon">
    <li className='items'>
      <img src={watch} alt="Watch" style={{width:"100px", height:"100px"}}/>
      <p className="label">Watch</p>
    </li> 
              </div>
            </div>

           </div>
           </div>
  )
}

export default Categories
