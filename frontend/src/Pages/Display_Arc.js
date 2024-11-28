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
            const response = await axios.get(`https://admin.baoswheels.com/api/articles/get/${id}`);
            setArticle(response.data);

            const relatedarticles = await axios.get(`https://admin.baoswheels.com/api/articles/category/${response.data.category}`);
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

 useEffect(() => {
  window.scrollTo(0, 0);
}, []);


 if (isLoading) {
  return <Loading2 />;
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
              
                  <div className='flex flex-col justify-center items-start w-auto h-auto lgs:space-y-1'>
                              <h2 className='flex flex-col  font-ibmplexsans sms:text-sxl lgs:text-xl mds:text-6xl text-center lgs:text-start text-baseextra4'
                              style={{
                                fontWeight:'300'
                              }}>

                                  <div className='flex h-auto w-auto justify-center items-center'>
                                      <Link to={'/articles'} style={{
                                            fontWeight:'400'
                                          }}>
                                          Articles
                                          </Link>
                                          <h2 className='mx-2 sms:mx-1'>
                                            |
                                          </h2> {''}<h2 className='mx-1 sms:mx-0'>
                                          {article.category}  
                                          </h2>


                                  </div>{''}<div className='bg-baseprimary w-auto h-[0.05rem]'/>




                                </h2>
                                <h2 className='w-auto font-russoone sms:text-3xl lgs:text-7xl mds:text-6xl text-center lgs:text-start text-baseextra4'>
                                      {article.title}
                                </h2>
                                
     
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
                                {article.subtitle.slice(0,3).map((subtitle, index) => (
                                    <div key={index} className='flex flex-col overflow-hidden w-full h-auto sms:justify-start sms:pt-10 lgs:pt-20 items-start space-y-5 lgs:space-y-3'>
                                        <h2 className='flex flex-col font-russoone sms:text-2xl mds:text-3xl lgs:text-4xl text-baseextra4 text-start'>
                                            {subtitle}{''}<div className='bg-baseprimary h-[0.1rem] will-change-auto' data-aos='fade-right'/>
                                        </h2>
                                        <p className='font-ibmplexsans sms:w-[80vw] lgs:w-[50vw] sms:text-lg lgs:pt-5 mds:text-xl lgs:text-lg text-secondary text-start'
                                        style={{
                                          fontWeight:'300'
                                        }}>
                                            {article.description[index]}
                                        </p>   
                                        <div className='hidden mds:flex bg-transparent h-[50px] w-full'/> 
                                    </div>
                                    
                                ))}

                  {article.images.length > 0 && (
                  <img src={article.images[1]} alt={article.title} className="sms:w-full mt-16 lgs:w-[50vw] h-auto object-cover rounded-lg" />
                  )}

                                {article.subtitle.slice(3).map((subtitle, index) => (
                                    <div key={index} className='flex flex-col overflow-hidden w-full h-auto sms:justify-start sms:pt-10 lgs:pt-20 items-start space-y-5 lgs:space-y-3'>
                                        <h2 className='flex flex-col font-russoone sms:text-2xl mds:text-3xl lgs:text-4xl text-baseextra4 text-start'>
                                            {subtitle}{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                        </h2>
                                        <p className='font-ibmplexsans sms:w-[80vw] lgs:w-[50vw] sms:text-lg lgs:pt-5 mds:text-xl lgs:text-lg text-secondary text-start'
                                        style={{
                                          fontWeight:'300'
                                        }}>
                                            {article.description[index]}
                                        </p>   
                                        <div className='hidden mds:flex bg-transparent h-[50px] w-full'/> 
                                    </div>
                                    
                                ))}
                            </div> 
                  <div className='hidden lgs:flex  flex-col h-auto lgs:p-10 w-[40vw]'>
                      {/* Extra space area for the expected upcoming content */}
                  </div>


            </div>   

            </div>
            <div className='hidden sms:flex flex-col h-auto w-full mt-10'>
                    <div className='flex flex-col h-auto bg-secondary rounded-2xl p-5  sms:space-y-2'>
                      <div className='flex flex-col w-auto h-auto'>
                        <h2 className='flex flex-col font-ibmplexsans sms:text-md sms:items-start sms:justify-start lgs:text-2xl mds:text-3xl text-primary  text-start'>
                          Looking for{''}
                          <div className='bg-primary w-auto h-[0.1rem]'/>
                        </h2>
                        <h2 className='font-russoone sms:text-4xl text-5xl font-bold text-baseprimary text-start'>
                          {article.category} 
                        </h2>
                        <p className='font-ibmplexsans lgs:text-xl text-primary text-start'>
                           Explore our latest in-depth articles of the newest {''}<span className=''>{article.category}</span> on the market
                        </p>
                    </div>  
                    <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 mds:p-10 sms:p-5'>

                        {isLoading ? (
                          <Loading2/> 
                        ):(

                          articlesByCategory.map((article) => (
                            <div key={article.id} onClick={(() => handleClickArticle(article._id))} className='hidden sms:flex h-auto sms:overflow-hidden items-center border-2 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-xl p-0' data-aos='fade-right'>
                            <div className='flex bg-white w-full overflow-hidden  items-center justify-center'>
                              <img src={article.images[1]} alt={article.title} className='rounded-l-xl h-auto' style={{
                                width:'500px'
                              }}/>
                            </div>
                            <div className='flex h-auto lgs:w-auto mb-2rounded-b-x bg-primary p-2'>
                            <h3 className='text-baseextra4 text-start p-2 font-ibmplexsans font-semibold sms:text-sm'>{article.title}</h3>
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


    
</div>  
  )
}

export default Display_Arc
