// src/Pages/Home.js
import React, { useEffect } from 'react';
import Newsection from '../components/Newsection';
import Reviewsection from '../components/Reviewsection';
import Videosection from '../components/Videosection';
import NewHeroSection from '../components/NewHeroSection';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
      < div className='sms:pt-10 mds:pt-10'>
      <Videosection/>
      </div>
    </div>

    </>
  );
};

export default Home;

