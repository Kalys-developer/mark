import React from 'react';
import images17 from '../../components/pages/marking/icons/icons-01/post-582862-0-90359700-1584336831 1.svg'
import { NavLink} from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
            <div>
              <h5 className="footer-title">
                <NavLink className="footer-title" to='/'>Главная</NavLink>
                </h5>
              <ul>
                <li className="footer_item face">О маркировке</li>
                <li className="footer_item">Отрасли</li>
                <li className="footer_item">Услуги</li>
              </ul>
            </div>

            <div>
              <h5 className="footer-title title2">Социальные сети</h5>
              <ul>
                <li className="footer_itemm">Instagram</li>
                <li className="footer_itemm ">Facebook</li>
                <li className="footer_itemm">Telegram</li>
              </ul>
              
            </div>

            <div className="title3">
              <p ><a className="footer-title title3" href="#">+7 (499) 940-09-90</a></p>
              <a className="title4" href="#">info@marka.ru</a>               
            </div>
          </div>

          <div>
          <div className="title33">
              <p ><a className="footer-title title33" href="#">+7 (499) 940-09-90</a></p>
              <a className="title44" href="#">info@marka.ru</a>               
            </div>
          </div>
          <img className="footer_img" src={images17}/>
              <p className="footer-bottom">Разработано в Oracle Digital</p>
        </div>
    );
};

export default Footer;