import { slide as Menu } from 'react-burger-menu'
import impg from '../burger/ii/Group 1.png'
import "./burger.css"
import React  from 'react'

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <>
      
      <Menu right>
      
        <a id="home" className="menu-item" href="/"><img className="menu-icon" src={impg}/></a>
        <a id="about" className="menu-item" href="/marking">О маркировке</a>
        <a id="contac" className="menu-item" href="/undusty">Отрасли</a>
        <a id="contac" className="menu-item" href="/servises">Услуги</a>
        <a id="contact" className="menu-item" href="/+996505915959">+7 (499) 940-09-90</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="#">info@marka.ru</a>
      </Menu></>
    );
  }
}
export default Burger