import React from 'react'
import ps5 from '../images/ps5.png'
import soundbox from '../images/soundbox.png'
import cosmatic from '../images/cosmatic.png'
import perfume from '../images/perfume.png'
function Featured() {
  return (
    <div>
         <div className="container">
           <div className="Today">
            <p className='sale'>Featured</p>
           </div>
         </div>           
         <div className="container">
           <h2 className='Countdown'>New Arrival</h2>
         </div> 
         <div className="container">
            <div className="collection">
                <div className="largerpic">
                    <img src={ps5} alt="ps5" style={{marginTop:"15%"}} />
                </div>
                <div className="smallpic">
                   <div className="cosmatic">
                     <img src={cosmatic} alt="cosmatic" style={{margin:"7%"}} />
                   </div>
                   <br /><br />
                   <div className="sound">
                    <img src={soundbox} alt="soundbox" />
                    <img src={perfume} alt="perfume" />
                   </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Featured
