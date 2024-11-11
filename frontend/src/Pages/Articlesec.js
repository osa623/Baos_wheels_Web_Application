import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { faSearch} from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

            <div className='hidden mds:flex lgs:flex h-[10rem] bg-primary w-full'/>
         
              <div className='flex flex-col sms:h-[15vh] w-full items-center justify-center sms:pt-10 lgs:pt-5'>
                    <h2 className='flex flex-col mds:text-6xl sms:text-5xl lgs:text-7xl font-russoone sms:p-2 text-baseextra4 overflow-hidden' data-aos='flip-up'>Auto Insights{''}
                      <div className='bg-baseprimary h-[0.15rem] lgs:mt-2 will-change-auto' data-aos='fade-right' data-aos-delay='700'/>
                    </h2>
              </div>

              <div className='flex flex-col h-auto w-full items-center justify-center p-5 lgs:p-10 mds:pt-10' data-aos='zoom-in' data-aos-delay='20'>
                    <p className='flex h-auto sms:w-[75vw] mds:w-[75vw] lgs:w-[60vw] text-center font-ibmplexsans sms:text-md mds:text-lg lgs:text-lg' style={{fontWeight:'300'}}>{''} Our{''} Articles section is your go-to destination for all things automotive. From insights into mechanical parts and the latest car inventions to coverage of auto companies and industry news, we have it all. I also share my thoughts on the most groundbreaking advancements in the automotive world. Whether you're an enthusiast or curious, this section offers a wealth of knowledge and captivating content.</p>
              </div>


              <div className='flex flex-col min-h-auto w-full justify-center items-center bg-secondary rounded-t-2xl lgs:p-10 mds:p-5  mds:mt-10 sms:mt-10'>

                <h2 className='flex flex-col font-russoone w-auto lgs:text-5xl overflow-hidden sms:text-4xl mds:text-4xl mds:pt-10 sms:pt-5 text-center text-primary' data-aos='zoom-in' data-aos-delay='200'>
                    Our Latest Articles{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-left' data-aos-delay='800'/>
                </h2>


               {/* Search Function */}
                <div className='flex h-[10vh] lgs:mt-5 w-full justify-between overflow-hidden sms:pt-5'>
                  <div className="relative w-auto lgs:p-5 items-center justify-center">
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="transition-all duration-300 ease-in-out items-center 
                        lgs:w-[25rem] sms:w-[75vw] mds:w-[60vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 focus:border-baseprimary focus:border-2 rounded-full outline-none"
                        placeholder="Search by the name of the article"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button
                        onClick={''}
                        className="flex flex-col w-[8rem] items-center justify-center h-[2.5rem] bg-baseprimary text-white rounded-full hover:bg-primary hover:text-baseprimary hover:scale-110 transition-all duration-300 ease-in-out"
                      >
                        Search{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
                      </button>
                    </div>
                  </div>


               </div>

                
         <div className='flex w-auto h-auto sms:p-5 justify-center overflow-hidden'>
                <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 mds:p-10 sms:p-5'>

                  {isLoading ? (
                    <Loading2/> 
                  ):(

                    filteredReviews.map((article) => (
                      <div key={article.id} onClick={(() => handleSubmitArticle(article._id))} className='hidden mds:flex lgs:flex flex-col lgs:h-[20rem] mds:h-[16rem] items-center border-2 border-gray-200 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-2xl p-0'
                      style={{boxShadow:'0px 1px 25px rgba(156, 36, 115, 0.6)'}} data-aos='fade-right'>
                      <div className='bg-gray-700 lgs:h-[12rem] mds:h-[10rem] w-auto rounded-xl overflow-hidden'>
                        <img src={article.images[1]} alt={article.title} className='rounded-t-xl transition-transform ease-in-out hover:scale-110'/>
                      </div>
                      <div className='flex flex-col items-start justify-start p-2 bg-transparent space-y-2 '>
                          <div className='flex h-auto lgs:w-auto mt-2 items-start bg-transparent'>
                          <h3 className='text-secondary font-ibmplexsans text-start mds:text-lg lgs:text-xl' style={{fontWeight:'500'}}>{article.title}</h3>
                          </div>
                          <div className='flex flex-col overflow-hidden'>
                            <div className='flex bg-baseprimary h-[0.15rem] lgs:w-[8rem] mds:w-[10rem] transition-transform rounded-full duration-1000 ease-in-out' data-aos= "fade-right"/>
                          </div>
                          <div className='flex h-auto lgs:w-[20vw] bg-transparent'>
                          <p className=' text-secondary text-start font-normal font-ibmplexsans text-xs mb-2'>{article.summary}</p>
                          </div>
                      </div>
                    </div>
                    )
                  
                  )

                  )}

               </div>
        </div>        
              
              
              </div>

        </div>
        </div>
  )
}

export default Articlesec;
