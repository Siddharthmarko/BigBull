import { useState } from 'react'
import './App.css'
// import Home from './component/home';
import New from './component/new';
import {Routes, Route} from 'react-router-dom';


function App() {
  
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/' element={<New/>}/>
    </Routes>
    </>
  )
}

export default App;
