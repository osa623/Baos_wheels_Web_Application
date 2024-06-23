// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path="/home" element={<Home />} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
