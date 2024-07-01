// src/components/Newsection.js
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Mock data for demonstration. Replace this with your data fetching logic.
const articles = [
  { id: 1, title: 'wrvsrsers', author: 'baos_623', date: 'Jan 8, 2024', category: 'Uncategorized', content: 'revtsesetdsbdfxdbfxdf' },
  { id: 2, title: 'ersefsedf', author: 'author2', date: 'Jan 8, 2024', category: '', content: '' },
  { id: 3, title: 'rgdgfsdxz', author: '', date: 'Jan 8, 2024', category: '', content: '' },
  { id: 4, title: 'rfrfgsfs', author: '', date: 'Jan 8, 2024', category: '', content: '' },
  { id: 5, title: 'older article', author: '', date: 'Jan 7, 2024', category: '', content: '' },
];

const Newsection = () => {
  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    const sortedArticles = articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    setLatestArticles(sortedArticles.slice(0, 4));

    // Initialize AOS
    Aos.init({
      duration: 2000,
      once: false,
      mirror: true,
    });

    // Refresh AOS on component mount and update
    Aos.refresh();
  }, []);

  return (
    <div className='relative h-auto w-auto bg-primary'>
      <div className='hidden md:flex flex-col items-center justify-center w-full h-[30vh] bg-primary top-[5vh]'>
        <div className='flex w-[30vw] h-0.5 bg-secondary items-start justify-start mx-20' data-aos='fade-right'/>
        <h2 className='text-6xl text-secondary font-russoone' data-aos='flip-up'>What's New</h2>
        <div className='flex w-[30vw] h-0.5 bg-secondary items-end justify-end mx-20'  data-aos='fade-left'/>
      </div>
      <div className='flex justify-center w-full mt-[-5vh]' data-aos='zoom-in'>
        <div className='flex flex-col items-center justify-center w-[75vw]'>
          <h2 className='text-m font-kanit h-[5vh] w-[60vw] text-center justify-center align-middle'
          style={{
            fontWeight:500
          }}>
            News Stay Updated with the Latest in the Automotive World. From new model releases and industry trends to expert reviews and technological innovations, our news section has it all. Whether you are a car enthusiast or just curious, explore and stay informed about the future of transportation
          </h2>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4 p-10 mt-[5vh]'>
        {latestArticles.map((article) => (
          <div key={article.id} className='bg-basesecondary rounded-xl p-0' data-aos='fade-right'>
            <div className='bg-gray-700 h-40 w-auto mb-10 rounded-t-lg'></div> {/* Placeholder for image */}
            <div className='text-secondary text-sm mb-2 pl-4'>{article.category}</div>
            <h3 className='text-white text-xl mb-2 pl-4'>{article.title}</h3>
            <div className='text-gray-400 text-sm mb-2 pl-4'>
              <span>{article.author}</span> <span>{article.date}</span>
            </div>
            <p className='text-gray-300 pl-4 mb-2'>{article.content}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center h-[10vh] mt-[-2vh]'>
        <div className='text-2xl text-baseprimary font-semibold font-russoone'> See more</div>
      </div>
    </div>
  );
};

export default Newsection;
