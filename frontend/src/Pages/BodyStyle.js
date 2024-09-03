import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loading2 from '../oth/Loading2';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BodyStyle = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Body Style from URL:", category);

    const fetchReviews = async () => {
      try {

        const response = await axios.get(`http://localhost:5000/api/reviews/category/${category}`);
        setReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error Fetching Reviews:", error);
      }
    };



    if (category) {
      fetchReviews();
    }
  }, [category]);

  const filteredReviews = reviews.filter(reviews => 

    reviews.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reviews.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    reviews.category.toLowerCase().includes(searchQuery.toLowerCase())

  )

  
  const handleOpenReview = (review_id) =>{
    navigate(`/reviews/${review_id}`)
}

  return (
    <div className='relative w-full h-auto lgs:p-2'>
        
          <div className='flex sms:flex-col lgs:w-full h-auto justify-between items-start sms:items-center sms:pt-24 lgs:pt-32 mds:pt-24 p-10'>
            <h1 className='flex flex-col  text-4xl font-russoone sms:text-2xl'>
                Reviews Of:{' '}<span className='text-6xl sms:text-5xl font-russoone text-baseextra4'>{category}</span>
            </h1>

            <div className='hidden lgs:flex h-auto w-[40vw]  overflow-hidden'>
              <div className="flex w-[40vw] lgs:p-5 items-center justify-center drop-shadow-lg" data-aos='fade-left' data-aos-delay='300'>
              <input
                type="text"
                className="transition-all duration-300 ease-in-out items-center $
                lgs:w-[50vw] sms:w-[60vw] mds:w-[60vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 rounded-full outline-none"
                placeholder="Search by Brand, Body Type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              /><FontAwesomeIcon icon={faSearch} className='text-secondary lgs:h-6 cursor-pointer hover:scale-125'/>
            </div>
        
       </div>
          </div>   
      {isLoading ? (
        <Loading2/>
      ) : (
       
        <div className='flex sms:flex-col flex-col w-auto h-auto bg-secondary rounded-t-2xl p-5'>
          
          
       <div className='hidden sms:flex mds:flex  h-[10vh] w-full justify-between overflow-hidden sms:pt-5'>
              <div className="relative w-full lgs:p-5 items-center justify-center" data-aos='fade-up' data-aos-delay='300'>
              <input
                type="text"
                className="transition-all duration-300 ease-in-out items-center $
                lgs:w-[50vw] w-[75vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 rounded-full outline-none"
                placeholder="Search by Brand, Body Type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              /><FontAwesomeIcon icon={faSearch} className='text-primary lgs:h-6 cursor-pointer hover:scale-125'/>
            </div>
      </div>      

        <div className='hidden mds:grid lgs:grid sms:grid-rows-2 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 mds:grid-cols-2 gap-3 p-10'>
        {isLoading ? (
                    <Loading2/>
                                    ) : (
                                        reviews.length > 0 ? (
                                        filteredReviews
                                        .map((reviews) => (
                                        <div key={reviews._id} onClick={()=> handleOpenReview(reviews._id)} className='bg-primary rounded-lg border-2 drop-shadow-sm cursor-pointer ' data-aos='fade-left' data-aos-delay='100'>
                                          <div className='bg-transparent  w-auto mb-10 rounded-lg overflow-hidden'>
                                            {reviews.images && reviews.images.length > 0 && (
                                            <img src={reviews.images[0]} alt={reviews.title} className="w-full h-[20vh] object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125" />
                                            )}
                                         </div>   
                                            <div className='text-secondary lgs:w-[20vw] lgs:text-sm mds:text-md font-russoone pl-5'>
                                            {reviews.category}
                                            </div>
                                            <h2 className='text-baseextra4 font-semibold  lgs:text-3xl mds:text-2xl font-kanit pl-5'>
                                            {reviews.brand}
                                            </h2>
                                            <h3 className='text-baseextra4 text-xl mds:text-xl lgs:mb-5 mds:mb-2 font-kanit pl-5'>
                                            {reviews.title}
                                            </h3>
                                        </div>
                                        ))
                                    ) : (
                                        <p className=''>No related reviews found.</p>
                                    )
                        )}
        </div>

        <div className='hidden sms:grid  sms:grid-cols-1  gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                 filteredReviews
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleOpenReview(reviews._id)} className=' flex h-auto w-full bg-primary rounded-lg overflow-hidden  border-2 cursor-pointer' data-aos='fade-up'>
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

      )}
    </div>
  );
}

export default BodyStyle;
