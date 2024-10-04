import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

// Brand Logos
import mercedesbenz from '../assests/Brand Logos/Mercedes_benz.png';
import bmw from '../assests/Brand Logos/bmw.png';
import audi from '../assests/Brand Logos/audi.png';
import nissan from '../assests/Brand Logos/nissan.png';
import honda from '../assests/Brand Logos/honda.png';
import mitsubishi from '../assests/Brand Logos/mitsubhishi.png';
import rangerover from '../assests/Brand Logos/range_rover.png';
import tesla from '../assests/Brand Logos/tesla.png';
import toyota from '../assests/Brand Logos/toyota.png';
import mazda from '../assests/Brand Logos/mazda.png';
import Loading2 from '../oth/Loading2';




//adding car body styles
import coupe from '../assests/vehicle_styels/coupe.png';
import crossover from '../assests/vehicle_styels/crossover.png';
import hatchback from '../assests/vehicle_styels/hetchback.png';
import  mpv from '../assests/vehicle_styels/mpv.png';
import sedan from '../assests/vehicle_styels/sedan.png';
import sport from '../assests/vehicle_styels/sport.png';
import suv from '../assests/vehicle_styels/SUV.png';
import  wagon from '../assests/vehicle_styels/wagon.png';

const Reviews = () => {

const [review, setReview] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [filteredReviews, setFilteredReviews] = useState([]);
const [searchQuery, setSearchQuery] = useState('');
const navigate = useNavigate();


const fetchReviews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/reviews/get");
    setReview(response.data);
    setFilteredReviews(response.data);  // Initialize filtered reviews with all reviews
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  } catch (error) {
    console.error("Error Fetching Articles:", error);
  }
};

 const handleReviewClick = (review_id) =>{
      navigate(`/reviews/${review_id}`)

 };

  useEffect(() => {
    fetchReviews();
    Aos.init({
      duration: 2500,
    });
  },);


  const handleSearch = () => {
    const filtered = review.filter(rev =>
      rev.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredReviews(filtered);
  };


  const handleBrandClick = (brandName) => {
    navigate(`/reviews/brand/${brandName}`);
  };

  const handleStyleClick = (bodyStyle) => {
    navigate(`/reviews/bodystyle/${bodyStyle}`);
  };

  const Autobrands = [
    { name: 'Audi', logo: audi },
    { name: 'BMW', logo: bmw },
    { name: 'Honda', logo: honda },
    { name: 'Mazda', logo: mazda },
    { name: 'Mercedes Benz', logo: mercedesbenz },
    { name: 'Mitsubishi', logo: mitsubishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota },
  ];

  const bodystyle = [
    { src: sedan, name: 'Sedan' },
    { src: coupe , name: 'Coupe' },
    { src: crossover , name: 'Crossover' },
    { src: hatchback , name: 'Hatchback' },
    { src: mpv , name: 'MPV' },
    { src: sport , name: 'Sport' },
    { src: suv , name: 'SUV' },
    { src: wagon , name: 'Wagon' }
  ];



  return (
    <div className='relative w-full h-auto'>
      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start'>
        <div className='flex md:h-[10vh] sms:h-[10vh] mds:h-[10vh] lgs:h-[10rem] w-full items-center justify-center' />
        <div className='flex flex-col sms:h-[10vh] w-full items-center justify-center mds:pt-10 lgs:pb-5 overflow-hidden'>
          <h2 className='flex flex-col mds:text-7xl sms:text-6xl lgs:text-7xl  font-russoone text-baseextra4 overflow-hidden' data-aos='flip-up'>Reviews
            {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right' data-aos-delay='700'/>
          </h2>
          
        </div>

        <p className='lgs:w-[60vw] w-[80vw] h-auto text-wrap  sms:text-md text-lg font-ibmplexsans text-secondary text-center mds:pt-5 sms:m-4 m-2 lgs:p-5' data-aos='zoom-in'
        style={{fontWeight:'300'}}>
          {''}Explore the world of automobiles with Baos Wheels' comprehensive Review Section. Our mission is to provide you with detailed, impartial, and insightful evaluations of the latest and most sought-after vehicles on the market. We delve deep into every aspect of each car, from performance and features to comfort and reliability, ensuring you have all the information you need to make an informed decision.
        </p>

        <div className='sms:hidden flex sms:h-[5vh] w-full items-center justify-center' />

        <div className='flex flex-col w-full h-auto items-center justify-center'>
          <h2 className='text-2xl mds:text-3xl font-russoone text-baseextra4 m-2' data-aos='zoom-in'>Explore by Brand Names</h2>

          <div className='flex w-full h-auto items-center justify-center p-5'>
            <div className='grid lgs:grid-cols-4 gap-3 sms:gap-2 lgs:w-auto mds:w-[95vw] h-auto cursor-pointer justify-center items-center mds:p-5'>
              {Autobrands.slice(0,9).map((brand, index) => (
                <div key={index} onClick={()=> {handleBrandClick(brand.name)}} className='flex flex-col  w-[16rem] sms:w-[30vw] mds:w-[25vw] items-center h-auto drop-shadow-lg justify-center rounded-lg space-y-3 border-gray-200 bg-primary p-5 m-2 border-2 hover:drop-shadow-md  transition-transform' data-aos='flip-up'>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="sms:w-20 sms:h-20 w-20 h-20 lgs:w-20 lgs:h-20 lgs:hover:scale-125 transform transition-transform duration-300 ease-in-out p-1"
                    style={{ objectFit: 'contain' }}
                  />
                    <span className="flex flex-col text-sm sms:text-md mds:text-sm lgs:text-lg pt-2 font-ibmplexsans text-center group">
                      {brand.name}
                      {''}
                      <div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100' />
                    </span>

                </div>
              ))}
            </div>
          </div>

          <div className='flex justify-center items-center w-auto h-auto space-x-4'>
                <div className='bg-secondary h-[0.2rem] rounded-full w-[5rem]'/>
                <div className='bg-secondary h-3 w-3 rounded-full'/>    
                <div className='bg-secondary h-3 w-3 rounded-full'/>             
                <div className='bg-secondary h-[0.2rem] rounded-full w-[5rem]'/>
          </div>

          <h2 className='text-2xl mds:text-3xl font-russoone text-baseextra4 m-6' data-aos='zoom-out'>Explore by Body Styles</h2>

          <div className='flex flex-wrap w-full h-auto gap-4 justify-center items-center cursor-pointer mds:p-10 sms:p-10'>
            {bodystyle.map((bstyle, index) => (
              <div key={index} onClick={()=> handleStyleClick(bstyle.name)} className='flex flex-col  w-[20vw] sms:w-[30vw] mds:w-[25vw] items-center lgs:h-[12rem] drop-shadow-lg justify-center rounded-lg space-y-3 border-gray-200 bg-primary p-5 m-2 border-2 hover:drop-shadow-md transition-transform' data-aos='flip-right'>
                <img
                  src={bstyle.src}
                  alt={bstyle.name}
                  className="sms:w-20 sms:h-20 w-20 h-20 lgs:w-52 lgs:h-auto lgs:hover:scale-125 transform transition-transform duration-300 ease-in-out p-1"
                  style={{ objectFit: 'contain' }}
                />
                    <span className="flex flex-col text-sm sms:text-md mds:text-sm lgs:text-lg pt-2 font-ibmplexsans text-center group">
                      {bstyle.name}
                      {''}
                      <div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100' />
                    </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col w-auto h-auto lgs:p-10'>
       <div className='border-2 rounded-t-xl border-secondary bg-secondary'>

        <div className='flex w-full h-auto justify-center items-center lgs:pt-8'>
           <h2 className='flex flex-col sms:text-3xl mds:text-4xl lgs:text-5xl font-russoone overflow-hidden text-primary m-2 mds:pt-10 sms:pt-5 cursor-pointer hover:text-baseprimary' data-aos='zoom-in' data-aos-delay='350'>Our Latest Reviews
            {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right' data-aos-delay='800'/>
           </h2>
        </div>

        
        <div className='flex h-[10vh] w-full justify-between overflow-hidden sms:pt-5'>
            <div className="relative w-auto lgs:p-5 items-center justify-center" data-aos='fade-up' data-aos-delay='300'>
              <div className="flex items-center">
                <input
                  type="text"
                  className="transition-all duration-300 ease-in-out items-center 
                  lgs:w-[25rem] sms:w-[75vw] mds:w-[60vw] mds:mt-5 ml-10 sms:ml-5 mr-5 px-4 py-2 border-2 border-gray-300 focus:border-baseprimary focus:border-2 rounded-full outline-none"
                  placeholder="Search by Brand, Body Type"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={() => handleSearch()}
                  className="flex flex-col w-[8rem] items-center justify-center h-[2.5rem] bg-baseprimary text-white rounded-full hover:bg-primary hover:text-baseprimary hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  Search{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto transition-all duration-300 ease-in-out transform scale-x-0 group-hover:scale-x-100'/>
                </button>
              </div>
            </div>


          </div>


        <div className='flex w-auto h-auto justify-center overflow-hidden'>
              <div className='hidden mds:grid lgs:grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 lg:mt-[2vh] mds:grid-cols-2 gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                    filteredReviews
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .slice(0,8).map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleReviewClick(reviews._id)} className=' bg-primary rounded-lg overflow-hidden  border-2 cursor-pointer' data-aos='fade-up'>
                                       <div className='bg-transparent sms:h-auto w-auto mb-10 rounded-lg overflow-hidden'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[0]}
                                                                      alt={reviews.title}
                                                                      className="w-full h-[20vh] object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                  
                                        <div className='text-secondary lgs:w-[50vw] lgs:text-sm font-russoone sms:pl-4 pl-5'>
                                         {reviews.category}
                                        </div>
                                        <h2 className=' text-baseextra4 font-semibold lgs:text-3xl  mds:text-2xl font-kanit  pl-5'>
                                         {reviews.brand}
                                      </h2>
                                      <h3 className=' text-baseextra4 text-xl mds:text-xl lgs:mb-5 font-kanit pl-5'>
                                         {reviews.title}
                                      </h3>
                                       </div>
                 ))
                  )}

              </div>
              <div className='hidden sms:grid  sms:grid-cols-1  gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                    filteredReviews
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleReviewClick(reviews._id)} className=' flex h-auto w-full bg-primary rounded-lg overflow-hidden  border-2 cursor-pointer' data-aos='fade-up'>
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
          

    </div>
    </div> 
  );
};

export default Reviews;
