
import React, { useRef, Fragment } from 'react';
import Glide, { Slide } from 'react-glidejs';

import '../../node_modules/react-glidejs/dist/index.css';
import '../styles/transitions.css';
import queenstown from '../images/queenstown.jpg';
import kokatahi from '../images/Kokatahi.jpg';
import mtcook from '../images/Mtcook.jpg';
import video from '../assets/Lake_Mountain_Timelapse.mp4';

function HeroSlider() {
  const gliderRef = useRef(null);

  return (
    <div
      className="App"
      style={{
        background: 'pink',
        width: '100%',
        height: '570px'
        
      }}
    >
      <Glide
        ref={gliderRef}
        throttle={0}
        type="slider"
        // customSlideAnimation={{
        //   timeout: 500,
        //   classNames: 'fade',
        // }}
        perView={1}
        startAt={0}
        // slideClassName="slider__frame"
      >
        
        <Fragment>
          <img src={kokatahi} alt="" style={{height: '570px', width: '100%', objectFit: 'cover'}}></img>
        </Fragment>
        <Fragment>
          <img src={mtcook} alt="" style={{height: '570px', width: '100%', objectFit: 'cover'}}></img>
        </Fragment>
        <Fragment>
          <img src={kokatahi} alt="" style={{height: '570px', width: '100%', objectFit: 'cover'}}></img>
        </Fragment>
        <Fragment>
          <img src={queenstown} alt="" style={{height: '570px', width: '100%', objectFit: 'cover'}}></img>
        </Fragment>
      </Glide>
    </div>
  );
};

export default HeroSlider;
