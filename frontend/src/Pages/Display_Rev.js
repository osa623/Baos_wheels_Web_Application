import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { faAngleDoubleLeft , faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading2 from '../oth/Loading2';



// Brand Logos
/*import mercedesbenz from '../assests/Brand Logos/Mercedes_benz.png';
import bmw from '../assests/Brand Logos/bmw.png';
import audi from '../assests/Brand Logos/audi.png';
import nissan from '../assests/Brand Logos/nissan.png';
import honda from '../assests/Brand Logos/honda.png';
import mitsubishi from '../assests/Brand Logos/mitsubhishi.png';
import rangerover from '../assests/Brand Logos/range_rover.png';
import tesla from '../assests/Brand Logos/tesla.png';
import toyota from '../assests/Brand Logos/toyota.png';
import mazda from '../assests/Brand Logos/mazda.png'; */





//adding car body styles
import coupe from '../assests/vehicle_styels/coupe.png';
import crossover from '../assests/vehicle_styels/crossover.png';
import hatchback from '../assests/vehicle_styels/hetchback.png';
import  mpv from '../assests/vehicle_styels/mpv.png';
import sedan from '../assests/vehicle_styels/sedan.png';
import sport from '../assests/vehicle_styels/sport.png';
import suv from '../assests/vehicle_styels/SUV.png';
import  wagon from '../assests/vehicle_styels/wagon.png';

const Display_Rev = () => {
  const { id } = useParams(); 
  const [review, setReview] = useState(null);
  const [relatedReviews, setRelatedReviews] = useState([]);
  const lastSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [reviewsByCategory, setReviewsByCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await axios.get(`https://admin.baoswheels.com/api/reviews/get/${id}`);
        setReview(response.data);

        console.log('Review  Details: ', relatedReviews);
        console.log('Brand: ', response.data.brand);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (isLoading) {
    return <Loading2 />;
  }



  return (
     <div className='relative w-full min-h-screen'>
       <div id='main' className='relative w-auto h-auto z-30'>
                   <div className='hidden sms:flex mds:flex flex-row w-[100vw] h-auto items-center justify-start sms:pt-20 mds:pt-20 sms:mb-5'>
                    <div className='flex w-[30vw] h-auto justify-center items-center'>
                    <Link to={`/reviews`}>
                      <button className='flex sms:flex-row justify-center drop-shadow-xl border-2 items-center sms:w-[25vw] mds:w-[25vw] mds:mb-5 sms:ml-2 mds:ml-5 sms:p-2 mds:p-3  sms:h-auto rounded-2xl'>
                        {''}<FontAwesomeIcon icon={faAngleDoubleLeft}/>{''}<span className='mx-2 mds:text-xl'>Back</span>
                      </button>
                      </Link>
                    </div>

                  {/* Moblie view upper section */}
                  <div className='flex items-center justify-end h-auto w-[70vw] sms:p-2 sms:pr-5'>
                      <div className='hidden sms:flex flex-col items-start justify-center bg-transparent w-auto h-auto lgs:mr-24'>
                          <h2 className='flex flex-col font-ibmplexsans text-md text-secondary overflow-hidden' style={{fontWeight:'300'}}>Body Style
                            {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                          </h2>
                          <div className='flex flex-col sms:h-auto]'>
                          {((review.category === 'SUV' || review.category === 'suv') && (
                              <img src={suv} alt='SUV' style={{width:'120px', marginTop:'10px'}}/>
                            )) || ((review.category === 'Sedan' || review.category === 'sedan') && (
                              <img src={sedan} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>
                            )) || ((review.category === 'Crossover' || review.category === 'crossover') && (
                              <img src={crossover} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>   
                            )) || ((review.category === 'Hatchback' || review.category === 'hatchback') && (
                              <img src={hatchback} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>
                            )) || ((review.category === 'Coupe' || review.category === 'coupe') && (
                              <img src={coupe} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>   
                            )) || ((review.category === 'MPV' || review.category === 'mpv') && (
                              <img src={mpv} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>   
                            )) || ((review.category === 'Sport' || review.category === 'sport') && (
                              <img src={sport} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>
                            )) || ((review.category === 'Wagon' || review.category === 'wagon') && (
                              <img src={wagon} alt='Sedan' style={{width:'120px', marginTop:'10px'}}/>   
                            ))
                            
                            
                            }</div>


                      </div>

                  </div>


                   </div>

                   

        <div className='flex flex-col h-auto w-auto justify-center items-center sms:pt-10 p-10 lgs:pt-20 rounded-xl border-2'>

        <div className='flex flex-col h-auto w-full lgs:justify-between lgs:items-start lgs:p-5'>
          
          <div className='flex lgs:flex-row justify-between items-center w-full h-auto lgs:space-x-2'>

              <div className='flex flex-col h-auto w-auto items-start justify-center'>

              <div className='flex flex-col h-auto w-auto overflow-hidden'>
                     <h2 className='flex flex-col font-ibmplexsans lgs:mt-2 text-secondary text-xl sms:text-md' style={{fontWeight:'300'}}><div className=''>
                     <Link to={'/reviews'} className='font-semibold'>Reviews</Link> | {review.title}
                      </div>
                      {''}<div className='bg-baseprimary lgs:mt-2 h-[0.1rem] will-change-auto' data-aos='fade-right' data-aos-delay='500'/>                     
                     </h2>
                  </div>  

                  <div className='flex flex-col h-auto w-auto overflow-hidden lgs:mt-2'>
                     <h2 className='flex flex-col sms:text-4xl font-russoone text-baseextra4 lgs:text-6xl mds:text-4xl' style={{fontWeight:'300'}}>{review.brand}                   
                     </h2>
                  </div> 


              </div>

              <div className='hidden lgs:flex mds:flex h-auto w-auto items-start justify-center lgs:space-x-5'>

                {/*<div className='flex flex-col items-start justify-center bg-transparent w-auto h-auto lgs:mr-8'>
                      <h2 className='flex flex-col font-ibmplexsans text-md text-secondary overflow-hidden' style={{fontWeight:'300'}}>Brand{''}
                        <div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                      </h2>
                        <div className='flex flex-col h-[5rem] overflow-hidden'>
                      {((review.brand === 'Mercedes Benz' || review.brand === 'mercedes benz') && (
                          <img src={mercedesbenz} className='object-cover' alt='SUV' style={{width:'100px', marginTop:'10px'}}/>
                        )) || ((review.brand === 'Bmw' || review.brand === 'bmw') && (
                          <img src={bmw} alt='Sedan' style={{width:'50px'}}/>
                        )) || ((review.brand === 'Audi' || review.brand === 'audi') && (
                          <img src={audi} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((review.brand === 'Nissan' || review.brand === 'nissan') && (
                          <img src={nissan} alt='Sedan' style={{width:'50px'}}/>
                        )) || ((review.brand === 'honda' || review.brand === 'Honda') && (
                          <img src={honda} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((review.brand === 'Mitsubhishi' || review.brand === 'mitsubhishi') && (
                          <img src={mitsubishi} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((review.brand === 'Range Rover' || review.brand === 'range rover') && (
                          <img src={rangerover} alt='Sedan' style={{width:'100px'}}/>
                        )) || ((review.brand === 'tesla' || review.brand === 'Tesla') && (
                          <img src={tesla} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((review.brand === 'toyota' || review.brand === 'Toyota') && (
                          <img src={toyota} alt='Sedan' style={{width:'50px'}}/>   
                        )) || ((review.brand === 'Mazda' || review.brand === 'mazda') && (
                          <img src={mazda} alt='Sedan' style={{width:'50px'}}/>
                        ))
                        
                        
                        }</div>


                </div>*/}

                <div className='flex flex-col items-start justify-center bg-transparent w-auto h-auto lgs:mr-24'>
                      <h2 className='flex flex-col font-ibmplexsans text-md text-secondary overflow-hidden' style={{fontWeight:'300'}}>Body Style
                        {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                      </h2>
                      <div className='flex flex-col lgs:h-[6rem] overflow-hidden'>
                      {((review.category === 'SUV' || review.category === 'suv') && (
                          <img src={suv} alt='SUV' style={{width:'200px', marginTop:'10px'}}/>
                        )) || ((review.category === 'Sedan' || review.category === 'sedan') && (
                          <img src={sedan} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>
                        )) || ((review.category === 'Crossover' || review.category === 'crossover') && (
                          <img src={crossover} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>   
                        )) || ((review.category === 'Hatchback' || review.category === 'hatchback') && (
                          <img src={hatchback} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>
                        )) || ((review.category === 'Coupe' || review.category === 'coupe') && (
                          <img src={coupe} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>   
                        )) || ((review.category === 'MPV' || review.category === 'mpv') && (
                          <img src={mpv} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>   
                        )) || ((review.category === 'Sport' || review.category === 'sport') && (
                          <img src={sport} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>
                        )) || ((review.category === 'Wagon' || review.category === 'wagon') && (
                          <img src={wagon} alt='Sedan' style={{width:'200px', marginTop:'10px'}}/>   
                        ))
                        
                        
                        }</div>


                </div>


            </div>
              



          </div>
      </div>              
            <div className='flex h-auto w-auto justify-center items-center sms:pt-5 mds:p-10'>
              {review.images.length > 0 && (
               <img src={review.images[0]} alt={review.title} className="sms:w-full lgs:scale-90 h-auto object-cover rounded-lg" />
              )}
            </div>
            <div className='flex flex-col h-auto w-full sms:pt-10 mds:pt-10 lgs:items-center'>

              {/*Specification section */}
              <div className='flex h-auto lgs:w-full items-center sms:space-y-4 bg-gray-200 justify-center border-2 sms:p-5 mds:p-5 lgs:p-6'>


                <div className='flex lgs:w-full items-center justify-center'>

                <div className='grid sms:grid-cols-2 mds:grid-cols-2 lgs:grid-cols-6 sms:w-auto lgs:w-auto h-auto mds:pt-10 sms:p-1 sms:gap-5 mds:gap-5 lgs:gap-12'>
                          <div className='flex flex-col h-auto w-auto justify-center lgs:justify-start sms:items-start sms:justify-start items-center'>
                                <h2 className='flex flex-col font-russoone sms:text-lg mds:text-xl lgs:text-xl  overflow-hidden text-baseextra4'>Engine
                                  {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                </h2>
                                <h2 className='font-ibmplexsans text-sm lgs:w-auto text-center lgs:mt-4 sms:text-start mds:text-lg  text-baseextra4'>{review.engine}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center lgs:justify-start sms:items-start sms:justify-start items-center'>
                                <h2 className='flex flex-col font-russoone sms:text-lg mds:text-xl lgs:text-xl  overflow-hidden text-baseextra4'>Drivetrain
                                  {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                </h2>
                                <h2 className='font-ibmplexsans text-sm lgs:w-auto text-center  lgs:mt-4 sms:text-start mds:text-lg text-baseextra4'>{review.drivetrain}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center lgs:justify-start sms:items-start sms:justify-start items-center'>
                                <h2 className='flex flex-col font-russoone sms:text-lg mds:text-xl lgs:text-xl  overflow-hidden text-baseextra4'>Transmission
                                  {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                </h2>
                                <h2 className='font-ibmplexsans text-sm lgs:w-auto text-center lgs:mt-4 sms:text-start mds:text-lg  text-baseextra4'>{review.transmission}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center lgs:justify-start sms:items-start sms:justify-start items-center'>
                                <h2 className='flex flex-col font-russoone sms:text-lg mds:text-xl lgs:text-xl  overflow-hidden text-baseextra4'>Fuel Economy
                                  {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                </h2>
                                <h2 className='font-ibmplexsans text-sm lgs:w-auto text-center lgs:mt-4 sms:text-start mds:text-lg text-baseextra4'>{review.fuelEconomy}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center lgs:justify-start sms:items-start sms:justify-start items-center'>
                                <h2 className='flex flex-col font-russoone sms:text-lg mds:text-xl lgs:text-xl  overflow-hidden text-baseextra4'>Capacity
                                  {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                </h2>
                                <h2 className='font-ibmplexsans text-sm lgs:w-auto text-center lgs:mt-4 sms:text-start mds:text-lg text-baseextra4'>{review.seatingCapacity}</h2>
                            </div>

                            <div className='flex flex-col h-auto w-auto justify-center lgs:justify-start sms:items-start sms:justify-start items-center'>
                                <h2 className='flex flex-col font-russoone sms:text-lg mds:text-xl lgs:text-xl  overflow-hidden text-baseextra4'>Price
                                  {''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right'/>
                                </h2>
                                <h2 className='font-ibmplexsans text-sm lgs:w-auto text-center lgs:mt-4 sms:text-start mds:text-lg text-baseextra4'>{review.singleprice}</h2>
                            </div>
                    </div> 

                </div>





                


        
              
              </div>
            
              {/*Detail section */}
            <div className='flex h-auto w-full lgs:mt-2'>

                  <div className='flex flex-col h-auto lgs:w-[60vw]'>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3 overflow-hidden'>
                      <h2 className='flex flex-col font-russoone sms:text-2xl text-4xl text-baseextra4 text-start overflow-hidden'>
                      Highlight Breakdown{''}<div className='bg-baseprimary lgs:mt-2 h-[0.15rem] w-auto' data-aos='fade-right'/>
                      </h2>
                      <p className='font-ibmplexsans ms:w-[75vw] lgs:w-[60vw] sms:text-lg mds:text-xl lgs:text-lg text-secondary text-start'
                      style={{fontweight:'500'}}>
                        {review.overview}
                      </p>
                  </div>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3 overflow-hidden'>
                      <h2 className='flex flex-col w-auto font-russoone sms:text-2xl text-4xl text-baseextra4 text-start overflow-hidden'>
                      Design and Road Presence{''}<div className='bg-baseprimary lgs:mt-2 h-[0.15rem] w-auto' data-aos='fade-right'/>
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] sms:text-lg mds:text-xl lgs:text-lg text-secondary text-start'
                      style={{fontweight:'300'}}>
                        {review.exterior}
                      </p>
                  </div>
                  <div className='flex sms:flex-col w-full h-auto sms:justify-center pt-10 lgs:pt-20'>
                        <img src ={review.images[2]} alt={review.title} className="w-full h-auto object-cover rounded-lg"/>
                  </div>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3 overflow-hidden'>
                      <h2 className='flex flex-col font-russoone sms:text-2xl text-4xl text-baseextra4 text-start overflow-hidden'>
                      Inside the Cabin{''}<div className='bg-baseprimary lgs:mt-2 h-[0.15rem] w-auto' data-aos='fade-right'/>
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] sms:text-lg mds:text-xl lgs:text-lg text-secondary text-start'
                      style={{fontweight:'300'}}>
                        {review.interior}
                      </p>
                  </div>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3 overflow-hidden'>
                      <h2 className='flex flex-col font-russoone sms:text-2xl text-4xl text-baseextra4 text-start overflow-hidden'>
                      Power and Driving Dynamics{''}<div className='bg-baseprimary lgs:mt-2 h-[0.15rem] w-auto' data-aos='fade-right'/>
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] text-lg mds:text-xl text-secondary text-start'
                      style={{fontweight:'300'}}>
                        {review.performance}
                      </p>
                  </div>
                  <div className='flex sms:flex-col w-full h-auto sms:justify-center pt-10 lgs:pt-20'>
                        <img src ={review.images[1]} alt={review.title} className="w-full h-auto object-cover rounded-lg"/>
                  </div>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3 overflow-hidden'>
                      <h2 className='flex flex-col font-russoone sms:text-2xl text-4xl text-baseextra4 text-start overflow-hidden'>
                      Security and Driver Assistance{''}<div className='bg-baseprimary lgs:mt-2 h-[0.15rem] w-auto' data-aos='fade-right'/>
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] text-lg mds:text-xl text-secondary text-start'
                      style={{fontweight:'300'}}>
                        {review.safety}
                      </p>
                  </div>
                  <div className='flex flex-col w-full h-auto justify-start pt-10  items-start space-y-5 lgs:space-y-3 overflow-hidden'>
                      <h2 className='flex flex-col font-russoone sms:text-2xl text-4xl text-baseextra4 text-sta overflow-hiddenrt'>
                      Cost and Value{''}<div className='bg-baseprimary lgs:mt-2 h-[0.15rem] w-auto' data-aos='fade-right'/>
                      </h2>
                      <p className='font-ibmplexsans sms:w-[75vw] lgs:w-[60vw] text-lg mds:text-xl text-secondary text-start'
                      style={{fontweight:'300'}}>
                        {review.price}
                      </p>
                  </div>
                  </div> 

                  <div className='hidden lgs:flex flex-col h-auto lgs:p-10 w-[40vw]'>
                      {/* Adertising and others */}
                  </div>
            </div>   

            </div>


        </div>

        <div className='flex sms:flex-col w-auto h-auto sms:p-5 justify-center lgs:p-10'>


              <div className='flex flex-col h-auto w-full bg-secondary rounded-t-3xl'>
                      <div className='flex flex-col w-auto h-auto items-center justify-center p-10'>
                        <h2 className='flex flex-col overflow-hidden font-ibmplexsans sms:text-xl lgs:text-2xl mds:text-3xl text-primary  text-start' style={{
                          fontweight:'200'
                        }}>
                          More Reviews{''}<div className='bg-primary h-[0.15rem] w-auto ' data-aos=''fade-right/>
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
                                        <div key={reviews._id} onClick={() => handleClickReview(reviews._id)} className=' bg-primary rounded-lg border-2 lgs:scale-125 cursor-pointer overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-105' data-aos='fade-up'>
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
        <div ref={lastSectionRef} className='hidden sms:flex w-full h-1 bg-transparent'/>


       </div>

      {/* {isVisible && (

<div
className={`hidden sms:flex mds:flex fixed h-auto w-auto bg-transparent bottom-20 right-8 z-40 justify-center items-center transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
<a href='#main'>
  <div className='flex h-20 w-20 bg-primary rounded-full items-center justify-center drop-shadow-2xl transition-transform duration-300 ease-in-out'>
    <FontAwesomeIcon icon={faAngleDoubleUp} className='sms:h-6'/>
  </div>
</a>    
</div>



       )};*/}

       
  </div>   
  );
};

export default Display_Rev;
