import React from 'react'
import '../css/team.css'
import teamup from '../Images/teamup.png'
import Lottie from 'lottie-react'
import Owl from '../animation/Owl.json'
import bord from '../Images/bord.png'
import greenbg from '../Images/greenbg.png'
import ReactPlayer from 'react-player'
import Teamvideo from '../videos/Teamvideo.mp4'
import Teamcarosel from './Teamcarosel'

const Team = () => {
 
  return (
   <div className="team">
   

    <img src={teamup} />
    
      <Lottie animationData={Owl} className='owl'   data-aos="zoom-in" />
      {/* <img src={greenbg} /> */}
      <div className="teambord"  data-aos="zoom-in-down"
        data-aos-duration="1000">
    
   
    <img src={bord} id='team'
    />
    <p>INSIDE MENTOONS</p>

  </div>
  <div className="videobox">

    <video className='teamvideo'width={'600px'} autoPlay={false} controls={true}>
      <source src={Teamvideo} type='video/mp4' />
    </video>

    <div className="teamtxt">
      <h1>
      Meet Us
      </h1>
    

      <p>
      Mentoons is a result of the creative amalgamation of a diverse team coming<br></br> together - our founder, talented developers, creative illustrators, skillfull graphic designers,<br></br> adept content writers, melodious music producer, and experienced psychologists.
      </p>
    </div>
    </div>
 

   </div>
  )
}

export default Team