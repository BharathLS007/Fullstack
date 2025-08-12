import React from 'react'
import joystick from '../images/joystick.jpg'
import gamingcooler1 from '../images/gamingcooler1.jpg'
import gamingpc1 from '../images/gamingpc1.jpg'
import gamingmonitor1 from '../images/gamingmonitor1.jpg'
import mouse2 from '../images/mouse2.jpg'
function Discountcard() {
  return (
    <div>
            <div className="container">
                <div className="card">
                  <div className="box">
                    <img src={joystick} alt="cardimg" />
                  </div>
                </div>
                 <div className="card">
                  <div className="box">
                    <img src={gamingcooler1} alt="cardimg" />
                  </div>
                </div>
                <div className="card">
                  <div className="box">
                    <img src={gamingpc1} alt="cardimg" />
                  </div>
                </div>
                 <div className="card">
                  <div className="box">
                    <img src={gamingmonitor1} alt="cardimg" />
                  </div>
                </div>
                 <div className="card">
                  <div className="box">
                    <img src={mouse2} alt="cardimg" />
                  </div>
                </div>
            </div>
    </div>
  )
}

export default Discountcard
