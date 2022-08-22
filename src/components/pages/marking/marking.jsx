import React from 'react';
import img from '../marking/icons/icons-01/1 1.svg'
import img1 from '../marking/icons/icons-01/Group 1.svg'
import img2 from '../../pages/marking/icons/icons-01/Group 12.svg'
import img8 from '../../icons/sectionicons/Vector 5.svg'
import img9 from '../../../components/icons/sectionicons/Vector 6.svg'
import laptop from '../marking/icons/complex-mark 1.svg'
import mark from '../marking/icons/7 3.svg'
import factory from '../marking/icons/factory .svg'
import impor from '../marking/icons/импорт.svg'
import otgruzka from '../marking/icons/отгрузка.svg'
import priemka from '../marking/icons/приемка.svg'
import hranenie from '../marking/icons/хранение.svg'
import { NavLink } from 'react-router-dom'
import Undusty from '../industry/undusty'
import Header from "../../header/header"
import imgd from '../marking/icons/icons-01/01.svg'
import imgd1 from '../marking/icons/gorizont/02.svg'
import imgd2 from '../marking/icons/gorizont/03.svg'
import imgd3 from '../marking/icons/gorizont/Vector 1.svg'
import imgd4 from '../marking/icons/gorizont/Vector 3.svg'
import imgd5 from '../marking/icons/gorizont/Vector 4.svg'










const Marking = () => {
    return (
        <div className="marking">
        <Header/>
        
        <div className="marking">  
        <div className="section1">
       <div className="section-img1">
       <img src={img2} /><br/>
          
       </div>
       <div>
          <div className="section-arowimg">
          <div>
          <h1 className="marking-title1">Комплексные решения<br/> для цифровой маркировки</h1>
          <p className="section-text1">Полноценное решение для работы с системой маркировки:<br/>
               от оборудования производственных линий и отдельных<br/> 
               сервисов до комплексного сопровождения</p>

          </div>
          <div className="arrow">
               <img className="img-arrow11" src={img9} />
               <img className="img-arrow1" src={img8} />
       
       </div>
          </div>
               <div className="section-img2">
                 <img className="section-i1" src={imgd}/>
                 <img className="section-i4" src={imgd3}/>
                 <img className="section-i2" src={imgd1}/>
                 <img className="section-i5" src={imgd4}/>
                 <img className="section-i6" src={imgd5}/>
                 <img className="section-i3" src={imgd2}/>                 
                 
                 <img className="section-i7" src={imgd3}/>
               </div>
               <button className="section-btn1"><a className="btn1 "href="#">Получить предложение</a></button>
       
               
       </div>
      
       
      </div>
      
      <div className="contant">
      <div className="container">
          
          <h2 className="contant-title">Надежные технологии цифровой<br/> маркировки</h2>  
          </div>
      <div className="container1">
      <img className="mark" src={mark}/><p className="contant-text1"><a className="contant-text" href="#">Маркировка и агрегация</a></p>
          <img className="mark" src={mark}/><p className="contant-text1"><a className="contant-text" href="#">Идентификация</a></p>
      </div>
      <div className="container1">
      <img className="mark" src={mark}/><p className="contant-text1"><a className="contant-text" href="#">Аутентификация</a></p>
      <img className="mark text-mark" src={mark}/><p className="contant-text1 "><a className="contant-text" href="#">Прослеживание и контроль поставок</a></p>
          
      </div>
      <img className="contant-img" src={laptop}/>
      </div>
    <div className="container-wite witer">
    <div className="contant-wite wite1 factory">
      <img src={factory} />
      <h3 className="contant-wite-title factory">Производство</h3>
      <p className="contant-wite-text factory">Заказ кодов из отчета, наглядный<br/> редактор этикеток, ввод в оборот в<br/> 1 клик</p>

    </div>

    <div className="contant-wite wite2 ">
      <img src={impor} />
      <h3 className="contant-wite-title factory">Импорт</h3>
      <p className="contant-wite-text factory">Заказ кодов на весь контракт, отправка этикеток экспортеру, контроль поставок по заказу.</p>

    </div>

    <div className="contant-wite wite3">
      <img src={otgruzka} />
      <h3 className="contant-wite-title factory">Отгрузка</h3>
      <p className="contant-wite-text factory">Добавление кодов в УПД, проверка перед отправкой, создание транспортных упаковок.</p>

    </div>
    </div>

    <div className="container-wite witer1">
    <div className="contant-wite wite4">
      <img src={priemka} />
      <h3 className="contant-wite-title factory">Приемка</h3>
      <p className="contant-wite-text factory">Сверка кодов на товарах и в УПД по системе “Честный знак”, загрузка УПД в систему учета.</p>

    </div>

    <div className="contant-wite wite5">
      <img src={hranenie} />
      <h3 className="contant-wite-title factory">Хранение</h3>
      <p className="contant-wite-text factory">Покодовая инвентаризация, списания, перемещение между складами</p>

    </div>

    <div className="contant-wite wite6">
      <img className="img-wite1" src={img} />
      <p className="contant-wite-text textt1 factory">Оставить заявку</p>
      <a className="textt123" href="#">Получить предложение</a>
    </div>
    </div> 
   <Undusty/>
    
  </div>
        </div>
    );
};

export default Marking;