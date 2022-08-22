import React from 'react';
import './slide.css'
import Carusel from './carusel/carusel'
 import carusel1 from '../icons/mobile.icons/5.svg'
import carusel2 from '../icons/mobile.icons/6.svg'
import carusel3 from '../icons/mobile.icons/7.svg'
import carusel4 from '../icons/mobile.icons/8.svg'

const Slider = () => {
  return (
    <Carusel>
      <div className="item item-30"><img className="icon" src={carusel1}/></div>
      <div className="item item-2"><img className="icon" src={carusel2}/></div>
      <div className="item item-3"><img className="icon" src={carusel3}/></div>
      <div className="item item-4"><img className="icon" src={carusel4}/></div>
    </Carusel>
  );
};

export default Slider;