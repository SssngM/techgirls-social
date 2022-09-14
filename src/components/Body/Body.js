import React from 'react'
import './Body.css'
import firstimg from '../../img/img1.jpg'
import sescondimg from '../../img/img2.jpg'
import thirdimg from '../../img/img3.jpg'

function Body() {
  return (
    <div>
        <div>
            <div className='b-title'> Be who you are!</div>
            <div className='b-dec'>  
            <div> You are all special, wherever, whoever. </div>
            <div> Support all tech girls and enjoy your social life.</div>
            <div> We believe, women are the future.</div>
            </div>
        </div>
        <div className='body2'>
        <figure >
            <img className="img1" src={firstimg} alt="" />
            <figcaption>Diversity & Equity</figcaption>
        </figure>
        <figure>
            <img className="img2" src={sescondimg} alt="" />
            <figcaption>Get and Grow Together</figcaption>
        </figure>
        <figure>
            <img className="img3" src={thirdimg} alt="" />
            <figcaption>Being Professional</figcaption>
        </figure>
        </div>
            {/* <div className='caption'>
            <p>Diversity & Equity</p>
            <p>Get and Grow Together</p>
            <p>Diversity & Equity</p>
            </div> */}
    </div>
  )
}

export default Body