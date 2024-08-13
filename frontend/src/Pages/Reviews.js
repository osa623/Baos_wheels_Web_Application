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


const Reviews = () => {

const [review, setReview] = useState([]);
const navigate = useNavigate();



const fetchReviews = async () => {
   
  try {
    
    const response = await axios.get("http://localhost:5000/api/reviews/get");
    setReview(response.data);
  } catch (error) {
    console.error("Error Fetching Articles:", error);

  }finally{

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

  const Autobrands = [
    { name: 'Audi', logo: audi },
    { name: 'BMW', logo: bmw },
    { name: 'Honda', logo: honda },
    { name: 'Mazda', logo: mazda },
    { name: 'Mercedes', logo: mercedesbenz },
    { name: 'Mitsubishi', logo: mitsubishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota },
  ];

  const bodystyle = [
    { name: 'Hatchback', logo: bmw },
    { name: 'Sedan', logo: bmw },
    { name: 'SUV', logo: honda },
    { name: 'Crossover', logo: mazda },
    { name: 'Wagon', logo: mercedesbenz },
    { name: 'Mini', logo: mitsubishi },
  ];

  return (
    <div className='relative w-full h-auto'>
      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start'>
        <div className='flex md:h-[10vh] sms:h-[10vh] mds:h-[10vh] lgs:h-[20vh] w-full items-center justify-center' />
        <div className='flex flex-col sms:h-[10vh] w-full items-center justify-center mds:pt-10 lgs:pb-5'>
          <div className='flex w-[30vw] sms:w-[60vw] h-0.5 bg-secondary' data-aos='fade-right' />
          <h2 className='flex mds:text-7xl sms:text-6xl lgs:text-7xl  font-russoone text-baseextra4' data-aos='flip-up'>Reviews</h2>
          <div className='flex w-[30vw] sms:w-[60vw] h-0.5 bg-secondary' data-aos='fade-left' />
        </div>

        <p className='lgs:w-[70vw] sms:w-[80vw] h-auto text-wrap text-base sms:text-md lgs:text-lg font-kanit text-secondary text-center sms:m-4 m-2 lgs:p-5' data-aos='zoom-in'>
          {''}Explore the world of automobiles with Baos Wheels' comprehensive Review Section. Our mission is to provide you with detailed, impartial, and insightful evaluations of the latest and most sought-after vehicles on the market. We delve deep into every aspect of each car, from performance and features to comfort and reliability, ensuring you have all the information you need to make an informed decision.
        </p>

        <div className='sms:hidden flex sms:h-[5vh] w-full items-center justify-center' />

        <div className='flex flex-col w-full h-auto items-center justify-center'>
          <h2 className='text-2xl font-russoone text-baseextra4 m-2' data-aos='zoom-in'>Explore by Brand Names</h2>

          <div className='flex w-full h-auto items-center justify-center p-5'>
            <div className='flex flex-wrap gap-3 sms:gap-2 lgs:w-[70vw] mds:w-[95vw] h-auto cursor-pointer justify-center items-center mds:p-5'>
              {Autobrands.map((brand, index) => (
                <div className='flex flex-col  w-[20vw] sms:w-[30vw] mds:w-[15vw] items-center h-auto justify-center rounded-lg space-y-3 border-gray-200 bg-primary p-5 m-2 border-2 hover:drop-shadow-md  transition-transform' key={index} data-aos='flip-up'>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="sms:w-20 sms:h-20 w-16 h-16 lgs:w-20 lgs:h-20 lgs:hover:scale-125 transform transition-transform duration-300 ease-in-out p-1"
                    style={{ objectFit: 'contain' }}
                  />
                  <span className="text-sm sms:text-md md:text-sm pt-2 font-kanit text-center">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className='text-2xl font-russoone text-baseextra4 m-6' data-aos='zoom-out'>Explore by Body Styles</h2>

          <div className='flex flex-wrap w-full h-auto gap-4 justify-center items-center cursor-pointer'>
            {bodystyle.map((bstyle, index) => (
              <div className='flex flex-col w-[20vw] sms:w-[30vw] md:w-[15vw] items-center justify-center rounded-lg bg-primary p-5 m-2 border-2 hover:border-baseprimary transition-transform' key={index} data-aos='flip-right'>
                <img
                  src={bstyle.logo}
                  alt={bstyle.name}
                  className="w-16 h-16"
                  style={{ objectFit: 'contain' }}
                />
                <span className="text-sm sms:text-sm md:text-sm pt-2 font-poppins text-center">{bstyle.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col w-auto h-auto lgs:p-10'>
       <div className='border-2 rounded-t-xl border-secondary bg-secondary'>
        <div className='flex w-full h-auto justify-center items-center lgs:pt-5'>
           <h2 className='sms:text-3xl lgs:text-4xl font-russoone text-primary m-2 sms:pt-5' data-aos='zoom-in' data-aos-delay='350'>Our Latest Reviews</h2>
        </div>
        <div className='flex w-auto h-auto sms:p-5 justify-center'>
              <div className='grid sms:grid-cols-1 lgs:grid-cols-4 lgs:gap-4 lgs:p-10 lg:mt-[5vh] mds:grid-cols-2 gap-3 p-10'>
                 {review.map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleReviewClick(reviews._id)} className=' bg-primary rounded-lg border-2 cursor-pointer' data-aos='fade-right'>
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
          

    </div>
    </div> 
  );
};

export default Reviews;
