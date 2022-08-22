import React from 'react';

import img from '../icons/logo.svg'
import { NavLink } from 'react-router-dom'
import img1 from '../header/iconsh/Vector.svg'
import img2 from '../header/iconsh/cancel.png'
import img3 from '../header/iconsh/menu.png'
 import Burger from '../../components/burger/bur'





// const  burger = document.querySelector(".burger");
// burger.addEventListener("click",() => {
// burger.classList.toggle(".burger-active")});
 

const Header = () => {
   
      
   
    return (
        <div className="header">
         <div className="wrapper">
         <div className="header-nav">
           <NavLink to={"/"} className="logo-img"><img className="logo" src={img}/></NavLink>            
            <ul  style={{display:"flex"}}>
                     <li className="header-text" >
                        <NavLink className="header-text" to={"/home"}></NavLink>
                     </li>
                     <li className="header-text">
                        <NavLink className="header-text" to={"/marking"}>О маркировке</NavLink>
                     </li>
                     <li className="header-text">
                        <NavLink className="header-text" to={"/undusty"}>Отрасли</NavLink>
                     </li>
                     <li className="header-text">
                        <NavLink className="header-text" to={"/servises"}>Услуги</NavLink>
                     </li>
                </ul>   
                <div> 
                  <NavLink to={"#"} className="header-text number">+79286586956298</NavLink> 
                  
                </div> 
                
                 <div className="nav-img">
                   <img src={img1}/> 
                    <Burger/> 
                 </div>
                 
                
                  <nav className="manu-body" data-nav>
                  <ul className="manu-list">
                     <li className="manu-item"><a className="manu-link" href="#">О маркировке</a></li>
                     <li className="manu-item"><a className="manu-link" href="#">Отрасли</a></li>
                     <li className="manu-item"><a className="manu-link" href="#">Услуги</a></li>
                     <li className="manu-item"><a className="manu-link" href="#">+79286586956298</a></li>
                     <li className="manu-item"><a className="manu-link" href="#">info@marka.ru</a></li>
                  </ul>                 
                 </nav>
                 <button className="manu-icon" data-burger aria-label="открыть меню" aria-expanded="false">
                  <span className="burger-line "></span>
                  <span className="burger-line "></span>
                  <span className="burger-line "></span>
                 </button>
          </div>
         </div>  
        </div>
    );
};

export default Header;