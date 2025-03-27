import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Navbar and Footer components

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages

//import Reviews from './Pages/Reviews';
//import Home from './Pages/Home';
//import Articlesec from './Pages/Articlesec';
//import Sample from './Pages/Sample';
//import About from './Pages/About';
//import DisplayRev from './Pages/Display_Rev';
//import DisplayArc from './Pages/Display_Arc';
//import Brands from './Pages/Brands';
//import BodyStyle from './Pages/BodyStyle';

import Temp from './Pages/temp';
import Loading from './oth/Loading';
import Welcome from './oth/welcome'; 

const AppContent = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Display the welcome screen for 3 seconds initially
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000); // Show welcome page for 3 seconds

    return () => clearTimeout(welcomeTimer);
  }, []);

  useEffect(() => {
    
    if (!showWelcome) {
      setIsLoading(true);

      const loadingTimer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(loadingTimer);
    }
  }, [location, showWelcome]);

  return (
    <div className="relative flex-col min-h-screen overflow-hidden">
      {showWelcome ? (
        <Welcome />
      ) : (
        <>
        


          <div className="flex-grow">
            {isLoading ? (
              <Loading />
            ) : (
              <Routes>
              <Route path="/" element={<Temp />} />
              </Routes>
              
            )}
          </div>


        </>
      )}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
