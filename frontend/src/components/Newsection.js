// src/components/Newsection.js
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';


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
      <div className=' flex flex-col items-center justify-center w-full lgs:h-[20vh] sms:h-[20vh]  bg-primary mds:top-[10vh]  sms:space-y-2 mds:p-6 mds:space-y-1 lgs:space-y-1'>
        <div className='flex lgs:w-[30vw] h-0.5 mds:w-[40vw] sms:w-[50vw] bg-secondary items-start justify-start mx-20' data-aos='fade-right'/>
        <h2 className='lgs:text-7xl text-secondary mds:text-6xl sms:text-5xl text-center font-russoone' data-aos='flip-up'>What's New</h2>
        <div className='flex lgs:w-[30vw] h-0.5 mds:w-[40vw]  sms:w-[50vw] bg-secondary items-end justify-end mx-20'  data-aos='fade-left'/>
      </div>
      <div className='flex justify-center w-full ' data-aos='zoom-in'>
        <div className='flex flex-col items-center justify-center lgs:w-[75vw]'>
          <p className='lgs:text-lg font-kanit lgs:h-auto lgs:w-[60vw] sms:w-[80vw] mds:w-[75vw] sms:text-md text-center justify-center align-middle'
          style={{
            
          }}>
            {''}<span className='text-3xl font-thin'>News</span>{''} Stay Updated with the Latest in the Automotive World. From new model releases and industry trends to expert reviews and technological innovations, our news section has it all. Whether you are a car enthusiast or just curious, explore and stay informed about the future of transportation
          </p>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 lgs:gap-4 lg:p-10 lg:mt-[5vh] md:grid-cols-2 gap-3 p-10'>
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
      <motion.div
       initial={{opacity:0,marginLeft:'-100px'}}
       whileInView={{opacity:1,marginLeft:'0px'}}
       transition={{duration:'1.5', ease:'easeInOut', delay:'0.4'}}
       className='flex flex-row items-center justify-center h-[10vh] mt-[-2vh]'>

        <div className='text-2xl text-baseprimary font-semibold font-russoone'> See more</div>
        <FontAwesomeIcon icon={faArrowRightLong} className='w-10 text-baseprimary'  style={{
          
        }}/>
      </motion.div>
    </div>
  );
};

export default Newsection;
