import React from 'react'
import watch from '../images/watch.jpg'
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
                 <li className='items'><i className="fa-solid fa-mobile-screen"></i></li>
               </div>
               <div className="boxicon">
                 <li className='items'><i className="fa-solid fa-headphones" ></i></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><i className="fa-solid fa-computer"></i></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><i className="fa-solid fa-watch-smart"></i></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><i className="fa-solid fa-gamepad"></i></li> 
               </div>
               <div className="boxicon">
                 <li className='items'><img src={watch} alt="watchimg" style={{width:"20%", height:"20%"}}/></li> 
               </div>
             </div>
           </div>
           </div>
  )
}

export default Categories
