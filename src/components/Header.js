import React from 'react';
import header from '../css/header.css';
import wave from '../Images/wave.png';
import waveup from '../Images/waveup.png';
import van from '../Images/van.png'
import Lottie from 'lottie-react';
import Sun from '../animation/Sun.json'
import Cloud from '../animation/Cloud.json'
const Header = () => {
  return (
    
    <div className="header" id='hero'>

       <div className="cloudcontainer">
      <marquee>
    <Lottie animationData={Cloud} className='cloud' />
    </marquee> 
      <marquee scrollamount="8">
    <Lottie animationData={Cloud} className='cloud' />
    </marquee> 
    
      </div>
      <Lottie animationData={Sun} className='sun'/>
      <div className="wavecontainer">
     
        <div className="headertxt">
      <div className="headingtxt" >
        
          <h1  data-aos="zoom-in-up" data-aos-duration="2000">Mentoons Kids</h1>
      <p  data-aos="zoom-in" data-aos-duration="2000">Kids Camp</p>
      <p className='smltxt'  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      A unique platform that combines Mentoring with the powerful language of Cartoons.
      </p>
      </div>
     
        </div>
      <img src={waveup}  className='waveup'/>
      
      <img src={wave}  className='wave'/>
      <img src='https://mentoons.com/img/420x420-04.png'  data-aos-duration="2000" data-aos="zoom-in" className='maheshsir'/>
      <div className="vanimg" data-aos="fade-left"
        data-aos-duration="2000">

        <img src={van}  width={'150px'}/>
      </div>
      </div>
      
    </div>
  )
}

export default Header