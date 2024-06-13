import { useState } from 'react'
import './App.css'
import Home from './component/home';
import Cart from './component/cart';
import {Routes, Route} from 'react-router-dom';
 import Carousel from './component/carousel';
import Footer from './component/footer';
import ContactUs from './component/ContactUs';
// import Login from '../../github/BigBull/src/component/Login';
import Login from './component/Login'; 
// ayahi par import karne shuru se likunga to suggest kardega path;
import Register from './component/Register';
import FAQ from './component/faq';


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/ho' element={<Home/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      {/* <Route path='/cart' element={<Cart/>}/> */}
      <Route path='/' element={<Carousel/>}/>
       {/* <Route path='/crs' element={<Carousel/>}/>  */}
       <Route path='/foot' element={<Footer/>}/> 
       <Route path='/cont' element={<ContactUs/>} />
       <Route path='/log' element={<Login/>} />
       <Route path='/reg' element={<Register/>} />
    </Routes>
    </>
  )
}

export default App;
