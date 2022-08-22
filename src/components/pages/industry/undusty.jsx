import React from 'react';
import bottle from '../marking/icons/otrasl.icon/Vector (1).svg'
import kaplyn from '../marking/icons/otrasl.icon/Group.svg'
import kapsula from '../marking/icons/otrasl.icon/Vector (2).svg'
import tabak from '../marking/icons/otrasl.icon/Group (1).svg'
import sheot from '../marking/icons/otrasl.icon/Vector (3).svg'
import choose from '../marking/icons/otrasl.icon/Vector (4).svg'
import jacket from '../marking/icons/otrasl.icon/Vector (5).svg'
import woter from '../marking/icons/otrasl.icon/Vector (6).svg'
import kaleso from '../marking/icons/otrasl.icon/Vector (7).svg'
import kamera from '../marking/icons/otrasl.icon/video-cameras-video-camera-svgrepo-com 1.svg'
import znak from '../marking/icons/otrasl.icon/2315423 2.svg'
import bud from '../marking/icons/proekt.icons/Vector (1).svg'
import butyl from '../marking/icons/proekt.icons/Vector (6).svg'
import kupsula from '../marking/icons/proekt.icons/Vector (3).svg'
import kupsula2 from '../marking/icons/proekt.icons/Vector (2).svg'
import velo from '../marking/icons/proekt.icons/Vector (4).svg'
import kolyska from '../marking/icons/proekt.icons/Vector (5).svg'
import produkt from '../marking/icons/proekt.icons/product-page-content__img--complex-mark 1.svg'
import images from '../marking/icons/proekt.icons/Group 3 (1).svg'
import images1 from '../marking/icons/icons-01/Ellipse 1.svg'
import images2 from '../marking/icons/icons-01/Ellipse 2.svg'
import images3 from '../marking/icons/icons-01/Ellipse 3.svg'
import images4 from '../marking/icons/icons-01/01.svg'
import images5 from '../marking/icons/icons-01/02.svg'
import images6 from '../marking/icons/icons-01/03.svg'
import images7 from '../marking/icons/icons-01/04.svg'
import images8 from '../marking/icons/icons-01/05.svg'
import images9 from '../marking/icons/icons-01/Vector 5.svg'
import Servises from '../services/servises'
import images25 from '../industry/Новая папка/5.svg'
import images26 from '../industry/Новая папка/6.svg'
import images27 from '../industry/Новая папка/6.svg'
import images28 from '../industry/Новая папка/8.svg'
import images29 from '../industry/Новая папка/9.svg'
import SimpleSlider from '../../slider/carusel/scil'

