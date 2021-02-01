
import React, { useRef, Fragment } from 'react';
import Glide, { Slide } from 'react-glidejs';

import 'react-glidejs/dist/index.css';
import '../styles/transitions.css';

function HeroSlider() {
  const gliderRef = useRef(null);

  return (
    <div
      className="App"
      style={{
        background: 'blue',
      }}
    >
      <Glide
        ref={gliderRef}
        throttle={0}
        type="slider"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
        }}
        peek={{
          before: 500,
          after: 500,
        }}
        perView={1}
        startAt={3}
        slideClassName="slider__frame"
        focusAt="center"
      >
        <Fragment>
          1
        </Fragment>
        <Fragment>
          2
        </Fragment>
        <Fragment>
          3
        </Fragment>
        <Fragment>
          4
        </Fragment>
        <Fragment>
          5
        </Fragment>
        <Fragment>
          6
        </Fragment>
        <Fragment>
          7
        </Fragment>
        <Fragment>
          8
        </Fragment>
        <Fragment>
          9
        </Fragment>
        <Fragment>
          10
        </Fragment>
        <Fragment>
          11
        </Fragment>
        <Fragment>
          12
        </Fragment>
        <Fragment>
          13
        </Fragment>
        <Fragment>
          14
        </Fragment>
      </Glide>
    </div>
  );
};

export default HeroSlider;
