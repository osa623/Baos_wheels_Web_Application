import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loading2 from '../oth/Loading2';

const Brands = () => {
  const { brandname } = useParams(); // Ensure this matches the route parameter name
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Brand name from URL:", brandname); // Debug log

    const fetchReviews = async () => {
      try {

        const response = await axios.get(`http://localhost:5000/api/reviews/brand/${brandname}`);
        setReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error Fetching Reviews:", error);
      }
    };



    if (brandname) {
      fetchReviews();
    }
  }, [brandname]);

  
  const handleOpenReview = (review_id) =>{
    navigate(`/reviews/${review_id}`)
}

  return (
    <div className='relative w-full h-auto lgs:p-2'>
        
          <div className='flex flex-row lgs:w-full h-auto justify-center items-center sms:pt-24 lgs:pt-32 mds:pt-24 p-10'>
            <h1 className='text-4xl font-russoone'>
                Reviews Of:{' '}<span className='text-6xl font-russoone text-baseextra4'>{brandname}</span>
                <div className='hidden lgs:flex h-0.5 lgs:w-120 bg-secondary text-center'></div>
            </h1>
          </div>   
      {isLoading ? (
        <Loading2/>
      ) : (
       
        <div className='flex sms:flex-row flex-col w-auto h-auto bg-secondary rounded-t-2xl p-5'>
        <div className='grid sms:grid-rows-2 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 mds:grid-cols-2 gap-3 p-10'>
        {isLoading ? (
                    <Loading2/>
                                    ) : (
                                        reviews.length > 0 ? (
                                            reviews
                                        .map((reviews) => (
                                        <div key={reviews._id} onClick={()=> handleOpenReview(reviews._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer ' data-aos='fade-left' data-aos-delay='100'>
                                          <div className='bg-transparent sms:h-auto w-auto mb-10 rounded-lg overflow-hidden'>
                                            {reviews.images && reviews.images.length > 0 && (
                                            <img src={reviews.images[0]} alt={reviews.title} className="w-full h-[20vh] object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125" />
                                            )}
                                         </div>   
                                            <div className='text-secondary sms:text-md lgs:w-[20vw] lgs:text-sm mds:text-md font-russoone sms:pl-4 pl-5'>
                                            {reviews.category}
                                            </div>
                                            <h2 className='text-baseextra4 font-semibold sms:text-3xl mds:text-xl font-kanit sms:pl-4 pl-5'>
                                            {reviews.brand}
                                            </h2>
                                            <h3 className='text-baseextra4 font-semibold text-xl mds:text-2xl font-kanit sms:mb-2 sms:pl-4 pl-5'>
                                            {reviews.title}
                                            </h3>
                                            <div className='text-gray-400 sms:text-lg mb-2 pl-4'>
                                            <span>{reviews.date}</span>
                                            </div>
                                        </div>
                                        ))
                                    ) : (
                                        <p className=''>No related reviews found.</p>
                                    )
                        )}
                        </div>
                        </div>

      )}
    </div>
  );
}

export default Brands;
