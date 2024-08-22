import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { faAngleDoubleLeft , faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading2 from '../oth/Loading2';

const Display_Rev = () => {
  const { id } = useParams(); 
  const [review, setReview] = useState(null);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const lastSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [openReviewId, setOpenReviewId] = useState(null);
  const [reviewsByCategory, setReviewsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/get/${id}`);
        setReview(response.data);

        const relatedreviews = await axios.get(`http://localhost:5000/api/reviews/brand/${response.data.brand}`);
        setRelatedReviews(relatedreviews.data);

        const reviewsByCategory = await axios.get(`http://localhost:5000/api/reviews/category/${response.data.category}`);
        setReviewsByCategory(reviewsByCategory.data);

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
        console.error("Error Fetching Review:", error);
      }



    };

    Aos.init({
      duration: 2500,
    });
  
    
    fetchReview();
  }, 

  


  [id]);


  const handleClickReview = (review_id) =>{
    navigate(`/reviews/${review_id}`);
  } 
  
  if (isLoading) {
    return <Loading2 />;
  }



  return (
     <div className='relative w-full min-h-screen'>
       <div id='main' className='relative w-auto h-auto z-30'>
                   <div className='hidden sms:flex mds:flex flex-row w-full h-auto items-center justify-between sms:pt-20 mds:pt-20 sms:mb-5'>
                    <Link to={`/reviews`}>
                      <button className='flex sms:flex-row justify-center drop-shadow-xl border-2 items-center sms:w-[25vw] mds:w-[25vw] mds:mb-5 sms:ml-2 mds:ml-5 sms:p-2 mds:p-3  sms:h-auto rounded-2xl'>
                        {''}<FontAwesomeIcon icon={faAngleDoubleLeft}/>{''}<span className='mx-2 mds:text-xl'>Back</span>
                      </button>
                      </Link>
                   </div>

                   

        <div className='flex flex-col h-auto w-auto justify-center items-center sms:pt-10 p-10 lgs:pt-20 rounded-xl border-2'>

        <div className='flex flex-col h-auto w-full lgs:justify-between lgs:items-start lgs:p-5'>
          
          <div className='flex lgs:flex-row justify-center items-center w-auto h-auto lgs:space-x-2 lgs:ml-10'>

                  <div className='hidden lgs:flex h-[15vh] w-3 bg-secondary'/>
                  <div className='flex flex-col h-auto w-auto'>
                        <h2 className='w-full font-russoone sms:text-5xl lgs:text-7xl mds:text-6xl text-center lgs:text-start text-baseextra4'>
                            {review.brand}
                        </h2>
                        <h2 className='w-full font-russoone sms:text-2xl lgs:text-4xl mds:text-3xl text-center   lgs:text-start text-baseextra4'>
                            {review.title}
                        </h2>
                  </div>  
          </div>
      </div>              
            <div className='flex h-auto w-auto justify-center items-center sms:pt-5 mds:p-10'>
              {review.images.length > 0 && (
               <img src={review.images[0]} alt={review.title} className="sms:w-full lgs:scale-90 h-auto object-cover rounded-lg" />
              )}
            </div>
            <div className='flex flex-col h-auto w-full sms:pt-10 mds:pt-10 lgs:pl-10 lgs:items-center'>

              <div className='flex flex-col h-auto lgs:w-[60vw] items-center drop-shadow-xl sms:space-y-4 bg-gray-300 rounded-xl border-2 sms:p-5 mds:p-5 lgs:p-6'>

                <h2 className='font-russoone sms:text-3xl mds:text-5xl lgs:text-5xl text-baseextra4'>
                  Specifications
                </h2>


                    <div className='grid sms:grid-cols-2 mds:grid-cols-2 lgs:grid-cols-2 sms:w-auto lgs:w-[60vw] h-auto lgs:pt-10 mds:pt-10 sms:p-1 sms:gap-5 mds:gap-5 lgs:gap-6 '>
                            <div className='flex flex-col h-auto w-auto justify-center sms:items-start items-center'>
                                <h2 className='font-russoone sms:text-lg mds:text-xl lgs:text-2xl text-baseextra4'>Engine:</h2>
                                <h2 className='font-ibmplexsans text-md lgs:w-[20vw] text-center  sms:text-start mds:text-lg text-baseextra4'>{review.engine}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center sms:items-start items-center'>
                                <h2 className='font-russoone sms:text-lg mds:text-xl lgs:text-2xl text-baseextra4'>Drivetrain:</h2>
                                <h2 className='font-ibmplexsans text-md lgs:w-[20vw] text-center  sms:text-start mds:text-lg text-baseextra4'>{review.drivetrain}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center sms:items-start items-center'>
                                <h2 className='font-russoone sms:text-lg mds:text-xl lgs:text-2xl text-baseextra4'>Transmission:</h2>
                                <h2 className='font-ibmplexsans text-md lgs:w-[20vw] text-center sms:text-start mds:text-lg  text-baseextra4'>{review.transmission}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center sms:items-start items-center'>
                                <h2 className='font-russoone sms:text-lg mds:text-xl lgs:text-2xl text-baseextra4'>Fuel Economy:</h2>
                                <h2 className='font-ibmplexsans text-md lgs:w-[20vw] text-center sms:text-start mds:text-lg text-baseextra4'>{review.fuelEconomy}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center sms:items-start items-center'>
                                <h2 className='font-russoone sms:text-lg mds:text-xl lgs:text-2xl text-baseextra4'>Capacity:</h2>
                                <h2 className='font-ibmplexsans text-md lgs:w-[20vw] text-center sms:text-start mds:text-lg text-baseextra4'>{review.seatingCapacity}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center sms:items-start items-center'>
                                <h2 className='font-russoone sms:text-lg mds:text-xl lgs:text-2xl text-baseextra4'>Price:</h2>
                                <h2 className='font-ibmplexsans text-md lgs:w-[20vw] text-center sms:text-start mds:text-lg text-baseextra4'>{review.singleprice}</h2>
                            </div>
                    </div>         
              
              </div>
            
            <div className='flex h-auto w-full'>
                  <div className='flex flex-col h-auto lgs:w-[60vw]'>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3'>
                      <h2 className='font-russoone sms:text-2xl text-4xl text-baseextra4 text-start'>
                      Highlight Breakdown:
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] sms:text-lg mds:text-xl lgs:text-lg text-secondary text-start'>
                        {review.overview}
                      </p>
                  </div>
                  <div className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 pt-16 sms:items-start space-y-5 lgs:space-y-3'>
                      <h2 className='font-russoone sms:text-2xl text-4xl text-baseextra4 text-start'>
                      Design and Road Presence:
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] sms:text-lg mds:text-xl lgs:text-lg text-secondary text-start'>
                        {review.exterior}
                      </p>
                  </div>
                  <div className='flex sms:flex-col w-full h-auto sms:justify-center pt-10 lgs:pt-20'>
                        <img src ={review.images[2]} alt={review.title} className="w-full h-auto object-cover rounded-lg"/>
                  </div>
                  <div className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 pt-16 sms:items-start space-y-5 lgs:space-y-3'>
                      <h2 className='font-russoone sms:text-2xl text-4xl text-baseextra4 text-start'>
                      Inside the Cabin:
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] sms:text-lg mds:text-xl lgs:text-lg text-secondary text-start'>
                        {review.interior}
                      </p>
                  </div>
                  <div className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 pt-16 sms:items-start space-y-5 lgs:space-y-3'>
                      <h2 className='font-russoone sms:text-2xl text-4xl text-baseextra4 text-start'>
                      Power and Driving Dynamics:
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] text-lg mds:text-xl text-secondary text-start'>
                        {review.performance}
                      </p>
                  </div>
                  <div className='flex sms:flex-col w-full h-auto sms:justify-center pt-10 lgs:pt-20'>
                        <img src ={review.images[1]} alt={review.title} className="w-full h-auto object-cover rounded-lg"/>
                  </div>
                  <div className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 pt-16 sms:items-start space-y-5 lgs:space-y-3'>
                      <h2 className='font-russoone sms:text-2xl text-4xl text-baseextra4 text-start'>
                      Security and Driver Assistance:
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] text-lg mds:text-xl text-secondary text-start'>
                        {review.safety}
                      </p>
                  </div>
                  <div className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 pt-16 sms:items-start space-y-5 lgs:space-y-3'>
                      <h2 className='font-russoone sms:text-2xl text-4xl text-baseextra4 text-start'>
                      Cost and Value:
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] text-lg mds:text-xl text-secondary text-start'>
                        {review.price}
                      </p>
                  </div>
                  </div> 
                  <div className='hidden lgs:flex flex-col h-auto lgs:p-10 w-[40vw]'>
                    <div className='flex flex-col h-auto bg-secondary rounded-2xl lgs:p-5'>
                      <div className='flex flex-col w-auto h-auto'>
                        <h2 className='font-russoone sms:text-xl lgs:text-2xl mds:text-3xl text-primary  text-start'>
                          Looking for : 
                        </h2>
                        <h2 className='font-russoone sms:text-4xl text-5xl font-bold text-baseprimary text-start'>
                          {review.category} 
                        </h2>
                        <p className='font-ibmplexsans lgs:text-xl text-primary text-start'>
                           Explore our latest in-depth reviews of the newest {''}<span className=''>{review.category}</span>s on the market
                        </p>
                    </div>  
                    <div className='grid sms:grid-rows-1 lgs:grid-rows-4 lgs:gap-4 lgs:p-10 mds:grid-rows-2 gap-3 p-10 overflow-hidden'>
                                      {isLoading ? (
                                <Loading2/>
                              ) : (
                                reviewsByCategory.length > 0 ? (
                                  reviewsByCategory
                                  .map((reviews) => (
                                    <div key={reviews._id} onClick={() => handleClickReview(reviews._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer' data-aos='fade-left' data-aos-delay='100'>
                                      {reviews.images && reviews.images.length > 0 && (
                                        <img src={reviews.images[0]} alt={reviews.title} className="w-full h-[20vh] object-cover rounded-t-lg" />
                                      )}
                                      <div className='text-secondary sms:text-md lgs:pt-5 lgs:w-[20vw] lgs:text-md mds:text-md font-russoone sms:pl-4 pl-5'>
                                        {reviews.category}
                                      </div>
                                      <h2 className='text-baseextra4 font-semibold sms:text-3xl mds:text-xl lgs:text-2xl font-ibmplexsans sms:pl-4 pl-5'>
                                        {reviews.brand}
                                      </h2>
                                      <h3 className='text-baseextra4 font-semibold lgs:pb-5 text-xl mds:text-2xl font-ibmplexsans sms:mb-2 sms:pl-4 pl-5'>
                                        {reviews.title}
                                      </h3>
                                    </div>
                                  ))
                                ) : (
                                  <p className=''>No related reviews found.</p>
                                )
                              )}
                    </div>


                    </div>
                  </div>
            </div>   

            </div>


        </div>

        <div className='flex sms:flex-col w-auto h-auto sms:p-5 justify-center lgs:p-10'>


              <div className='flex flex-col h-auto w-full bg-secondary rounded-t-3xl'>
                      <div className='flex flex-col w-full h-auto sms:justify-start p-10'>
                        <h2 className='font-russoone sms:text-xl lgs:text-2xl mds:text-3xl text-primary  text-start'>
                          More Reviews of : 
                        </h2>
                        <h2 className='font-russoone sms:text-4xl text-5xl text-baseprimary text-start'>
                          {review.brand} 
                        </h2>

                      </div>

                      <div className='hidden lgs:grid mds:grid lgs:grid-cols-4 lgs:gap-4 lgs:p-10 mds:grid-cols-2 gap-3 p-10 overflow-hidden'>
                                  {isLoading ? (
                                    <Loading2/>
                                  ) : (
                                    relatedReviews.length > 0 ? (
                                      relatedReviews.map((reviews) => (
                                        <div key={reviews._id} onClick={() => handleClickReview(reviews._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer'>
                                          
                                      <div className='bg-transparent h-auto w-auto mb-10 rounded-lg overflow-hidden'>    
                                          {reviews.images && reviews.images.length > 0 && (
                                            <img src={reviews.images[0]} alt={reviews.title} className="w-full h-[10rem] object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125" />
                                          )}
                                     </div>     
                                       
                                          <div className='text-secondary  lgs:w-[50vw] lgs:text-sm mds:text-md font-russoone  pl-5'>
                                            {reviews.category}
                                          </div>
                                          <h2 className='text-baseextra4 font-semibold mds:text-xl lgs:text-2xl font-kanit  pl-5'>
                                            {reviews.brand}
                                          </h2>
                                          <h3 className='text-baseextra4 font-semibold lgs:text-lg  mds:text-2xl font-kanit mb-2 pl-5'>
                                            {reviews.title}
                                          </h3>
                                        </div>
                                      ))
                                    ) : (
                                      <p className=''>No related reviews found.</p>
                                    )
                                  )}
                      </div>

                      
                      <div className='hidden sms:grid grid-cols-1 gap-3 p-10 overflow-hidden'>
                                  {isLoading ? (
                                    <Loading2/>
                                  ) : (
                                    relatedReviews
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleClickReview(reviews._id)} className=' flex h-auto w-full bg-primary rounded-lg overflow-hidden  border-2 cursor-pointer' data-aos='fade-up'>
                                       <div className='bg-transparent h-auto w-40 rounded-lg overflow-hidden'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[0]}
                                                                      alt={reviews.title}
                                                                      className="w-full h-40  object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                                     <div className='flex flex-col w-60 h-auto items-start justify-center p-2'>                          
                                              <div className='text-secondary text-md font-russoone  pl-5'>
                                              {reviews.category}
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
        <div ref={lastSectionRef} className='hidden sms:flex w-full h-1 bg-transparent'/>


       </div>

       {isVisible && (

<div
className={`hidden sms:flex mds:flex fixed h-auto w-auto bg-transparent bottom-20 right-8 z-40 justify-center items-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
<a href='#main'>
  <div className='flex h-20 w-20 bg-primary rounded-full items-center justify-center drop-shadow-2xl transition-transform duration-300 ease-in-out'>
    <FontAwesomeIcon icon={faAngleDoubleUp} className='sms:h-6'/>
  </div>
</a>    
</div>



       )};

       
  </div>   
  );
};

export default Display_Rev;
