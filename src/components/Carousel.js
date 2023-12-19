import React, { useState, useEffect } from 'react';
import '../css/caro.css'

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ images }) => {


  return (
    <>
    <div className="caro">
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://mentoons.com/img/service1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mentoons.com/img/about3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mentoons.com/img/about2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mentoons.com/img/about1.jpg" />
        </SwiperSlide>
      </Swiper>
      <div className="carotxt" data-aos="zoom-in-up">
        <h1>Our Unique Solution</h1>
        <p>We believe in transforming children's lives by changing maladaptive behavior, enhancing self-awareness, and <br></br>taking a stance against social media addiction.,<br></br>

Our evidence-based methodology combines concepts of social human development and learning through engaging,<br></br> fun elements like cartoons, games, books, and videos.<br></br>

Through our in-depth workshops, we provide resources that foster social interactions, healthy reactions, <br></br>and forming lasting friendships. We're here to support children, teenagers, and adults as they navigate life's challenges.</p>
      </div>
    </div>
   
    </>
  )
   
};

export default Carousel;
