import React from 'react'
import ps5 from '../images/ps5.png'
import soundbox from '../images/soundbox.png'
import cosmatic from '../images/cosmatic.png'
import perfume from '../images/perfume.png'
import Delivery from './Delivery'

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
                    <span className="label">PS5</span>
                </div>
                <div className="smallpic">
                   <div className="cosmatic">
                     <img src={cosmatic} alt="cosmatic" style={{margin:"7%"}} />
                     <span className="label">Collections</span>
                   </div>
                   <br /><br />
                    <div className="sound">
                      <div className="image-box">
                     <img src={soundbox} alt="soundbox" />
                     <span className="label">SoundBox</span>
                      </div>
                      <div className="image-box">
                        <img src={perfume} alt="perfume" />
                        <span className="label">Perfumes</span>
                      </div>
                    </div>                    

                </div>
            </div>
         </div>

 <Delivery/>
    </div>
  )
}

export default Featured
