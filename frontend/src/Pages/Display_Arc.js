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

                

     <div className='flex flex-col h-auto w-auto justify-center items-center sms:pt-10 p-10 lgs:pt-20 rounded-xl border-2'>

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
               <img src={article.images[0]} alt={article.title} className="sms:w-full lgs:scale-90 h-auto object-cover rounded-lg" />
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
                                    <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[50vw] sms:text-xl lgs:pt-10 mds:text-xl lgs:text-xl text-secondary text-start'>
                                        {article.description[index]}
                                    </p>   
                                    <div className='hidden mds:flex bg-transparent h-[50px] w-full'/> 
                                </div>
                                
                            ))}
                        </div> 
               <div className='hidden lgs:flex flex-col h-auto lgs:p-10 w-[40vw]'>
                 <div className='flex flex-col h-[200vh] bg-secondary rounded-2xl overflow-hidden lgs:p-5'>
                            
                            <h2 className='font-russoone lgs:text-4xl text-center text-primary lgs:mt-5'>
                              Looking for more in-depth {''}<span className=''>{article.category}</span> articles?
                            </h2>

                            <div className='bg-primary h-0.5 w-full lgs:mt-5'/>

                            <div className='flex flex-col w-full h-auto lgs:p-5'>
                              {isLoading  ? (
                                <Loading2/>
                              ) : (

                                articlesByCategory.map((articles)=> (
                                  <div key={articles._id} onClick={() => handleClickArticle(articles._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer' data-aos='fade-left' data-aos-delay='100'>
                                  {articles.images && articles.images.length > 0 && (
                                    <img src={articles.images[0]} alt={articles.title} className="w-full h-[20vh] object-cover rounded-t-lg" />
                                  )}
                                  <div className='text-secondary sms:text-md lgs:w-[20vw] lgs:text-sm mds:text-md font-russoone sms:pl-4 pl-5'>
                                    {articles.category}
                                  </div>
                                  <h2 className='text-baseextra4 font-semibold sms:text-3xl mds:text-xl font-kanit sms:pl-4 pl-5'>
                                    {articles.brand}
                                  </h2>
                                  <h3 className='text-baseextra4 font-semibold text-xl mds:text-2xl font-kanit sms:mb-2 sms:pl-4 pl-5'>
                                    {articles.title}
                                  </h3>
                                  <div className='text-gray-400 sms:text-lg mb-2 pl-4'>
                                    <span>{articles.date}</span>
                                  </div>
                                </div>

                                ))

                              )}

                            </div>


                 </div>
               </div>







         </div>   

         </div>


     </div>


    </div>
    <div className='hidden sms:flex mds:flex fixed h-auto w-auto bg-transparent bottom-20 right-8 z-40 justify-center items-center'>
         <a href='#main'>
           <div className='flex h-20 w-20 bg-primary rounded-full items-center justify-center drop-shadow-2xl'>
             <FontAwesomeIcon icon={faAngleDoubleUp} className='sms:h-6'/>
           </div>
        </a>    
    </div>
    
</div>  
  )
}

export default Display_Arc
