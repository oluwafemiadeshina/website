import React from 'react';
import  './App.css';
import Navbar from './components/pages/inc/Navbar';
import Home from './components/pages/Home';
import Aboutus from './components/pages/About';
import Contactus from './components/pages/Contact';
import Footer from './components/pages/inc/Footer';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
          
      <Navbar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/contact" element={<Contactus/>} />
      </Routes>
      
      <Footer/>
    </Router>


  );
}

export default App;
