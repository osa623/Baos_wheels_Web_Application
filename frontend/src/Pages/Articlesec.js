import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Articlesec = () => {

const [articles, setArticles] = useState([]);  
const navigate = useNavigate();

//all the apis

const fetchArticles = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/articles/get");
        setArticles(response.data);
        
    } catch (error) {
        console.error("Error Fetching Articles:", error);        
    }
};  


const handleSubmitArticle = (article_id) =>{
  navigate(`/articles/${article_id}`)
}

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
                    <div className='flex mds:w-[40vw] sms:w-[40vw] lgs:w-[30vw] h-0.5 bg-secondary' data-aos='fade-right' />
                    <h2 className='flex mds:text-6xl sms:text-6xl lgs:text-7xl font-russoone text-baseextra4' data-aos='flip-up'>Articles</h2>
                    <div className='flex mds:w-[40vw] sms:w-[40vw] lgs:w-[30vw] h-0.5 bg-secondary' data-aos='fade-left' />
              </div>

              <div className='flex flex-col h-auto w-full items-center justify-center p-5 lgs:p-10' data-aos='zoom-in' data-aos-delay='20'>
                    <p className='flex h-auto sms:w-[75vw] mds:w-[75vw] lgs:w-[60vw] text-center font-kanit sms:text-md mds:text-xl lgs:text-lg'>{''} Our{''} Articles section is your go-to destination for all things automotive. From insights into mechanical parts and the latest car inventions to coverage of auto companies and industry news, we have it all. I also share my thoughts on the most groundbreaking advancements in the automotive world. Whether you're an enthusiast or curious, this section offers a wealth of knowledge and captivating content.</p>
              </div>

              <div className='sm:hidden flex h-[20vh] w-full items-center justify-between p-2'>
                    

              </div>
              <div className='flex flex-col min-h-auto w-full justify-center bg-secondary rounded-t-2xl lgs:p-10'>

                <h2 className='font-russoone text-4xl text-center text-primary' data-aos='zoom-in' data-aos-delay='200'>
                    Our Latest Articles
                </h2>

                <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 p-10'>
                   {articles.map((article) => (
                     <div key={article._id} onClick={() => handleSubmitArticle(article._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer' data-aos='fade-right'>
                     <div className='bg-transparent sms:h-auto w-auto mb-10 rounded-t-lg'>
		
                                                {article.images.length > 0 && (
                                                    <img
                                                    src={article.images[0]}
                                                    alt={article.title}
                                                    className="w-full h-[20vh] object-cover rounded-t-lg"
/>
                                                )}



                      </div>
                    <h3 className=' text-baseextra4 font-semibold lgs:text-center lgs:text-xl  font-kanit sms:mb-2 sms:pl-4'>
                       {article.title}
                    </h3>
                    <div className='text-gray-400 sms:text-lg lgs:text-2xl  mb-2 pl-4'>
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

export default Articlesec;
