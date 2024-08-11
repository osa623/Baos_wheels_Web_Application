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
            <h2 className='font-russoone text-3xl text-center text-baseextra4'>
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

            <p className='sms:w-[80vw] h-auto font-poppins text-center sms:text-md text-secondary sms:pt-10'>
                {review.description}
            </p>
        </div>

    </div>
  );
};

export default Display_Rev;
