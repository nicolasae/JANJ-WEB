import React from 'react';
import '../../App.css';
import '../../styles/Hero.css'

import video from '../../images/video_intro.mp4'
import VideoGif from '../../images/video_intro.gif'

 function Hero() {
  return (

    <div className="Hero">
      {/* <section id="hero"> */}
        <video autoPlay loop muted  playsInline id='video'>
          <source src={'video_intro.mp4'} type='video/mp4'/>
        </video>
        <div className="centered" > 
        <h1> 
            HOLA BUENAS NOCHES 
        </h1>
        </div>



      {/* </section> */}
    </div>
  );
}

export default Hero


