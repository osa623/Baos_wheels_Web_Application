import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
//import {motion} from 'framer-motion';

const Articlesec = () => {

const [articles, setArticles] = useState([]);  

//all the apis


const fetchArticles = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/articles/get");
        setArticles(response.data);
        
    } catch (error) {
        console.error("Error Fetching Articles:", error);        
    }
};  


useEffect(()=>{
    fetchArticles();
    Aos.init(
        {
            duration:'2000'
        }
    );


 
},);

  return (
    <div className='relative h-auto w-auto'>

      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start sms:pt-20 lgs:space-y-2'>

            <div className='hidden mds:flex lgs:flex h-[10vh] bg-primary w-full'/>
         
              <div className='flex flex-col sms:h-[15vh] w-full items-center lgs: justify-center sms:pt-10 lgs:pt-5'>
                    <div className='flex mds:w-[40vw] sms:w-[40vw] lgs:w-[40vw] h-0.5 bg-secondary' data-aos='fade-right' />
                    <h2 className='flex mds:text-6xl sms:text-6xl lgs:text-7xl font-russoone text-baseextra4' data-aos='flip-up'>Articles</h2>
                    <div className='flex mds:w-[40vw] sms:w-[40vw] lgs:w-[40vw] h-0.5 bg-secondary' data-aos='fade-left' />
              </div>

              <div className='flex flex-col h-auto w-full items-center justify-center p-5 lgs:p-10' data-aos='zoom-in' data-aos-delay='20'>
                    <p className='flex h-auto sms:w-[75vw] mds:w-[75vw] lgs:w-[80vw] text-center font-kanit sms:text-md mds:text-xl lgs:text-lg'>{''} Our{''} Articles section is your go-to destination for all things automotive. From insights into mechanical parts and the latest car inventions to coverage of auto companies and industry news, we have it all. I also share my thoughts on the most groundbreaking advancements in the automotive world. Whether you're an enthusiast or curious, this section offers a wealth of knowledge and captivating content.</p>
              </div>

              <div className='sm:hidden flex h-[20vh] w-full items-center justify-between p-2'>
                    
                      <form class="max-w-lg mx-auto">
                          <div class="flex">
                              
                              <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-secondary dark:bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 bg-gray-300 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg></button>
                              <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                  <li>
                                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                                  </li>
                                  <li>
                                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                                  </li>
                                  <li>
                                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                                  </li>
                                  <li>
                                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                                  </li>
                                  </ul>
                              </div>
                              <div class="relative sms:w-full">
                                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                                  <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                      </svg>
                                      <span class="sr-only">Search</span>
                                  </button>
                              </div>
                          </div>
                      </form>

              </div>
              <div className='flex min-h-auto w-full justify-center bg-secondary rounded-t-2xl'>
                <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 p-10'>
                   {articles.map((article) => (
                     <div key={article._id} className='bg-primary rounded-lg border-2 drop-shadow-sm' data-aos='fade-right'>
                     <div className='bg-transparent sms:h-auto w-auto mb-10 rounded-t-lg'>
		
                                                {article.images.length > 0 && (
                                                    <img
                                                    src={article.images[0]}
                                                    alt={article.title}
                                                    className="w-full h-[20vh] object-cover"
/>
                                                )}



                      </div>

                      <div className='text-secondary sms:text-md font-russoone sms:mb-2 sms:pl-4'>
                       {article.category}
                      </div>
                    <h3 className=' text-baseextra4 font-semibold text-2xl font-kanit sms:mb-2 sms:pl-4'>
                       {article.title}
                    </h3>
                    <div className='text-gray-400 sms:text-lg mb-2 pl-4'>
                       <span>{article.date}</span>
                     </div>
                     </div>
            ))}
         </div>
              </div>

        </div>
        </div>
  )
}

export default Articlesec
