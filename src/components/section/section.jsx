import React from 'react';
// import img2 from '../icons/sectionicons/01.svg'
// import img3 from '../icons/sectionicons/Vector 1.svg'
// import img4 from '../icons/sectionicons/02.svg'
// import img5 from '../icons/sectionicons/Vector 2.svg'
// import img11 from '../icons/sectionicons/Vector 4.svg'
// import img6 from '../icons/sectionicons/03.svg'
// import img7 from '../icons/sectionicons/Vector 3.svg'
import img8 from '../icons/sectionicons/Vector 5.svg'
import img9 from '../icons/sectionicons/Vector 6.svg'

import img2 from '../../components/pages/marking/icons/icons-01/Group 12.svg'
import imgd from '../../components/pages/marking/icons/icons-01/01.svg'
import imgd1 from '../../components/pages/marking/icons/gorizont/02.svg'
import imgd2 from '../../components/pages/marking/icons/gorizont/03.svg'
import imgd3 from '../../components/pages/marking/icons/gorizont/Vector 1.svg'
import imgd4 from '../../components/pages/marking/icons/gorizont/Vector 3.svg'
import imgd5 from '../../components/pages/marking/icons/gorizont/Vector 4.svg'




const Section = () => {
    return (
        <div>
            {/* <div className="section1">
       <div className="section-img1">
          <img src={img2} /><br/>
          <img className="img" src={img3} /><br/>
          <img src={img4} /><br/>
          <img className="img" src={img5} />
          <img className="img1" src={img11} /><br/>
          <img src={img6} /><br/>
          <img className="img" src={img7} /><br/>
       </div>
       <div>
          <h1 className="marking-title1">Комплексные решения<br/> для цифровой маркировки</h1>
          <p className="section-text1">Полноценное решение для работы с системой маркировки:<br/>
               от оборудования производственных линий и отдельных<br/> 
               сервисов до комплексного сопровождения</p>
               <button className="section-btn1"><a className="btn1"href="#">Получить предложение</a></button>
       </div>
       <div>
       <img className="img-arrow" src={img8} />
       <img className="img-arrow1" src={img9} />
       </div>
      </div> */}
      <div className="section1 sectioff">
       <div className="section-img1">
       <img src={img2} /><br/>
          
       </div>
       <div>
          <h1 className="marking-title1">Комплексные решения<br/> для цифровой маркировки</h1>
          <p className="section-text1">Полноценное решение для работы с системой маркировки:<br/>
               от оборудования производственных линий и отдельных<br/> 
               сервисов до комплексного сопровождения</p>
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
       
               {/* <div className="arrow">
               <img className="img-arrow11" src={img9} />
               <img className="img-arrow1" src={img8} />
       
       </div>  */}
       </div>
      
       
      </div>
            
        </div>
    );
};

export default Section;