import React from 'react';
 import {Routes, Route,} from 'react-router-dom'
 import Marking from '../pages/marking/marking'
import Undusty from '../pages/industry/undusty'
 import Servises from '../pages/services/servises'
 import HomePage from '../HomePage'
 import Notfound from '../pages/notfound/notfound'
 


const Loyout = () => {
    return (
        <>
        <Routes> 
            <Route path='/' element={<HomePage/>} />       
            <Route path='/marking' element={<Marking/>} />
            <Route path='/undusty' element={<Undusty/>} />
            <Route path='/servises' element={<Servises/>} />  
            <Route path='*' element={<Notfound/>} />      
        </Routes>
        </>
    );
};

export default Loyout;