import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
         <Loading/>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:id" element={<DisplayRev />} />
            <Route path="/articles" element={<Articlesec />} />
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
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
