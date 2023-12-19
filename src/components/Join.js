import React from 'react'
import join from '../css/join.css'
import bord from '../Images/bord.png'
import mountain from '../Images/mountain.png'
import Carousel from '../components/Carousel.js'
import banda from '../Images/banda.gif'
import Bird from '../animation/Bird.json'
import Lottie from 'lottie-react'
import grndownwave from '../Images/grndownwave.png'
import '../css/Teampage.css'
import { Slides } from '../data/Caroseldata.js'
import Teamcarosel from './Teamcarosel'
const Join = () => {

  
  return (
   <>
    <div className="joincointainer">
  
  <div className="grass"  data-aos="zoom-in-down"
        data-aos-duration="1000">
    
    <img src={bord} id='about'
    />
   
    <p>About</p>
  </div>
  <div className="birdiv">

    <Lottie animationData={Bird}  data-aos-duration="1000" data-aos="fade-right" className='bird'/>
  </div>
  <div className="about-txt">
    <div>
  <Teamcarosel data={Slides} />
    </div>
    <div>
      <h1>Our Unique Solution</h1>
      <p>We believe in transforming children's lives by changing maladaptive behavior, <br></br>enhancing self-awareness, and taking a stance against social media addiction.<br></br>

Our evidence-based methodology combines concepts of social human <br></br>development and learning through engaging, fun elements like cartoons, games, books, and videos.

Through our in-depth workshops, <br></br>we provide resources that foster social interactions, healthy reactions, and forming lasting friendships. We're here to support children, teenagers, and adults as they navigate life's challenges.</p>
    </div>
  </div>
    <div className="down">
    
    <img src={grndownwave} />
    </div>
</div>

    
   </>
  )
}

export default Join