import React from 'react';
import '../../App.css';

import backgroundVideo from '../../images/video_intro.mp4'

export default function Inicio() {
  return (
    <>
      <video autoplay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4'/>
      </video>

    </>
  );
}