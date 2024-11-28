import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading2 from '../oth/Loading2';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


//adding car body styles
import coupe from '../assests/vehicle_styels/coupe.png';
import crossover from '../assests/vehicle_styels/crossover.png';
import hatchback from '../assests/vehicle_styels/hetchback.png';
import  mpv from '../assests/vehicle_styels/mpv.png';
import sedan from '../assests/vehicle_styels/sedan.png';
import sport from '../assests/vehicle_styels/sport.png';
import suv from '../assests/vehicle_styels/SUV.png';
import  wagon from '../assests/vehicle_styels/wagon.png';

const BodyStyle = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
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
  
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setIsFiltered(false); // If search is empty, reset to show all items
      setFilteredItems([]);
      return;
    }

    const filtered = reviews.filter((item) =>
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredItems(filtered);
    setIsFiltered(filtered.length > 0);
  };

  
  const handleOpenReview = (review_id) =>{
    navigate(`/reviews/${review_id}`)
}

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className='relative w-full h-auto lgs:p-2'>
        
          <div className='flex sms:flex-row lgs:w-full h-auto justify-between items-start sms:items-center sms:pt-24 lgs:pt-32 mds:pt-24 p-10'>
          <div className='flex flex-col h-auto w-auto items-start'>
                  <h1 className='flex flex-col w-auto lgs:text-2xl overflow-hidden font-ibmplexsans  sms:text-md' style={{
                      fontWeight:'300'
                    }}>
                        <Link to={'/reviews'}>Reviews</Link>{' '}<div className='h-[0.1rem] w-auto bg-baseprimary' data-aos='fade-right' data-aos-delay='400'/>
                    </h1>
                    <h1 className='flex flex-col  lgs:text-5xl font-russoone sms:text-3xl mds:text-4xl' style={{
                      fontWeight:'300'
                    }}>
                        {category}
                    </h1>

              </div>

            <div className='flex flex-col items-start justify-center bg-transparent w-auto h-auto lgs:mr-24'>
                      <h2 className='flex flex-col font-ibmplexsans text-md text-secondary overflow-hidden' style={{fontWeight:'300'}}>Body Style
                        {''}<div className='bg-baseprimary h-[0.1rem] will-change-auto' data-aos='fade-right'/>
                      </h2>
                      <div className='flex flex-col lgs:h-[6rem] overflow-hidden'>
                      {((category === 'SUV' || category === 'suv') && (
                          <img src={suv} alt='SUV' style={{width:'150px', marginTop:'10px'}}/>
                        )) || ((category === 'Sedan' || category === 'sedan') && (
                          <img src={sedan} alt='Sedan' style={{width:'150px', marginTop:'10px'}}/>
                        )) || ((category === 'Crossover' || category === 'crossover') && (
                          <img src={crossover} alt='Crossover' style={{width:'150px', marginTop:'10px'}}/>   
                        )) || ((category === 'Hatchback' || category === 'hatchback') && (
                          <img src={hatchback} alt='Hatchback' style={{width:'150px', marginTop:'10px'}}/>
                        )) || ((category === 'Coupe' || category === 'coupe') && (
                          <img src={coupe} alt='Coupe' style={{width:'150px', marginTop:'10px'}}/>   
                        )) || ((category === 'MPV' || category === 'mpv') && (
                          <img src={mpv} alt='MPV' style={{width:'150px', marginTop:'10px'}}/>   
                        )) || ((category === 'Sport' || category === 'sport') && (
                          <img src={sport} alt='Sport' style={{width:'150px', marginTop:'10px'}}/>
                        )) || ((category === 'Wagon' || category === 'wagon') && (
                          <img src={wagon} alt='Wagon' style={{width:'150px', marginTop:'10px'}}/>   
                        ))
                        
                        
                        }</div>


                </div>



            <div className='hidden lgs:flex h-auto w-[40vw]  overflow-hidden'>
              <div className="flex w-[40vw] lgs:p-5 items-center justify-center drop-shadow-lg">
              <input
                type="text"
                className="transition-all duration-300 ease-in-out items-center $
                lgs:w-[50vw] sms:w-[60vw] mds:w-[60vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 rounded-full outline-none"
                placeholder="Search by Brand, Body Type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />              <button
              onClick={handleSearch}
              className="flex flex-col lgs:w-[16rem] sms:w-[80vw] sms:mt-2 items-center justify-center lgs:h-[2.5rem] sms:h-[2.5rem] bg-baseprimary text-white rounded-full hover:bg-primary hover:text-baseprimary transition-all duration-300 ease-in-out"
            >
              Search{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
            </button>
            </div>
        
           </div>
          </div>   
      {isLoading ? (
        <Loading2/>
      ) : (
       
                      <div className='flex sms:flex-col flex-col w-auto h-auto bg-secondary rounded-t-3xl p-5 mds:mt-48'>
          
          
       <div className='hidden sms:flex  h-[20vh] w-full justify-center overflow-hidden sms:pt-5'>
              <div className="flex flex-col w-full lgs:p-5 items-center justify-center">
              <input
                type="text"
                className="transition-all duration-300 ease-in-out items-center $
                 w-[75vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 rounded-full outline-none"
                placeholder="Search by Brand, Body Type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              /><button
              onClick={handleSearch}
              className="flex flex-col lgs:w-[16rem] sms:w-[75vw] sms:mt-2 items-center justify-center lgs:h-[2.5rem] sms:h-[2.5rem] bg-baseprimary text-white rounded-full hover:bg-primary hover:text-baseprimary transition-all duration-300 ease-in-out"
            >
              Search{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
            </button>
            </div>
      </div>      

      <div className='hidden lgs:grid mds:grid lgs:grid-cols-4 lgs:gap-4 lgs:p-10 mds:grid-cols-2 gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                   (isFiltered ? filteredItems : reviews)
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .slice(0,4).map((reviews) => (
                                      <div key={reviews._id} onClick={() => handleOpenReview(reviews._id)} className=' bg-primary rounded-lg border-2 lgs:scale-125 cursor-pointer overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-105' data-aos='fade-up'>
                                      <div className='bg-transparent lgs:h-[8rem] mds:h-[8rem] w-auto mb-2 rounded-lg overflow-hidden'>
                     
                                                                 {reviews.images.length > 0 && (
                                                                     <img
                                                                     src={reviews.images[0]}
                                                                     alt={reviews.title}
                                                                     className="w-full lgs:h-[8rem] mds:h-[8rem] mds:w-[30rem] object-cover rounded-t-lg  transition-transform duration-300 ease-in-out  hover:scale-125"
                 />
                                                                 )}
                 
                 
                 
                                       </div>
                 
                                 <div className='flex flex-col h-auto mds:w-auto lgs:w-[100vw] justify-start items-start '>
                                       <div className='flex flex-col overflow-hidden text-secondary sms:text-md lgs:text-sm font-ibmplexsans sms:pl-4 pl-5'>
                                        {reviews.category}{''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-left' data-aos-delay='400'/>
                                       </div>

                                       <h2 className=' text-baseextra4 font-semibold lgs:text-3xl mds:text-2xl font-kanit  pl-5'>
                                        {reviews.brand}
                                     </h2>
                                     <h3 className=' text-baseextra4 lg:text-md mds:text-xl  mds:mb-5 font-kanit lgs:mb-5  pl-5' style={{
                                       fontWeight:'300'
                                     }}>
                                        {reviews.title}
                                     </h3>

                                      </div>
                                      </div>    
                 ))
                  )}

       </div>

             <div className='hidden sms:grid  sms:grid-cols-1  gap-3 p-5 overflow-hidden'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (

                    (isFiltered ? filteredItems : reviews).length === 0 ? (
                      <div className="text-center text-secondary text-xl font-semibold">
                        No reviews right now
                      </div>
                    ) : (
                                    (isFiltered ? filteredItems : reviews)
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
                    )
                  )}

              </div>      




                        </div>

      )}
    </div>
  );
}

export default BodyStyle;
