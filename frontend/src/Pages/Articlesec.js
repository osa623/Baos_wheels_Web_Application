import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading2 from '../oth/Loading2';

const Articlesec = () => {

const [articles, setArticles] = useState([]);  
const navigate = useNavigate();
const [searchQuery, setSearchQuery] = useState('');
const [isLoading, setIsLoading] = useState(true);

//all the apis

const fetchArticles = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/articles/get");
        setArticles(response.data);

        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        
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

const filteredReviews = articles.filter(articles => 
  articles.category.toLowerCase().includes(searchQuery.toLowerCase())||
  articles.title.toLowerCase().includes(searchQuery.toLowerCase())
);


  return (
    <div className='relative h-auto w-auto'>

      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start sms:pt-20 lgs:space-y-2'>

            <div className='hidden mds:flex lgs:flex h-[10vh] bg-primary w-full'/>
         
              <div className='flex flex-col sms:h-[15vh] w-full items-center lgs: justify-center sms:pt-10 lgs:pt-5'>
                    <div className='flex mds:w-[40vw] sms:w-[40vw] lgs:w-[30vw] h-0.5 bg-secondary' data-aos='fade-right' />
                    <h2 className='flex mds:text-6xl sms:text-6xl lgs:text-7xl font-russoone text-baseextra4' data-aos='flip-up'>Auto Insights</h2>
                    <div className='flex mds:w-[40vw] sms:w-[40vw] lgs:w-[30vw] h-0.5 bg-secondary' data-aos='fade-left' />
              </div>

              <div className='flex flex-col h-auto w-full items-center justify-center p-5 lgs:p-10 mds:pt-10' data-aos='zoom-in' data-aos-delay='20'>
                    <p className='flex h-auto sms:w-[75vw] mds:w-[75vw] lgs:w-[60vw] text-center font-ibmplexsans sms:text-md mds:text-xl lgs:text-lg'>{''} Our{''} Articles section is your go-to destination for all things automotive. From insights into mechanical parts and the latest car inventions to coverage of auto companies and industry news, we have it all. I also share my thoughts on the most groundbreaking advancements in the automotive world. Whether you're an enthusiast or curious, this section offers a wealth of knowledge and captivating content.</p>
              </div>


              <div className='flex flex-col min-h-auto w-full justify-center bg-secondary rounded-t-2xl lgs:p-10 mds:mt-10'>

                <h2 className='font-russoone lgs:text-5xl mds:text-4xl mds:pt-10 text-center text-primary' data-aos='zoom-in' data-aos-delay='200'>
                    Our Latest Articles
                </h2>


                <div className='flex  lgs:h-[10vh] w-full justify-between overflow-hidden lgs:mt-5'>
                      <div className="relative w-full lgs:p-5 items-center justify-center" data-aos='fade-up' data-aos-delay='300'>
                      <input
                        type="text"
                        className="transition-all duration-300 ease-in-out items-center $
                        lgs:w-[50vw] sms:w-[60vw] mds:w-[60vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 rounded-full outline-none"
                        placeholder="Search any keyword you want..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      /><FontAwesomeIcon icon={faSearch} className='text-primary lgs:h-6 cursor-pointer hover:scale-125'/>
                    </div>
        
       </div>

                
         <div className='flex w-auto h-auto sms:p-5 justify-center overflow-hidden'>
                <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 p-10'>

                  {isLoading ? (
                    <Loading2/> 
                  ):(

                    filteredReviews.map((article) => (
                      <div key={article._id} onClick={() => handleSubmitArticle(article._id)} className='flex flex-col bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer' data-aos='fade-right'>
                      <div className='bg-transparent sms:h-auto w-auto mb-10 rounded-t-lg'>
     
                                                 {article.images.length > 0 && (
                                                     <img
                                                     src={article.images[0]}
                                                     alt={article.title}
                                                     className="w-full lgs:h-30 object-cover rounded-t-lg"
 />
                                                 )}
 
 
 
                       </div>
                     <h3 className=' text-baseextra4 font-semibold lgs:text-center lgs:text-2xl lgs:mb-5  font-kanit sms:mb-2 sms:pl-4'>
                        {article.title}
                     </h3>
                      </div>
             ))

                  )}

               </div>
        </div>        
              
              
              </div>

        </div>
        </div>
  )
}

export default Articlesec;
