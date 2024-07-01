// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/reviews" element={<Reviews/>}/>
          </Routes>
        </div>
        <div className='relative flex-col'>
        <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
