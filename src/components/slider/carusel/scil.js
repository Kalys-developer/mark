import React, { Component } from "react";
import Slider from "react-slick";
import './carusel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carusel1 from '../../icons/mobile.icons/5.svg'
import carusel2 from '../../icons/mobile.icons/6.svg'
import carusel3 from '../../icons/mobile.icons/7.svg'
import carusel4 from '../../icons/mobile.icons/8.svg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <h3><img className="icon" src={carusel1}/></h3>
          </div>
          <div>
            <h3><img className="icon" src={carusel2}/></h3>
          </div>
          <div>
            <h3><img className="icon" src={carusel3}/></h3>
          </div>
          <div>
            <h3><img className="icon" src={carusel4}/></h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}