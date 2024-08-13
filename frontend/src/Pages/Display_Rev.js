import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Display_Rev = () => {
  const { id } = useParams(); 
  const [review, setReview] = useState(null);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/get/${id}`);
        setReview(response.data);

        const relatedreviews = await axios.get(`http://localhost:5000/api/reviews/brand/${response.data.brand}`);
        setRelatedReviews(relatedreviews.data)

      } catch (error) {
        console.error("Error Fetching Review:", error);
      }



    };
  
    
    fetchReview();
  }, 

  


  [id]);

  const handleClickReview = (review_id) =>{
    navigate(`/reviews/${review_id}`)
  } 

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
     <div className='relative w-full min-h-screen'>
                   <div className='flex sms:flex-row w-full h-auto items-center justify-between sms:pt-20 sms:mb-5'>
                    <Link to={`/reviews`}>
                      <button className='flex sms:flex-row justify-center drop-shadow-xl border-2 items-center sms:w-[25vw] sms:ml-2 sms:p-2  sms:h-auto sms:rounded-2xl'>
                        {''}<FontAwesomeIcon icon={faAngleDoubleLeft}/>{''}<span className='sms:mx-2'>Back</span>
                      </button>
                      </Link>
                   </div>

        <div className='flex flex-col h-auto w-auto justify-center items-center sms:pt-10 p-10 lgs:pt-20 rounded-xl border-2'>

        <div className='flex flex-col h-auto w-full lgs:justify-between lgs:items-start lgs:p-5'>
          
          <div className='flex lgs:flex-row justify-center items-center w-auto h-auto lgs:space-x-2 lgs:ml-10'>

                  <div className='hidden lgs:flex h-[15vh] w-3 bg-secondary'/>
                  <div className='flex flex-col h-auto w-auto'>
                        <h2 className='w-full font-russoone sms:text-5xl lgs:text-7xl text-center lgs:text-start text-baseextra4'>
                            {review.brand}
                        </h2>
                        <h2 className='w-full font-russoone sms:text-2xl lgs:text-4xl text-center   lgs:text-start text-baseextra4'>
                            {review.title}
                        </h2>
                  </div>  
          </div>
      </div>              
            <div className='flex h-auto w-auto justify-center items-center sms:pt-5'>
              {review.images.length > 0 && (
               <img src={review.images[0]} alt={review.title} className="sms:w-full lgs:scale-90 h-auto object-cover rounded-lg" />
              )}
            </div>
            <div className='flex flex-col h-auto w-full sms:pt-20 lgs:p-10'>

              <div className='gird sms:grid-cols-2 gap-2 h-auto w-auto'>#
                 <div className=''>
                  
                 </div>
              </div>


               <div className='flex flex-col w-full h-auto sms:justify-start sms:items-start sms:space-y-5 lgs:space-y-3'>
                  <h2 className='font-russoone sms:text-2xl lgs:text-4xl text-baseextra4 text-start'>
                  Highlight Breakdown:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] lgs:w-[50vw] text-lg lgs:text-xl text-secondary text-start'>
                    {review.overview}
                  </p>
               </div>
               <div className='flex flex-col w-full h-auto sms:justify-start sms:pt-10 lgs:pt-16 sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone sms:text-2xl lgs:text-4xl text-baseextra4 text-start'>
                  Design and Road Presence:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] text-lg text-secondary text-start'>
                    {review.exterior}
                  </p>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-center sms:pt-10'>
                    <img src ={review.images[2]} alt={review.title} className="w-full h-auto object-cover rounded-lg"/>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-start sms:pt-10 sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone text-2xl text-baseextra4 text-start'>
                  Inside the Cabin:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] text-lg text-secondary text-start'>
                    {review.interior}
                  </p>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-start sms:pt-10 sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone text-2xl text-baseextra4 text-start'>
                  Power and Driving Dynamics:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] text-lg text-secondary text-start'>
                    {review.performance}
                  </p>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-center sms:pt-10'>
                    <img src ={review.images[1]} alt={review.title} className="w-full h-auto object-cover rounded-lg"/>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-start sms:pt-10 sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone text-2xl text-baseextra4 text-start'>
                  Security and Driver Assistance:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] text-lg text-secondary text-start'>
                    {review.safety}
                  </p>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-start sms:pt-10 sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone text-2xl text-baseextra4 text-start'>
                  Cost and Value:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] text-lg text-secondary text-start'>
                    {review.price}
                  </p>
               </div>

            </div>


        </div>

        <div className='flex sms:flex-col w-auto h-auto sms:p-5 justify-center'>

              <div className='flex sms:flex-col w-full h-auto sms:justify-start'>
                <h2 className='font-russoone text-xl text-baseextra4  text-start'>
                  More Reviews of : 
                </h2>
                <h2 className='font-russoone text-3xl text-secondary  text-start'>
                  {review.brand} 
                </h2>

              </div>
              


              <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 lg:mt-[5vh] mds:grid-cols-2 gap-3 p-10'>
                 {relatedReviews.map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleClickReview(reviews._id)} className=' bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer' data-aos='fade-right'>
                                       <div className='bg-transparent sms:h-auto w-auto mb-10 rounded-lg'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[0]}
                                                                      alt={reviews.title}
                                                                      className="w-full h-[20vh] object-cover rounded-t-lg"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                  
                                        <div className='text-secondary sms:text-md lgs:w-[50vw] lgs:text-sm font-russoone sms:pl-4 lgs:pl-5'>
                                         {reviews.category}
                                        </div>
                                        <h2 className=' text-baseextra4 font-semibold  sms:text-3xl font-kanit sms:pl-4 lgs:pl-5'>
                                         {reviews.brand}
                                      </h2>
                                      <h3 className=' text-baseextra4 font-semibold  text-xl font-kanit sms:mb-2 sms:pl-4 lgs:pl-5'>
                                         {reviews.title}
                                      </h3>
                                      <div className='text-gray-400 sms:text-lg mb-2 pl-4'>
                                         <span>{reviews.date}</span>
                                       </div>
                                       </div>
                 ))}

              </div>
        </div>

    </div>
  );
};

export default Display_Rev;
