import React from 'react'
import '../pagecss/Shopping.css'
import youtube from '../Images/youtube.jpg'
import Teamvideo from '../videos/Teamvideo.mp4'
import Showcase from './Showcase'
import { NavLink } from 'react-router-dom'
import Productnav from '../Pages/Productnav.js'

const Shopping = () => {

  return (
    <div className='add-benner'>
            
        <div className="full-shopping">

                
        <div className="shoping-haeding">
            <h1 data-aos="fade-down"   data-aos-duration="2000" >Introducing Mentoons Store</h1>
        </div>
        <div className="main-shooing-header">
            <div className="header-text-and-video">
                <div className="shoping-text">
                    <h2  data-aos="fade-down"   data-aos-duration="2000">
                        OUR STORIES TEACH<br></br> KEY LIFES OF LESSONS
                    </h2>
                    <div className="cate-nav">
                        <NavLink to='/Mentoonstore'>
                        <ul data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"   data-aos-duration="2000">
                            <li>
                                E-Comics  |
                            </li>
                            <li>Audio Comics |</li>
                            <li>Printable Games |</li>
                            <li>Work Shops |</li>
                        </ul>
                        </NavLink>
                    </div>
                    <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"   data-aos-duration="2000">With hundreds of beautifully illustrated comics, our highly engaging stories
                    <br></br>   contains high moral values and impact essential life lessons 
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button class="button" data-aos="fade-up" data-aos-duration="2000"
     data-aos-anchor-placement="top-bottom">
  <span>Free Trial</span>
</button>

                </div>
                <div className="video-shopping">
                <video data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="2000" className='shopping-video'width={'600px'} autoPlay={false} controls={true}>
                <source src={Teamvideo} type='video/mp4' />
              </video>
                </div>
            </div>
        </div>

        </div>


            <div className="banner">
                <div className="newson-banner">
                    
                </div>
                <div className="newson-banner">

                </div>
                
                <div className="newson-banner">

                </div>
                <div className="newson-banner">

                </div>
                <div className="newson-banner">

                </div>
                <div className="newson-banner">

                </div>
            </div>
    </div>
  )
}

export default Shopping