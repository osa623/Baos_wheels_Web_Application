import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import { faAngleDoubleLeft , faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading2 from '../oth/Loading2';



const Display_Arc = () => {

 const { id } = useParams();
 const lastSectionRef = useRef(null);
 const [isVisible, setIsVisible] = useState(true);
 const [isLoading, setIsLoading] = useState(true);
 const [openArticleId, setOpenArticleId] = useState(null);
 const [article, setArticle] = useState(null);
 const [articlesByCategory, setArticlesByCategory] = useState([]);
 const navigate = useNavigate();
 

 useEffect(() => {

    const fetchArticles = async () => {

        try {
            const response = await axios.get(`http://localhost:5000/api/articles/get/${id}`);
            setArticle(response.data);

            const relatedarticles = await axios.get(`http://localhost:5000/api/articles/category/${response.data.category}`);
            setArticlesByCategory(relatedarticles.data);

            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false);
    


            const observer = new IntersectionObserver(

              (entries) => {
                const entry = entries[0];
                setIsVisible(!entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
    
            );
    
    
            if (lastSectionRef.current) {
              observer.observe(lastSectionRef.current);
          }
    
          
          return () => {
              if (lastSectionRef.current) {
                  observer.unobserve(lastSectionRef.current);
              }
          };


        } catch (error) {
            console.error("Error Fetching Articles:", error);
        }
    };

    fetchArticles();
 },
 




 
[id]);

 const handleClickArticle = (article_id) => {
    navigate(`/articles/${article_id}`);
    setOpenArticleId(article_id);
 }


if (!article) {
  return <div>Loading...</div>;
}


  return (
    <div className='relative w-full min-h-screen'>
    <div id='main' className='relative w-auto h-auto z-30'>
                <div className='hidden sms:flex mds:flex flex-row w-full h-auto items-center justify-between sms:pt-20 mds:pt-20 sms:mb-5'>
                 <Link to={`/articles`}>
                   <button className='flex sms:flex-row justify-center drop-shadow-xl border-2 items-center sms:w-[25vw] mds:w-[25vw] mds:mb-5 sms:ml-2 mds:ml-5 sms:p-2 mds:p-3  sms:h-auto rounded-2xl'>
                     {''}<FontAwesomeIcon icon={faAngleDoubleLeft}/>{''}<span className='mx-2 mds:text-xl'>Back</span>
                   </button>
                   </Link>
                </div>

                

     <div className='flex flex-col h-auto w-auto justify-center items-center sms:pt-10 p-10 sms:p-5 lgs:pt-20 rounded-xl border-2'>

            <div className='flex flex-col h-auto w-full lgs:justify-between lgs:items-start lgs:p-5'>
              
                  <div className='flex lgs:flex-row justify-center items-center w-auto h-auto lgs:space-x-2 lgs:ml-10 lgs:pt-10'>

                          <div className='hidden lgs:flex h-[5vh] w-3 bg-secondary'/>
                          <div className='flex flex-col h-auto w-auto'>
                                <h2 className='w-full font-russoone sms:text-3xl lgs:text-7xl mds:text-6xl text-center lgs:text-start text-baseextra4'>
                                      {article.title}
                                </h2>
                                
                          </div>  
                  </div>
            </div>              
            <div className='flex h-auto w-auto justify-center items-center sms:pt-5 mds:p-10'>
            {article.images.length > 0 && (
                  <img src={article.images[0]} alt={article.title} className="sms:w-full lgs:w-[50vw] h-auto object-cover rounded-lg" />
                  )}
              
            </div>
            <div className='flex flex-col h-auto w-full mds:pt-10 lgs:pl-10 lgs:items-center'>
            <div className='flex  h-auto w-full'>
            <div className='flex flex-col h-auto lgs:w-[60vw]'>
                                {article.subtitle.map((subtitle, index) => (
                                    <div key={index} className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 lgs:pt-20 sms:items-start space-y-5 lgs:space-y-3'>
                                        <h2 className='font-russoone sms:text-2xl mds:text-3xl lgs:text-4xl text-baseextra4 text-start'>
                                            {subtitle}
                                        </h2>
                                        <p className='font-ibmplexsans sms:w-[80vw] lgs:w-[50vw] sms:text-xl lgs:pt-10 mds:text-xl lgs:text-xl text-secondary text-start'>
                                            {article.description[index]}
                                        </p>   
                                        <div className='hidden mds:flex bg-transparent h-[50px] w-full'/> 
                                    </div>
                                    
                                ))}
                            </div> 
                  <div className='hidden lgs:flex  flex-col h-auto lgs:p-10 w-[40vw]'>
                    <div className='flex flex-col h-[200vh] bg-secondary rounded-2xl overflow-hidden lgs:p-5'>
                                
                                <h2 className='font-russoone lgs:text-4xl text-center text-primary lgs:mt-5'>
                                  Looking for more in-depth {''}<span className=''>{article.category}</span> articles?
                                </h2>

                                <div className='bg-primary h-0.5 w-full lgs:mt-5'/>

                                <div className='hidden lgs:grid mds:grid gap-5 lgs:grid-cols-4` mds:grid-cols lgs:mt-10 lgs:p-5'>
                                  {isLoading  ? (
                                    <Loading2/>
                                  ) : (

                                    articlesByCategory.map((articles)=> (
                                      <div key={articles._id} onClick={() => handleClickArticle(articles._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer overflow-hidden' data-aos='fade-left' data-aos-delay='100'>
                                      {articles.images && articles.images.length > 0 && (
                                        
                                        <div className='flex w-auto h-auto items-center overflow-hidden '>
                                        <img src={articles.images[0]} alt={articles.title} className="w-full h-[20vh] object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-125" />
                                        </div>   
                                      )}
                                      <div className='text-secondary lgs:w-[20vw] lgs:text-xl lgs:pt-5 mds:text-md font-russoone sms:pl-4 pl-5'>
                                        {articles.category}
                                      </div>
                                      <h3 className='text-baseextra4 text-xl lgs:pb-5 mds:text-2xl lgs:text-2xl font-ibmplexsans pl-5'>
                                        {articles.title}
                                      </h3>
                                    </div>

                                    ))

                                  )}

                                </div>


                    </div>
                  </div>


            </div>   

            </div>
            <div className='hidden sms:flex flex-col h-auto w-full mt-10'>
                    <div className='flex flex-col h-auto bg-secondary rounded-2xl p-5'>
                      <div className='flex flex-col w-auto h-auto'>
                        <h2 className='font-russoone sms:text-xl lgs:text-2xl mds:text-3xl text-primary  text-start'>
                          Looking for : 
                        </h2>
                        <h2 className='font-russoone sms:text-4xl text-5xl font-bold text-baseprimary text-start'>
                          {article.category} 
                        </h2>
                        <p className='font-ibmplexsans lgs:text-xl text-primary text-start'>
                           Explore our latest in-depth reviews of the newest {''}<span className=''>{article.category}</span>s on the market
                        </p>
                    </div>  
                    <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 mds:p-10 sms:p-5'>

                        {isLoading ? (
                          <Loading2/> 
                        ):(

                          articlesByCategory.map((article) => (
                            <div key={article.id} onClick={(() => handleClickArticle(article._id))} className='hidden sms:flex h-auto items-center border-2 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-xl p-0' data-aos='fade-right'>
                            <div className='bg-primary w-full rounded-xl border-4 p-5'>
                              <img src={article.images[0]} alt={article.title} className='rounded-xl transition-transform duration-300 ease-in-out hover:scale-110'/>
                            </div>
                            <div className='flex h-auto lgs:w-auto mb-2rounded-b-x bg-primary p-2'>
                            <h3 className='text-baseextra4 text-start p-2 font-ibmplexsans font-semibold sms:text-xl'>{article.title}</h3>
                            </div>
                          </div>
                        ))

                        )}

                    </div>


                    </div>
            </div>
            <div ref={lastSectionRef} className='hidden sms:flex bg-transparent w-full h-1'/>


     </div>


    </div>

    {isVisible && (
            <div className='hidden sms:flex mds:flex fixed h-auto w-auto bg-transparent bottom-20 right-8 z-40 justify-center items-center'>
            <a href='#main'>
              <div className='flex h-20 w-20 bg-primary rounded-full items-center justify-center drop-shadow-2xl'>
                <FontAwesomeIcon icon={faAngleDoubleUp} className='sms:h-6'/>
              </div>
           </a>    
       </div>

    )};

    
</div>  
  )
}

export default Display_Arc
