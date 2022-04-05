import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Members from './Members';
import Navbar from './Navbar';
import {Navigate, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/members' element={<Members />}/>

        <Route path='/' element={<Navigate to={'/home'} />} />
      </Routes>
      
    </div>
  );
}

export default App;
