
import React from 'react';
import {useEffect, useState, cloneElement,Children} from 'react';
import './carusel.css'

const PAGE_WIDTH = 1050;
const Carusel = ({children}) =>{
   const [pages, setPages] = useState([])
   const [offset, setOffset] = useState([0])
   const handleOneArowClick = () =>{
    setOffset ((currentOffset) =>{
      const newOffset = currentOffset - PAGE_WIDTH
      console.log(newOffset)
      return Math.max(newOffset, 0)
    })
    console.log('handleOneArowClick')
    
   }
   const handleTwoArowClick = () =>{
    setOffset ((currentOffset) =>{
      const newOffset = currentOffset - 740
      
      console.log(newOffset)
      return Math.min(newOffset)
    })
    console.log('handleTwoArowClick')
   }
   const handleThirdArowClick = () =>{
    setOffset ((currentOffset) =>{
      const newOffset = currentOffset - 740
      console.log(newOffset)
      return newOffset
    })
    console.log('handleThirdArowClick')
   }
   const handleFourthArowClick = () =>{
    setOffset ((currentOffset) =>{
      const newOffset = currentOffset - 740
      console.log(newOffset)
      return Math.max(newOffset)
    })
    console.log('handleFourthArowClick')
   }
   useEffect(() =>{
    setPages(
      Children.map(children,(child) =>{
      return cloneElement(child,{
        style: {
          height:'87%',
          minWidth:'80%',
          maxWidth:'100%',
        }
      })
    }))
  }, [])
return (<>
    <div className="main-containerpp">
      <div className="window">
        <div className="all-pages-container"
        style={{ 
          transform: `translate(${offset}px)`
        }}
        >{pages}</div>
      </div>
      
    </div>
   <div className="main-ar-btn">
   <button className="arowwww" onClick={handleOneArowClick}></button>
    <button className="arowwww" onClick={handleTwoArowClick}></button>
    <button className="arowwww" onClick={handleThirdArowClick}></button>
    <button className="arowwww" onClick={handleFourthArowClick}></button>
   </div>
    </>
)
}
export default Carusel;