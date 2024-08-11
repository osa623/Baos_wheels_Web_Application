import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Display_Rev = () => {
  const { id } = useParams(); 
  const [review, setReview] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/get/${id}`);
        setReview(response.data);
      } catch (error) {
        console.error("Error Fetching Review:", error);
      }
    };

    fetchReview();
  }, [id]);

  if (!review) {
    return <div>Loading...</div>;
  }

  return (
    <div className='relative w-full min-h-screen sms:p-2'>
        <div className='flex sms:flex-col h-auto w-full justify-center items-center sms:pt-20 sms:p-10 rounded-xl border-2'>
            <h2 className='font-russoone sms:text-5xl text-center text-baseextra4'>
                {review.brand}
            </h2>
            <h2 className='font-russoone text-2xl text-center text-baseextra4'>
                {review.title}
            </h2>
            <div className='flex h-auto w-auto justify-center items-center sms:pt-5'>
              {review.images.length > 0 && (
               <img src={review.images[0]} alt={review.title} className="w-full h-auto object-cover rounded-lg" />
              )}
            </div>
            <div className='flex sms:flex-col h-auto w-full sms:pt-20'>
               <div className='flex sms:flex-col w-full h-auto sms:justify-start sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone text-2xl text-baseextra4 text-start'>
                  Highlight Breakdown:
                  </h2>
                  <p className='font-kanit sms:w-[75vw] text-lg text-secondary text-start'>
                    {review.overview}
                  </p>
               </div>
               <div className='flex sms:flex-col w-full h-auto sms:justify-start sms:pt-10 sms:items-start sms:space-y-5'>
                  <h2 className='font-russoone text-2xl text-baseextra4 text-start'>
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

    </div>
  );
};

export default Display_Rev;
