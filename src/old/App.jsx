import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import Contact from './componenets/Contact';
// import NewContact from './componenets/NewContact';
import ContactUs from './componenets/ContactUs';
import Register from './componenets/Register';
import Login from './componenets/Login';
// import Design from './components/Design';



function App() {

  return (

    <>
     <Routes>
      
     {/* <Route path="/Contact" element={<Contact />} />
     <Route path="/Contact-form" element={<NewContact />} /> */}
     <Route path="/" element={<ContactUs/>} />
     <Route path="/Register" element={<Register/>} />
     <Route path="/Login" element={<Login/>} />
     {/* <Route path="/Design" element={<Design/>} /> */}
      </Routes> 
     
     
    </>
  )
}

export default App;
