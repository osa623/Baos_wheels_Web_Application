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
const [filteredItems, setFilteredItems] = useState([]);
const [isFiltered, setIsFiltered] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const navigate = useNavigate();


const fetchReviews = async () => {
  try {
    const response = await axios.get("https://admin.baoswheels.com/api/reviews/get");
    setReview(response.data);
    setIsLoading(false);
  } catch (error) {
    console.error("Error Fetching Articles:", error);
  }
};

 const handleReviewClick = (review_id) =>{
      navigate(`/reviews/${review_id}`)

 };

 useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {
    fetchReviews();
    Aos.init({
      duration: 2500,
    });
  },);


  
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setIsFiltered(false); // If search is empty, reset to show all items
      setFilteredItems([]);
      return;
    }

    const filtered = review.filter((item) =>
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredItems(filtered);
    setIsFiltered(filtered.length > 0);
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
    { name: 'Lexus', logo: rangerover },
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
             <h2 className='flex flex-col mds:text-7xl sms:text-5xl lgs:text-7xl  font-russoone text-baseextra4 overflow-hidden' data-aos='flip-up'>Reviews
                {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right' data-aos-delay='700'/>
              </h2>
          
        </div>

        <p className='lgs:w-[60vw] w-[80vw] h-auto text-wrap  sms:text-md mds:text-lg lgs:text-lg font-ibmplexsans text-secondary text-center mds:pt-5 sms:m-4 m-2 lgs:p-5' data-aos='zoom-in'
        style={{fontWeight:'300'}}>
          {''}Explore the world of automobiles with Baos Wheels' comprehensive Review Section. Our mission is to provide you with detailed, impartial, and insightful evaluations of the latest and most sought-after vehicles on the market. We delve deep into every aspect of each car, from performance and features to comfort and reliability, ensuring you have all the information you need to make an informed decision.
        </p>

        <div className='sms:hidden flex sms:h-[5vh] w-full items-center justify-center' />

        <div className='flex flex-col w-full h-auto items-center justify-center'>
          <h2 className='text-2xl mds:text-3xl font-russoone text-baseextra4 m-2' data-aos='zoom-in'>Explore by Brand Names</h2>

          <div className='flex flex-col w-full h-auto justify-center items-center p-5 overflow-hidden'>
            <div className='grid lgs:grid-cols-5 sms:grid-cols-2 mds:grid-cols-3 gap-3 sms:gap-2 mds:w-auto lgs:w-[50rem] h-auto cursor-pointer justify-items-center mds:p-5'>
              {Autobrands.slice(0,10).map((brand, index) => (
                <div key={index} onClick={()=> {handleBrandClick(brand.name)}} className='group flex flex-col  w-[15rem] sms:h-[10rem] sms:w-auto mds:w-[10rem] items-center h-auto  justify-center space-y-3 bg-transparent p-5 m-2  transition-transform overflow-hidden' data-aos='fade-up' data-aos-delay='200'>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="sms:w-20 sms:h-20 w-20 h-20 lgs:w-20 lgs:h-20 hover:scale-125 transform transition-transform duration-300 ease-in-out p-1"
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

          <div className='flex justify-center items-center lgs:mt-5 w-auto h-[1rem] space-x-4 overflow-hidden'>
                <div className='bg-secondary h-[0.2rem] rounded-full w-[5rem]' data-aos='fade-right'/>
                <div className='bg-secondary h-3 w-3 rounded-full' data-aos='zoom-in'/>    
                <div className='bg-secondary h-3 w-3 rounded-full' data-aos='zoom-in'/>             
                <div className='bg-secondary h-[0.2rem] rounded-full w-[5rem]' data-aos='fade-left'/>
          </div>

          <h2 className='text-2xl mds:text-3xl font-russoone text-baseextra4 m-6' data-aos='zoom-out'>Explore by Body Styles</h2>

          <div className='grid lgs:grid-cols-4 sms:grid-cols-2 mds:grid-cols-4 sms:gap-5 lgs:w-[70rem] sms:w-[25rem] mds:w-[100vw] justify-items-center h-auto cursor-pointer mds:p-10 sms:p-10'>
            {bodystyle.map((bstyle, index) => (
              <div key={index} onClick={()=> handleStyleClick(bstyle.name)} className='group flex flex-col  w-[15rem] mds:w-[20vw]  sms:h-auto sms:w-auto items-center lgs:h-[12rem] drop-shadow-lg justify-center rounded-lg   m-2 hover:drop-shadow-md transition-transform'
              data-aos='fade-up' data-aos-delay='400'>
                <img
                  src={bstyle.src}
                  alt={bstyle.name}
                  className="sms:w-[6rem] sms:h-20 mds:w-[10rem] sms:scale-150 w-20 h-20 lgs:w-52 lgs:h-auto lgs:hover:scale-125 transform transition-transform duration-300 ease-in-out p-1"
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

        <div className='flex justify-center items-center lgs:mt-5 w-auto h-[1rem] space-x-4 overflow-hidden'>
                <div className='bg-secondary h-[0.2rem] rounded-full w-[5rem]' data-aos='fade-right'/>
                <div className='bg-secondary h-3 w-3 rounded-full' data-aos='zoom-in'/>    
                <div className='bg-secondary h-3 w-3 rounded-full' data-aos='zoom-in'/>             
                <div className='bg-secondary h-[0.2rem] rounded-full w-[5rem]' data-aos='fade-left'/>
          </div>
      </div>



      <div className='flex flex-col w-auto h-auto lgs:p-10 sms:pt-5'>
       <div className='border-2 rounded-t-xl border-secondary bg-secondary'>

        <div className='flex w-full h-auto justify-center items-center lgs:pt-8'>
           <h2 className='flex flex-col sms:text-3xl mds:text-4xl lgs:text-5xl font-russoone overflow-hidden text-primary m-2 mds:pt-10 sms:pt-5 cursor-pointer hover:text-baseprimary'>Our Latest Reviews
            {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto'/>
           </h2>
        </div>

        
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


        <div className='flex w-auto h-auto justify-center overflow-hidden'>
            <div className='hidden lgs:grid mds:grid lgs:grid-cols-4 lgs:gap-4 lgs:p-10 mds:grid-cols-2 gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                   (isFiltered ? filteredItems : review)
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .slice(0,12).map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleReviewClick(reviews._id)} className=' bg-primary rounded-lg border-2 lgs:scale-125 cursor-pointer overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-105' data-aos='fade-up'>
                                       <div className='bg-transparent lgs:h-[8rem] mds:h-[8rem] w-auto mb-2 rounded-lg overflow-hidden'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[0]}
                                                                      alt={reviews.title}
                                                                      className="w-full lgs:h-[8rem] mds:h-[8rem] mds:w-[20rem] object-cover rounded-t-lg  transition-transform duration-300 ease-in-out  hover:scale-125"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                  
                                  <div className='flex flex-col h-auto mds:w-auto lgs:w-[100vw] justify-start items-start '>
                                        <div className='flex flex-col overflow-hidden text-secondary sms:text-md lgs:text-sm font-ibmplexsans sms:pl-4 pl-5'>
                                         {reviews.category}{''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-left' data-aos-delay='400'/>
                                        </div>

                                        <h2 className=' text-baseextra4 font-semibold lgs:text-2xl mds:text-2xl font-kanit  pl-5'>
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
                               (isFiltered ? filteredItems : review)
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
  );
};

export default Reviews;
