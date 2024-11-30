import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading2 from '../oth/Loading2';

//importing images from the cap
import ArticleNews from '../assests/AutoNews.jpg';
import ArticleTech from '../assests/AutoTech.jpg';
import ArticleTips from '../assests/drivingTips.jpg';
import  ArticleMech from '../assests/mechnaic.jpg';

const Articlesec = () => {

const [articles, setArticles] = useState([]);  
const navigate = useNavigate();
const [searchQuery, setSearchQuery] = useState('');
const [filteredItems, setFilteredItems] = useState([]);
const [isFiltered, setIsFiltered] = useState(false);
const [isLoading, setIsLoading] = useState(true);


//all the apis

const fetchArticles = async () => {
    try {
        const response = await axios.get("https://admin.baoswheels.com/api/article/get");
        setArticles(response.data);

        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
        
    } catch (error) {
        console.error("Error Fetching Articles:", error);        
    }
};  

const handleSearch = () => {
  if (searchQuery.trim() === '') {
    setIsFiltered(false); // If search is empty, reset to show all items
    setFilteredItems([]);
    return;
  }

  const filtered = articles.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  setFilteredItems(filtered);
  setIsFiltered(filtered.length > 0);
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

useEffect(() => {
  window.scrollTo(0, 0);
}, []);



  return (
    <div className='relative h-auto w-auto'>

      <div className='flex flex-col w-full h-auto bg-primary items-center justify-center sms:pt-20 lgs:space-y-2'>

            <div className='hidden mds:flex lgs:flex h-[5rem] bg-primary w-full'/>
         
            <div className='flex flex-col h-[8rem] w-full items-center justify-center mds:pt-10 lgs:pb-5 overflow-hidden'>
              <h2 className='flex flex-col mds:text-7xl sms:text-5xl lgs:text-7xl  font-russoone text-baseextra4 overflow-hidden' data-aos='flip-up'>Auto Insights
                {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right' data-aos-delay='700'/>
              </h2>
          
        </div>

              <div className='flex flex-col h-auto w-full items-center justify-center p-5 lgs:p-10 mds:pt-10' data-aos='zoom-in' data-aos-delay='20'>
                    <p className='flex h-auto sms:w-[75vw] mds:w-[75vw] lgs:w-[60vw] text-center font-ibmplexsans sms:text-md mds:text-lg lgs:text-lg' style={{fontWeight:'300'}}>{''} Our{''} Articles section is your go-to destination for all things automotive. From insights into mechanical parts and the latest car inventions to coverage of auto companies and industry news, we have it all. I also share my thoughts on the most groundbreaking advancements in the automotive world. Whether you're an enthusiast or curious, this section offers a wealth of knowledge and captivating content.</p>
              </div>

              <div className='grid lgs:grid-cols-2 mds:grid-cols-2 sms:flex sms:flex-col lgs:gap-12 mds:gap-6 w-auto h-auto items-center sms:space-y-5 justify-center lgs:mb-32 overflow-hidden'>
                   <div 
                   className='group flex bg-primary lgs:w-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem] overflow-hidden  border-2 lgs:h-[20rem] cursor-pointer rounded-xl transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.2),_0_0px_20px_rgba(255,223,0,0.5)]' data-aos='fade-up' data-aos-delay='300'>
                     <div className='flex w-auto h-auto z-20'>
                          <img src= {ArticleMech} alt='' className='object-cover'/>

                     </div>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]  bg-gradient-to-t from-transparent via-black to-transparent flex items-center justify-center lgs:w-[20rem]  z-30'/>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem] flex flex-col items-center justify-center lgs:w-[20rem]  z-40'>
                         
                         <div className='flex flex-col h-auto mt-10 rounded-xl items-center cursor-default justify-center mds:space-y-2 sms:space-y-4'>
                            <h2 className='flex flex-col font-russoone lgs:w-[15rem] sms:w-[15rem] lgs:space-y-2 text-center font-thin items-center justify-center text-primary text-2xl sms:text-3xl overflow-hidden'>
                              Mechanics and Maintenance{''}
                              <div className='bg-yellow-500  w-1/4 h-[0.15rem]  group-hover:w-3/4 transition-all ease-in-out duration-1000'/>
                              </h2>
                              <h2 className='flex flex-col font-ibmplexsans lgs:w-[15rem] mds:w-[15rem] lgs:mt-2 text-center text-primary lgs:text-sm sms:text-sm overflow-hidden'>
                              Advice on vehicle upkeep, repairs, and understanding mechanical gadgets.
                              </h2>

                         </div>


                     </div>

                   </div>
                   <div className='group flex bg-primary lgs:w-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]   overflow-hidden  border-2 lgs:h-[20rem] cursor-pointer rounded-xl transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.2),_0_0px_20px_rgba(30,144,255,0.5)]' data-aos='fade-up' data-aos-delay='350'>
                     <div className='flex w-auto h-auto z-20'>
                          <img src= {ArticleTips} alt='' className='object-cover'/>

                     </div>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]  bg-gradient-to-t from-transparent via-black to-transparent flex  items-center justify-center lgs:w-[20rem]  z-30'/>

                     <div className='absolute lgs:h-[20rem]  flex  mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem] items-center justify-center lgs:w-[20rem] z-40'>
                     <div className=' flex flex-col h-auto mt-10 rounded-xl items-center justify-center space-y-2'>
                            <h2 className='flex flex-col font-russoone lgs:w-[12rem] mds:w-[12rem] sms:w-[15rem]  lgs:space-y-2 text-center items-center justify-center text-primary text-2xl sms:text-3xl overflow-hidden'>
                              Driving and Safety Tips{''}
                              <div className='bg-blue-600  w-1/4 h-[0.15rem]  group-hover:w-3/4 transition-all ease-in-out duration-1000'/>
                              </h2>
                              <h2 className='flex flex-col font-ibmplexsans lgs:w-[15rem] mds:w-[15rem] sms:w-[15rem] lgs:mt-2 text-center text-primary lgs:text-sm sms:text-sm overflow-hidden'>
                              Learn how to drive smarter and stay safe in all road conditions.
                              </h2>

                         </div>
                     </div>

                   </div>
                   <div className='group flex bg-primary lgs:w-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]  overflow-hidden  border-2 lgs:h-[20rem] cursor-pointer rounded-xl transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.2),_0_0px_20px_rgba(0,0,0,0.5)]' data-aos='fade-up' data-aos-delay='400'>
                     <div className='flex w-auto h-auto z-20'>
                          <img src= {ArticleNews} alt='' className='object-cover'/>

                     </div>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]  bg-gradient-to-t from-transparent via-black to-transparent   flex  items-center justify-center lgs:w-[20rem]  z-30'/>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]   flex  items-center justify-center lgs:w-[20rem]  z-40'>
                     <div className="flex flex-col h-auto mt-10 rounded-xl items-center justify-center space-y-2">
                            <h2 className="flex flex-col font-russoone lgs:w-[12rem] mds:w-[12rem] sms:w-[15rem] lgs:space-y-2 text-center items-center justify-center text-primary text-2xl sms:text-3xl overflow-hidden">
                              Industry News and Trends{' '}
                              <div className="bg-white w-1/4 h-[0.15rem]  group-hover:w-3/4 transition-all ease-in-out duration-1000" />
                            </h2>
                            <h2 className="flex flex-col font-ibmplexsans lgs:w-[15rem] mds:w-[15rem] sms:w-[15rem] lgs:mt-2 text-center text-primary lgs:text-sm overflow-hidden">
                              Stay informed about major developments in the automobile industry.
                            </h2>
                          </div>


                     </div>

                   </div>
                   <div className='group flex bg-primary lgs:w-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]   overflow-hidden  border-2 lgs:h-[20rem] cursor-pointer rounded-xl transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.2),_0_0px_20px_rgba(199,21,133,0.5)]' data-aos='fade-up' data-aos-delay='450'>
                     <div className='flex w-auto h-auto z-20'>
                          <img src= {ArticleTech} alt='' className='object-cover'/>

                     </div>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]  bg-gradient-to-t from-transparent via-secondary to-transparent  flex  items-center justify-center lgs:w-[20rem]  z-30'/>

                     <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem]  flex  items-center justify-center lgs:w-[20rem]  z-40'>
                     <div className='flex flex-col h-auto mt-10 rounded-xl justify-center items-center space-y-2'>
                            <h2 className='flex flex-col font-russoone lgs:w-[15rem] mds:w-[15rem] sms:w-[15rem]  lgs:space-y-2 text-center items-center justify-center text-primary text-2xl sms:text-3xl overflow-hidden'>
                               Automobile Technology{''}
                              <div className='bg-baseprimary w-1/4 h-[0.15rem]  group-hover:w-3/4 transition-all ease-in-out duration-1000'/>
                              </h2>
                              <h2 className='flex flex-col font-ibmplexsans lgs:w-[15rem] mds:w-[15rem] sms:w-[15rem] lgs:mt-2 text-center text-primary lgs:text-sm overflow-hidden'>
                              Discover groundbreaking innovations shaping the future of vehicles.
                              </h2>

                         </div>
                     </div>

                   </div>

              </div>

              <div className='hidden mds:flex lgs:flex h-[5rem] bg-primary w-full'/>
              <div className='flex flex-col min-h-auto w-full justify-center items-center bg-secondary rounded-t-2xl lgs:mt-32 lgs:p-10 mds:p-5  mds:mt-10 sms:mt-10'>

                <h2 className='flex flex-col font-russoone w-auto lgs:text-5xl overflow-hidden sms:text-4xl mds:text-4xl mds:pt-10 sms:pt-5 text-center text-primary' data-aos='zoom-in' data-aos-delay='200'>
                    Our Latest Articles{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-left' data-aos-delay='800'/>
                </h2>


               {/* Search Function */}
               <div className='flex lgs:h-[10vh] sms:h-[20vh] lgs:w-full lgs:justify-between sms:justify-center overflow-hidden sms:pt-5'>
                    <div className="flex sms:flex-col w-[100vw] lgs:p-6 items-center justify-center lgs:justify-start mds:mt-5">
                      <div className="flex items-center">
                        <input
                          type="text"
                          className="transition-all duration-300 ease-in-out items-center 
                          lgs:w-[30rem] sms:w-[80vw] mds:w-[60vw]  lgs:ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 focus:border-baseprimary focus:border-2 rounded-full outline-none"
                          placeholder="Search by Brand, Body Type"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <button
                          onClick={handleSearch}
                          className="flex flex-col lgs:w-[8rem] sms:w-[80vw] mds:w-[5rem] sms:mt-2 items-center justify-center mds:h-[2.5rem] lgs:h-[2.5rem] sms:h-[2.5rem] bg-baseprimary text-white rounded-full hover:bg-primary hover:text-baseprimary transition-all duration-300 ease-in-out"
                        >
                          Search{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
                        </button>
            </div>


          </div>

                
         <div className='flex w-auto h-auto sms:p-5 justify-center overflow-hidden'>
                <div className='grid  lgs:grid-cols-4 lgs:gap-4 lgs:p-10 h-auto w-auto lg:mt-[5vh] mds:grid-cols-2 gap-3 mds:p-10'>

                  {isLoading ? (
                    <Loading2/> 
                  ):(

                    (isFiltered ? filteredItems : articles).slice(0,4).map((article) => (
                      <div key={article.id} onClick={(() => handleSubmitArticle(article._id))} className='hidden mds:flex lgs:flex flex-col lgs:h-[20rem] mds:h-[16rem] items-center border-2 border-gray-200 cursor-pointer w-auto drop-shadow-2xl bg-primary rounded-2xl p-0' data-aos='fade-right'>
                        <div className='bg-gray-700 lgs:h-[10rem] mds:h-[10rem]   w-auto rounded-xl overflow-hidden'>
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
                    ))
          

                  )}

               </div>

               <div className='hidden sms:grid  sms:grid-cols-1  gap-3 overflow-hidden'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                    (isFiltered ? filteredItems : articles)
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleSubmitArticle(reviews._id)} className=' flex h-auto w-full bg-primary rounded-lg overflow-hidden  border-2 cursor-pointer' data-aos='fade-up'>
                                       <div className='bg-transparent h-auto w-40 rounded-lg overflow-hidden'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[1]}
                                                                      alt={reviews.title}
                                                                      className="w-full h-40  object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                                     <div className='flex flex-col w-60 h-auto items-start justify-center p-2'>                          
                                              <div className='flex flex-col text-secondary text-md font-russoone  pl-5'>
                                              {reviews.category}{''}<div className='bg-baseprimary h-[0.1rem] w-auto'/>
                                              </div>
                                              <h2 className=' text-baseextra4 text-xl font-semibold  font-ibmplexsans  pl-5'>
                                              {reviews.brand}
                                            </h2>
                                            <h3 className=' text-baseextra4 text-md mds:text-xl font-kanit pl-5'>
                                              {reviews.title}
                                            </h3>
                                     </div>              
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
