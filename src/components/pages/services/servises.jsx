import React from 'react';
import images10 from '../marking/icons/icons-01/complex-mark__cta 1.svg'
import images11 from '../marking/icons/icons-01/d45e06adf2818461c7747cba0fa8d3fd 1.svg'
import images12 from '../marking/icons/icons-01/8b72324263f89e97d41d0bf9b9098986 1.svg'
import images13 from '../marking/icons/icons-01/9de7c7291f83230b19f73efc4f56c89c 1.svg'
import images14 from '../marking/icons/icons-01/acdd7a7bc3f127a7dbc6df0b0f1a5bc6 1.svg'
import images15 from '../marking/icons/icons-01/4c25a15648c14763dac7f63ee753ec2a 1.svg'
import images16 from '../marking/icons/icons-01/a9e6770d61ae7dcdf7b63ed5692343d2 1.svg'
import Footer from '../../footer/footer'


const Servises = () => {
    return (
      
        <div>
           
          <div className="main-container"> 
            <div>
              <h3 className="main-title">Мы всегда готовы вам помочь</h3>
              <p className="main-text" >Оставьте  свой номер, если возникли вопросы. 
                Мы перезвоним и поможем со всем разобраться</p>
                <button className="main-btn" type="button"><a className="main-btnn" href="#">Отправить заявку</a></button>
            </div>
            <div>
              <img className="main-img" src={images10}/>
            </div>
          </div>
          <div className="container5">
            <h3 className="main-title2">Оборудование для маркировки</h3>
            <div className="stanok" style={{display:"flex"}}>
              <p className="stanok-text">Маркировка на таможенных складах и СВХ</p>
              <img className="stan" src={images11}/>
            </div>
          </div>
          <div className="container6-1">
          <div className="container6" >
              <div className="">
              <h5 className="stanok-text1"><b/>Высокоскоростная маркировка<br/> пива и воды</h5>
               </div>
              <div className="container6-2">
              <p className="stanok-text2">Автоматизированная система маркировки товаров на высокоскоростных линиях</p>
              <img className="img-responsive" src={images12}/>
              </div>
              
            </div>

            <div className="container6" >
              <div>
                <h5 className="stanok-text1"> <b/>Готовый комплекс для маркировки</h5>              
              </div>
              <div className="container6-2">
              <p className="stanok-text2">Ультраскоростная станция печати с возможностью верификации кодов DataMatrix. </p>
              <img className="img-responsiv" src={images13}/>
              </div>
            </div>
          </div>
          <div className="container7" style={{}}>
            <div className="row">
              <h5 className="row-title">Решение для типографий</h5>
              <div className="row5">
              <p className="row-text">Оборудование для маркировки товаров на площадках типографий и производителей упаковки</p>
              <img className="row-img" src={images14} />
              </div>
            </div>

            <div className="row" >
              <h5 className="row-title">Решение для малого бизнеса</h5>
              <div className="row5">
              <p className="row-text">Маркировка пива, воды, молочных<br/> товаров</p>
              <img className="row-img1" src={images15} />
              </div>
            </div>

            <div className="row row1" >
              <h5 className="row-title">Этикетки честный знак</h5>
              <div className="row5">
              <p className="row-text">Печать кодов Честный знак на Этикетах</p>
              <img className="row-img2"  src={images16} />
              </div>
            </div>
          </div>
          <div>
            <button className="btn3"><a className="btn4" href="#">Получить предложение</a></button>
            <img  />
          </div>
          <Footer/>
            
        </div>
    );
};

export default Servises;