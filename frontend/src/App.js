// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//nav-bar
import Navbar from './components/Navbar';

//routes
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import Footer from './components/Footer';
import Articlesec from './Pages/Articlesec';
import Sample from './Pages/Sample';
import About from './Pages/About';
import DisplayRev from './Pages/Display_Rev';


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative flex-col min-h-screen overflow-hidden'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/reviews" element={<Reviews/>}/>
            <Route path="/reviews/:id" element={<DisplayRev/>}/>
            <Route path="/articles" element={<Articlesec/>}/>
            <Route path="/sample" element={<Sample/>}/>
            <Route path="/about" element={<About/>}/>
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