const Undusty = () => {
    return (   
        <div className="undusty">          
            <div className="contant-2">
            <h2 className="contant-title2">Отрасли</h2>
            <div className="container-2">
              
              <div className="container-card">
                <img  className="card-img" src={bottle}/>
                <p className="card-text milk">Молочная<br/> продукция</p>
              </div>

              <div className="container-card cart1 ">
                <img  className="card-img card2" src={kaplyn}/>
                <p className="card-text milk">Упакованная вода</p>
              </div>

              <div className="container-card ">
                <img  className="card-img card3" src={kapsula}/>
                <p className="card-text milk">Лекарства</p>
              </div>
              

              <div className="container-card ">
                <img  className="card-img card4" src={tabak}/>
                <p className="card-text milk">Табак</p>
              </div>

              <div className="container-card ">
                <img  className="card-img card5" src={sheot}/>
                <p className="card-text milk">Товары легкой промышленности</p>
              </div>

              <div className="container-card ">
                <img  className="card-img card6" src={choose}/>
                <p className="card-text milk">Обувь</p>
              </div>
              <div className="container-card coat">
                <img  className="card-img card7" src={jacket}/>
                <p className="card-text milk">Шубы</p>
              </div>

              <div className="container-card coat">
                <img  className="card-img card8" src={woter}/>
                <p className="card-text milk">Духи и туалетная вода</p>
              </div>
            </div>
            <div className="container-2">
              <div className="container-card perfume">
                <img  className="card-img card7" src={jacket}/>
                <p className="card-text milk">Шубы</p>
              </div>

              <div className="container-card perfume">
                <img  className="card-img card8" src={woter}/>
                <p className="card-text milk">Духи и туалетная вода</p>
              </div>

              <div className="container-card ">
                <img  className="card-img card9" src={kaleso}/>
                <p className="card-text milk">Шины и покрышки</p>
              </div>

              <div className="container-card">
                <img  className="card-img card10" src={kamera}/>
                <p className="card-text milk">Фотоаппараты и видеокамеры</p>
              </div>

              <div className="container-card cart11">
               <div style={{display:"flex"}}>
               <p className="card-text long milk" style={{width:"170px",height:""}}>Не нашли свою отрасль?<br/>
               <br/>
               <br/>
               <br/>
               <br/>
              
               <br/><a className="card-text11 milk" href="#">Оставить заявку</a></p>
                <img  className="card-img card11" src={znak}/>
               </div>                
              </div>            
            </div>
          </div>
             <div className="contant-2">
            <h3 className="card-title12">Пилотные проекты</h3>
              <div className="container-2">
               <div className="container-card">
                <img  className="card-img card12" src={bud}/>
                <p className="card-text milk">БАД</p>
              </div>
              <div className="container-card">
                <img  className="card-img card13" src={butyl}/>
                <p className="card-text milk">Пиво и слабоалкогольные напитки</p>
              </div>

              <div className="container-card">
                <img  className="card-img card14" src={kupsula2}/>
                <p className="card-text milk">Антисептики</p>
              </div>

              <div className="container-card">
                <img  className="card-img card15" src={kupsula}/>
                <p className="card-text milk">Медицинские изделия</p>
              </div>

              <div className="container-card">
                <img  className="card-img card16" src={velo}/>
                <p className="card-text milk">Велосипеды</p>
              </div>

              <div className="container-card">
                <img  className="card-img card17" src={kolyska}/>
                <p className="card-text milk">Кресло-коляски</p>
              </div>
              </div>
          </div>
          <div className="contant-3">
            <h4  className="contant-title4">Программное обеспечение для маркировки </h4>
            <div className="coll" >
            <div>
            <h5 className="card-title13">Система МАРК-СП является “облачной” системой,<br/> что обеспечивает уровень отказоустойчивости не<br/> ниже 99.5% и позволяет: </h5>
            <ul>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
              <li className="card-text1">Система МАРК-СП осуществляет автоматическое</li>
            </ul>
              
            </div>
            <div className="coll" >
            <img className="col-img" src={produkt}/>
            </div>
            </div>
          </div>
          <div className="container-blue">
            <img className="img-blue" src={images}/>
            <p className="text-blue">Система МАРК-СП осуществляет автоматическое информационное взаимодействие с оборудованием,<br/> участвующим в процессе маркировки: печатными устройствами, устройствами валидации и отбраковки,<br/> системами технического зрения, а также с информационной системой ТЕКШЕР для обмена с нею кодами и<br/> отчетами и имеет готовый API для взаимодействия с системами ERP предприятий.</p>
          </div>

          <div style={{display:"flex"}}>
            {/* <div style={{display:"flex"}}>
              <img  className="round1 roundt" src={images1}/>
              <img className="round2 roundt" src={images2}/>
              <img className="round3 roundt" src={images3}/>
              <img className="round4 roundt" src={images4}/>
              
              <div className="round-text roundt">
              <p className="round-t roundt"><a>Формрование заявки на<br/> получение кодов</a></p>
              </div>
            </div> */}

            {/* <div style={{display:"flex"}}>
              <img  className="round5 roundt" src={images1}/>
              <img className="round2 roundt" src={images2}/>
              <img className="round3 roundt" src={images3}/>
              <img className="round4 roundt" src={images5}/>
              
              <div className="round-text roundt">
              <p className="round-t roundt"><a>Отправка выбранных кодов на<br/> печать</a></p>
              </div>
            </div>

          </div>

          <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
              <img  className="round1 roundt" src={images1}/>
              <img className="round2 roundt" src={images2}/>
              <img className="round3 roundt" src={images3}/>
              <img className="round4 roundt" src={images6}/>
              
              <div className="round-text roundt">
              <p className="round-t roundt"><a>Сериализация упаковки</a></p>
              </div>
            </div>

            <div style={{display:"flex"}}>
            
              <img  className="round5 roundt" src={images1}/>
              <img className="round2 roundt" src={images2}/>
              <img className="round3 roundt" src={images3}/>
              <img className="round4 roundt" src={images7}/>
              
              <div className="round-text roundt">
              <p className="round-t roundt"><a>Агрегация</a></p>
              </div>
            </div> */}

          {/* </div>

          <div style={{display:"flex"}}>
            <div style={{display:"flex"}}>
              <img  className="round1 roundt" src={images1}/>
              <img className="round2 roundt" src={images2}/>
              <img className="round3 roundt" src={images3}/>
              <img className="round4 roundt" src={images8}/>
            
              <div className="round-text roundt">
              <p className="round-t roundt"><a>Отправка отчета о произовдстве<br/> оператору  ТЕКШЕР</a></p>
              </div>
            </div>

            <div className="round-tx roundt" >
            <p className="round-tt roundt" ><a className="tt roundt" href="#">Подробнее</a></p>
              <img  className="round55 roundt" src={images9}/>
              
            </div> */}
            <div className="imgggg">
              <div style={{display:"flex"}}>
              <img className="round25" src={images25}/>
              <img className="round26" src={images26}/>
              </div>
              <div style={{display:"flex"}}>
              <img className="round27" src={images27}/>
              <img className="round28" src={images28}/>
              </div>
              <div>
              <img className="round29" src={images29}/>
              
              </div>
            </div>
            
          </div>
          <SimpleSlider/>
          <Servises/>
        </div>
        
    );
};

export default Undusty;