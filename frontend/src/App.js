import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

// Navbar and Footer components

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages

import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
import Articlesec from './Pages/Articlesec';
import Sample from './Pages/Sample';
import About from './Pages/About';
import DisplayRev from './Pages/Display_Rev';
import Loading from './oth/Loading';
import DisplayArc from './Pages/Display_Arc';
import Brands from './Pages/Brands';
import BodyStyle from './Pages/BodyStyle';

// Loading component

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative flex-col min-h-screen overflow-hidden">
      <Navbar />
      <div className="flex-grow">
        {isLoading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:id" element={<DisplayRev />} />
            <Route path="/reviews/brand/:brandname" element={<Brands />} />
            <Route path="/reviews/bodystyle/:category" element={<BodyStyle />} />
            <Route path="/articles" element={<Articlesec />} />
            <Route path="/articles/:id" element={<DisplayArc />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </div>
      <Footer />
    </div>
  );
};

const App = () => (
  <HashRouter>
    <AppContent />
  </HashRouter>
);

export default App;
