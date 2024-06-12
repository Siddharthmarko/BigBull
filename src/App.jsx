import { useState } from 'react'
import './App.css'
// import Home from './component/home';
// import Cart from './component/cart';
// import {Routes, Route} from 'react-router-dom';
// import Carousel from './component/carousel';
import Footer from './component/footer';


function App() {
  
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path='/' element={<Cart/>}/> */}
       {/* <Route path='/crs' element={<Carousel/>}/>  */}
       <Route path='/foot' element={<Footer/>}/> 
    </Routes>
    </>
  )
}

export default App;
