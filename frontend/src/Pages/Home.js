// src/Pages/Home.js
import React from 'react';
import Herosection from '../components/Herosection';
import Newsection from '../components/Newsection';
import Reviewsection from '../components/Reviewsection';
import Videosection from '../components/Videosection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <div className='flex-grow'>
      <Herosection />
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

