import React from 'react'
import delivery from '../images/delivery.png'
import shieldtick from '../images/shieldtick.png'
import support from '../images/support.png'
function Delivery() {
  return (
    <div>
      <div className="container">
         <div className="distribute">
           <div className="ontime">
             <img src={delivery} alt="iconimg" />
             <h4>FREE AND FAST DELIVERY</h4>
             <p>Free delivery for all orders over $140.</p>
           </div>
           <div className="ontime">
             <img src={shieldtick} alt="iconimg" />
             <h4>MONEY BACK GUARANTEE</h4>
             <p>We return money within 30 days.</p>
           </div>
           <div className="ontime">
             <img src={support} alt="iconimg" />
             <h4>24/7 CUSTOMER SERVICE</h4>
             <p>Friendly 24/7 customer support.</p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Delivery
