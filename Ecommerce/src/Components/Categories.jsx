import React from 'react'
import watch from '../images/watch.jpg'
import camera from '../images/camera.jpg'
import phone from '../images/phone.jpg'
import headset from '../images/headset.jpg'
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
                 <li className='items'><img src={phone} alt="watchimg" style={{width:"100px", height:"100px%"}}/></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><img src={headset} alt="watchimg" style={{width:"100px", height:"100px%"}}/></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><img src={Gamepad} alt="watchimg" style={{width:"100px", height:"100px%"}}/></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><img src={camera} alt="watchimg" style={{width:"100px", height:"100px%"}}/></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><img src={pc} alt="watchimg" style={{width:"100px", height:"100px%"}}/></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><img src={watch} alt="watchimg" style={{width:"100px", height:"100px%"}}/></li> 
               </div>
             </div>
           </div>
           </div>
  )
}

export default Categories
