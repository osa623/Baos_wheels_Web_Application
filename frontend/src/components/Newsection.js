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
          
          const response = await axios.get("https://admin.baoswheels.com/api/article/get");
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
      <div className=' flex flex-col items-center justify-center w-full lgs:h-[20vh] lgs:mb-5 sms:h-[20vh]  bg-primary mds:top-[10vh]  sms:space-y-2 mds:p-6 mds:space-y-1 lgs:space-y-1' data-aos='fade-left'>
        <h2 className='flex flex-col lgs:text-7xl text-baseextra4 mds:text-6xl sms:text-5xl w-auto font-extrabold p-1 text-center font-russoone overflow-hidden'>Auto Insights
          {''}<div className='flex bg-secondary will-change-auto h-[0.15rem] mt-1' data-aos="fade-left"/>
        </h2>
      </div>
      <div className='flex justify-center w-full'>
        <div className='flex flex-col items-center justify-center lgs:w-[75vw]'>
          <p className='lgs:text-lg font-ibmplexsans lgs:h-auto lgs:w-[50vw] sms:w-[80vw] mds:w-[75vw] sms:text-md mds:text-sm text-center justify-center align-middle'
          style={{
             fontWeight:'300'
          }} data-aos="zoom-in">
            Stay Updated with the Latest in the Automotive World. From new model releases and industry trends to expert reviews and technological innovations. Whether you are a car enthusiast or just curious, explore and stay informed about the future of transportation
          </p>
        </div>
      </div>
      <div className='grid lgs:grid-cols-4 sms:grid-cols-2 lgs:gap-4 lgs:p-10 sms:gap-4 lgs:mt-[5vh] mds:grid-cols-2 mds:gap-3 p-10'>
        {Articles.slice(0,4).map((article) => (
          <div key={article.id} onClick={(() => handleViewArticle(article._id))} className='group hidden mds:flex lgs:flex flex-col lgs:h-[20rem] mds:h-[16rem] items-center border-2 border-gray-200 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-2xl p-0' data-aos='fade-up'>
            <div className='bg-gray-700 lgs:h-[10rem] mds:h-[8rem] w-auto rounded-xl overflow-hidden'>
              <img src={article.images[1]} alt={article.title} className='rounded-t-xl scale-125 transition-transform ease-in-out hover:scale-110'/>
            </div>
            <div className='flex flex-col items-start justify-start p-2 bg-transparent space-y-2 '>
                <div className='flex h-auto lgs:w-auto mt-2 items-start bg-transparent'>
                <h3 className='text-secondary font-ibmplexsans text-start mds:text-lg lgs:text-xl' style={{fontWeight:'500'}}>{article.title}</h3>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <div
                      className="bg-baseprimary h-[0.15rem] lgs:w-[8rem] mds:w-[10rem] group-hover:w-[15rem] transition-all duration-3000 ease-in-out rounded-full"
                    
                    />
                  </div>

                <div className='flex h-auto lgs:w-[20vw] bg-transparent'>
                <p className=' text-secondary text-start font-normal font-ibmplexsans text-xs mb-2'>{article.summary}</p>
                </div>
            </div>
          </div>
        ))}

        {Articles.map((article) => (
          <div key={article.id} onClick={(() => handleViewArticle(article._id))} className='hidden sms:flex flex-col overflow-hidden h-[10rem] items-center cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-xl p-0' data-aos='fade-up'>
            <div className='bg-primary w-auto h-[5rem]  overflow-hidden'>
              <img src={article.images[1]} alt={article.title} className='rounded-xl scale-125  transition-transform duration-300 ease-in-out hover:scale-110'/>
            </div>


            <div className='flex flex-col justify-start w-full items-start h-auto mt-4'>
                <h3 className='flex flex-col text-baseextra4 sms:pl-1 sms:pt-1 overflow-hidden text-start w-auto font-ibmplexsans ' style={{fontSize:'0.6rem'}}>{article.category}
                  <div className='bg-baseprimary h-[0.10rem] will-change-auto'/>
                </h3>
                <h3 className='text-baseextra4 sms:pl-1 text-start w-full font-ibmplexsans  'style={{fontSize:'0.78rem' ,fontWeight:'500'}}>{article.title}</h3>
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
        <div className='text-2xl text-baseprimary font-semibold font-ibmplexsans sms:text-xl'>{''}
          <Link to={`/articles`} className='font-normal'>See more</Link></div>
        <FontAwesomeIcon icon={faAngleDoubleRight} className='w-10 text-baseprimary'  style={{
          
        }}/>
      </div>   
      </motion.div>
    </div>
  );
};

export default Newsection;
