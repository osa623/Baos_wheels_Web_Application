// src/Pages/Home.js
import React from 'react';
import Newsection from '../components/Newsection';
import Reviewsection from '../components/Reviewsection';
import Videosection from '../components/Videosection';
import Footer from '../components/Footer';
import NewHeroSection from '../components/NewHeroSection';

const Home = () => {
  return (
    <>
    <div className='flex-grow'>
      <NewHeroSection/>
      < div className='h screen'>
      <Newsection/>
      </div>
      < div className='h screen'>
      <Reviewsection/>
      </div>
      < div>
      <Videosection/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

    </>
  );
};

export default Home;

