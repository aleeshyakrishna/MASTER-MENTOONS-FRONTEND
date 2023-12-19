import React from 'react'
import '../css/namecarousel.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Lottie from 'lottie-react'
import Flight from '../animation/Flight.json'
import bord from '../Images/bord.png'
import grndownwave from '../Images/grndownwave.png'
import skywave from '../Images/skywave.png'
const Namecarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className="main">
              <img src={grndownwave} className='top-greean-pic'/>
        <div className="team-board"  data-aos="zoom-in-down"
        data-aos-duration="1000">
    
    <img src={bord} 
    />
   
    <p>Our Team</p>
  </div>
        <Lottie animationData={Flight}   data-aos-duration="1000" data-aos="fade-right" className='flight'/>
          <div className='w-3/4 m-auto'>
        <div className='mt-20'>
        <Slider {...settings}>
            {data.map((d)=>(
                <div className='bg-white h-[370px] text-black rounded-xl'>
                    <div className=' h-76  rounded-t-xl bg-indigo-500 flex justify-center item-center'>
                        <img src={d.img} className='my-5 h-44 w-44 rounded-full'/>
                 </div>

                 <div className='flex flex-col justify-center items-center gap-4 p-4'>
                    <p className='text-2xl font-semibold'>{d.name}</p>
                    <p>{d.position}</p>
                 </div>
                 </div>
                
            ))}
            </Slider >
        </div>
    </div>
    <img src={skywave} className='skywave' />
    </div>
  
  )
}

const data = [
    {
        name : `Mentor Mahesh`,
    img : `https://mentoons.com/img/team-01.jpg`,
    position : `Founder`
    },
    {
        name : `Anam Fathima`,
    img : `https://mentoons.com/img/team-02.jpg`,
    position : `Content Writer`
    },
    {
        name : `Joice Lincy`,
    img : `https://mentoons.com/img/team-03.jpg`,
    position : `Digital Marketing`
    },
    {
        name : `Manideep Kumar`,
    img : `https://mentoons.com/img/team-04.jpg`,
    position : `Web Developer`
    },
    {
        name : `Dhinesh  Kumar.G`,
    img : `https://mentoons.com/img/team-08.jpg`,
    position : `Graphic Designer`
    },
    {
        name : `Ajay`,
    img : `https://mentoons.com/img/team-06.jpg`,
    position : `Video Editer`
    },
    {
        name : `Dhanasekar`,
    img : `https://mentoons.com/img/team-07.jpg`,
    position : `Sketch Artist`
    },
    {
        name : `Sanker`,
    img : `https://mentoons.com/img/team-05.jpg`,
    position : `Sketch Artist`
    }
    
    
]


export default Namecarousel