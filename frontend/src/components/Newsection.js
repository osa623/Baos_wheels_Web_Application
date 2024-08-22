// src/components/Newsection.js


import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




const Newsection = () => {
  const [Articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

      const fetchArticles = async () => {
          
        try {
          
          const response = await axios.get("http://localhost:5000/api/articles/get");
          setArticles(response.data);

        } catch (error) {
          console.log("Data fetching is not working properly");
        }

      };

    // Initialize AOS
    Aos.init({
      duration: 2000,
      once: false,
      mirror: true,
    });

    // Refresh AOS on component mount and update
    Aos.refresh();

  fetchArticles();

  }, []);

  const handleViewArticle = (article_id) => {
      navigate(`/articles/${article_id}`)
  }

  return (
    <div className='relative h-auto w-auto bg-primary'>
      <div className=' flex flex-col items-center justify-center w-full lgs:h-[20vh] lgs:mb-5 sms:h-[20vh]  bg-primary mds:top-[10vh]  sms:space-y-2 mds:p-6 mds:space-y-1 lgs:space-y-1'>
        <div className='flex lgs:w-[30vw] h-0.5 mds:w-[40vw] sms:w-[50vw] bg-secondary items-start justify-start mx-20'/>
        <h2 className='lgs:text-7xl text-baseextra4 mds:text-6xl sms:text-5xl text-center font-russoone'>Auto Insights</h2>
        <div className='flex lgs:w-[30vw] h-0.5 mds:w-[40vw]  sms:w-[50vw] bg-secondary items-end justify-end mx-20'/>
      </div>
      <div className='flex justify-center w-full'>
        <div className='flex flex-col items-center justify-center lgs:w-[75vw]'>
          <p className='lgs:text-lg font-ibmplexsans lgs:h-auto lgs:w-[50vw] sms:w-[80vw] mds:w-[75vw] sms:text-md text-center justify-center align-middle'
          style={{
            
          }} >
            {''}Stay Updated with the Latest in the Automotive World. From new model releases and industry trends to expert reviews and technological innovations. Whether you are a car enthusiast or just curious, explore and stay informed about the future of transportation
          </p>
        </div>
      </div>
      <div className='grid lgs:grid-cols-4 sms:grid-cols-1 lgs:gap-4 lgs:p-10 lgs:mt-[5vh] mds:grid-cols-2 mds:gap-3 p-10'>
        {Articles.map((article) => (
          <div key={article.id} onClick={(() => handleViewArticle(article._id))} className='hidden mds:flex lgs:flex flex-col h-auto items-center border-2 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-xl p-0' data-aos='fade-right'>
            <div className='bg-gray-700 lgs:h-auto w-auto rounded-xl overflow-hidden'>
              <img src={article.images[0]} alt={article.title} className='rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-110'/>
            </div>
            <div className='flex h-auto lgs:w-auto mt-2  p-2 rounded-t-xl bg-basesecondary'>
            <h3 className='text-secondary font-thin font-russoone sms:text-lg lgs:text-xl'>{article.title}</h3>
            </div>
            <div className='flex h-auto lgs:w-[20vw] lgs:p-2 rounded-t-xl bg-baseextra4'>
            <p className=' text-primary text-center font-thin font-ibmplexsans lgs:text-sm mb-2'>{article.summary}</p>
            </div>
          </div>
        ))}

        {Articles.map((article) => (
          <div key={article.id} onClick={(() => handleViewArticle(article._id))} className='hidden sms:flex h-auto items-center border-2 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-xl p-0' data-aos='fade-right'>
            <div className='bg-primary w-auto rounded-xl border-4 overflow-hidden p-5'>
              <img src={article.images[0]} alt={article.title} className='rounded-xl  transition-transform duration-300 ease-in-out hover:scale-110'/>
            </div>
            <div className='flex h-auto lgs:w-auto mb-2rounded-b-x bg-primary p-2'>
            <h3 className='text-baseextra4 text-start p-2 font-ibmplexsans sms:text-xl'>{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <motion.div
       initial={{opacity:0,marginLeft:'-100px'}}
       whileInView={{opacity:1,marginLeft:'0px'}}
       transition={{duration:'1.5', ease:'easeInOut', delay:'0.4'}}
       className='flex flex-row items-center justify-center h-[10vh]'>

       <div className='flex w-auto h-auto items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'>
        <div className='text-2xl text-baseprimary font-semibold font-russoone'>{''}
          <Link to={`/articles`}>See more</Link></div>
        <FontAwesomeIcon icon={faAngleDoubleRight} className='w-10 text-baseprimary'  style={{
          
        }}/>
      </div>   
      </motion.div>
    </div>
  );
};

export default Newsection;
