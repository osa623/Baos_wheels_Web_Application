import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled, { keyframes, css } from "styled-components";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';



//Brand Logos
import mercedesbenz from '../assests/Brand Logos/Mercedes_benz.png';
import bmw from '../assests/Brand Logos/bmw.png';
import audi from '../assests/Brand Logos/audi.png';
import nissan from '../assests/Brand Logos/nissan.png';
import honda from '../assests/Brand Logos/honda.png';
import mitsubhishi from '../assests/Brand Logos/mitsubhishi.png';
import rangerover from '../assests/Brand Logos/range_rover.png';
import tesla from '../assests/Brand Logos/tesla.png'
import toyota from '../assests/Brand Logos/toyota.png';
import mazda from '../assests/Brand Logos/mazda.png';

import Loading2 from '../oth/Loading2';


//Car Type Images
import coupe from '../assests/vehicle_styels/coupe.png';
import crossover from '../assests/vehicle_styels/crossover.png';
import hatchback from '../assests/vehicle_styels/hetchback.png';
import  mpv from '../assests/vehicle_styels/mpv.png';
import sedan from '../assests/vehicle_styels/sedan.png';
import sport from '../assests/vehicle_styels/sport.png';
import suv from '../assests/vehicle_styels/SUV.png';
import  wagon from '../assests/vehicle_styels/wagon.png';

const Reviewsection = () => {

  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState([]);
  const [brand, setBrand] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{

    const fetchReviews = async () => {

      try {
    
        const response = await axios.get("http://localhost:5000/api/reviews/get");
        setReview(response.data);
    
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsLoading(false);
    
    
      } catch (error) {
        console.error("Error Fetching Articles:", error);
    
      }finally{
    
      }

    };

    fetchReviews();


  });

  const handleReviewClick = (review_id) =>{
    navigate(`/reviews/${review_id}`)

};

  const handleMouseEnter =() =>{
      setIsPaused(true);
  }

  const handleMouseLeave =() =>{
    setIsPaused(false);
}

  const row1 = [
    { src: sedan, name: 'Sedan' },
    { src: coupe , name: 'Coupe' },
    { src: crossover , name: 'Crossover' },
    { src: hatchback , name: 'Hatchback' },
    { src: mpv , name: 'MPV' },
    { src: sport , name: 'Sport' },
    { src: suv , name: 'SUV' },
    { src: wagon , name: 'Wagon' }
  ];

  const Autobrands = [
    { name: 'Audi', logo: audi },
    { name: 'BMW', logo: bmw },
    { name: 'Honda', logo: honda },
    { name: 'Mazda', logo: mazda },
    { name: 'Mercedes Benz', logo: mercedesbenz },
    { name: 'Mitsubhishi', logo: mitsubhishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota },
    { name: 'Mitsubhishi', logo: mitsubhishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota }
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleBrandClick = (brandName) => {
    setBrand(brandName);
    navigate(`/reviews/brand/${brandName}`);
  };



  return (
    <AppContainer>
      <Wrapper>
        <div className='flex flex-col h-auto w-full items-center justify-center  overflow-hidden sms:space-y-2 lgs:space-y-5 lgs:mt-2'>
          <div className='flex flex-col w-auto mds:mt-10 sms:mt-10 items-center justify-center'>
            <h2 className='flex flex-col lgs:text-7xl mds:text-6xl sms:text-5xl font-russoone font-extrabold text-baseextra4 overflow-hidden' data-aos='fade-right'>Reviews
              {''}<div className='flex  h-[0.15rem] bg-secondary' data-aos="fade-left"/>
            </h2>
            </div>  
            <p className='mds:text-sm sms:text-md sms:p-10  text-baseextra1 font-ibmplexsans mds:w-[80vw] lgs:w-[60vw] lgs:p-10 lgs:text-lg h-inherit mb-5 mt-5 text-center' data-aos='zoom-in'
            style={{
              fontWeight:'300'
            }}>{''}In our Car Reviews section, you'll find comprehensive and easy-to-digest evaluations of a variety of vehicles. We delve into every detail, from performance and safety to comfort and technology. Whether you're after speed, security, or the latest features, our reviews are here to help you make an informed choice. Get insights from our experts and real car owners, and discover the ideal car for you today.</p>

        </div>
        <div className='flex flex-col w-auto h-auto'>
        <Note className='sms:p-3 mds:p-3 lgs:p-5 ' data-aos='zoom-in'>Explore by Vehicle Type</Note>
        </div>
        <Marquee >
          <MarqueeGroup isPaused ={isPaused}>
            {row1.map((el, index) => (
              <ImageGroup key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='cursor-pointer'>
                <a href={el.url} target="_blank" rel="noopener noreferrer">
                  <Image src={el.src} />
                </a>
                <div className='flex flex-col overflow-hidden'>

                  <h2 className='flex flex-col font-ibmplexsans mt-2 text-lg text-secondary overflow-hidden' style={{fontWeight:'300'}} data-aos='fade-up'>{el.name}
                    {''}<div className='flex bg-baseprimary h-[0.1rem] will-change-contents' data-aos='fade-right' data-aos-delay='400'/>
                  </h2>

                </div>

              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup isPaused ={isPaused}>
            {row1.map((el, index) => (
              <ImageGroup key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href={el.url} target="_blank" rel="noopener noreferrer">
                  <Image src={el.src} />
                </a>
                <div className='flex flex-col overflow-hidden'>

                  <h2 className='flex flex-col font-ibmplexsans mt-2 text-lg text-secondary overflow-hidden' style={{fontWeight:'300'}} data-aos='fade-up'>{el.name}
                    {''}<div className='flex bg-baseprimary h-[0.1rem] will-change-contents' data-aos='fade-right' data-aos-delay='400'/>
                  </h2>

                </div>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        {/* screen adjustments for 640px screens */}
        <div className='hidden sms:flex flex-col w-full h-auto items-center justify-center pb-10' data-aos='fade-up' data-aos-delay='20'>
              <div className='grid grid-flow-row grid-cols-2 gap-4'>
                {row1.map((el, index) => (
                      
                        <div className='flex flex-col h-[8rem] w-[10rem] p-3 rounded-lg items-center cursor-pointer' style={{
                          boxShadow:'inset 0 4px 5px rgba(0,0,0,0.2)'
                        }} key={index}>
                          <img src={el.src}
                                alt={el.url}
                                className='w-40 h-20' style={{
                                  objectFit:'contain'
                                }}/>

                                <span className='text-sm font-ibmplexsans text-secondary text-center' style={{fontWeight:'300'}}>{el.name}</span>
                        </div>

                ))}
              </div>
        </div>

        <div className='flex flex-col h-auto w-auto space-y-4'>
              <div className='flex flex-col w-auto items-center justify-center sms:p-5 mds:p-3 lgs:p-8'>
                <Note className='sms:h-auto sms:w-auto text-2xl' data-aos='zoom-out'>Explore by Brand Names</Note>
              </div>
              <div className='flex lgs:w-[75vw] lgs:h-auto sms:w-[90vw] sms:h-auto items-center justify-center sms:p-2 '>
              <div className='grid lgs:grid-cols-5 mds:grid-cols-5 sms:grid-cols-2 sms:h-auto overflow-hidden lgs:scale-110  lgs:gap-10  sms:pt-4 mds:gap-5 sms:gap-5 cursor-pointer justify-center mds:p-5 lgs:p-3 '>
                {Autobrands.slice(0,10).map((brandItem, index) => (
                  <BrandCard key={index} data-aos='fade-up'>

                    <img 
                      src={brandItem.logo} 
                      alt={brandItem.name} 
                      onClick={()=> handleBrandClick(brandItem.name)}
                      className="w-12 h-12" style={{
                        objectFit:'contain'
                      }} 
                    />

                    <span className="flex flex-col text-sm sms:text-xs pt-2 font-ibmplexsans" style={{
                      fontWeight:'300'
                    }}>{brandItem.name}</span>
                  </BrandCard>
                ))}
              </div>
            
              </div>
              <motion.div
            initial={{opacity:0,marginLeft:'-100px'}}
            whileInView={{opacity:1,marginLeft:'0px'}}
            transition={{duration:'1.5', ease:'easeInOut', delay:'0.4'}}
            className='flex flex-row items-center justify-center h-[10vh] mt-[-2vh] lgs:mt-2 sms:p-4 mds:p-2 lgs:p-10  transition-transform duration-300 ease-in-out hover:scale-110'>

              <div className='text-2xl text-baseprimary font-semibold cursor-pointer font-russoone'>
                <Link className='mt-2' to={`/reviews`} style={{fontWeight:'100'}}>See more</Link></div>
              <FontAwesomeIcon icon={faAngleDoubleRight} className='w-10 text-baseprimary'  style={{
                
              }}/>
            </motion.div>
        </div>        

          <div className='flex flex-col w-full h-auto lgs:p-10'>
       <div className='border-2 rounded-xl border-secondary bg-secondary'>

        <div className='flex w-full h-auto justify-center items-center lgs:pt-8'>
           <h2 className='flex flex-col sms:text-3xl mds:text-4xl lgs:text-5xl font-russoone text-primary overflow-hidden m-2 mds:pt-10 sms:pt-5 cursor-default transition-transform duration-300 ease-in-out hover:text-baseprimary' data-aos='zoom-in' data-aos-delay='200'>Our Latest Reviews
            {''}<div className='bg-baseprimary w-auto h-[0.15rem]' data-aos='fade-right' data-aos-delay='700'/>
           </h2>
        </div>

        <div className='flex w-auto h-auto sms:p-5 justify-center overflow-hidden'>
              <div className='hidden lgs:grid mds:grid lgs:grid-cols-4 lgs:gap-4 lgs:p-10 lg:mt-[2vh] mds:grid-cols-2 gap-3 p-10'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                    review
                                    .sort((b,a) => new Date(a.date) - new Date(b.date))
                                    .slice(0,4).map((reviews) => (
                                       <div key={reviews._id} onClick={() => handleReviewClick(reviews._id)} className=' bg-primary rounded-lg border-2 lgs:scale-125 cursor-pointer overflow-hidden transition-transform duration-1000 ease-in-out transform hover:scale-105' data-aos='fade-up'>
                                       <div className='bg-transparent lgs:h-[8rem] w-auto mb-2 rounded-lg overflow-hidden'>
                      
                                                                  {reviews.images.length > 0 && (
                                                                      <img
                                                                      src={reviews.images[0]}
                                                                      alt={reviews.title}
                                                                      className="w-full lgs:h-[8rem] object-cover rounded-t-lg transition-transform duration-300 ease-in-out  hover:scale-125"
                  />
                                                                  )}
                  
                  
                  
                                        </div>
                  
                                        <div className='text-secondary sms:text-md lgs:w-[50vw] lgs:text-sm font-ibmplexsans sms:pl-4 pl-5'>
                                         {reviews.category}
                                        </div>
                                        <div className='flex lgs:w-[6rem] h-auto lgs:pl-5 overflow-hidden mt-1'>
                                          <div className='bg-baseprimary w-[5rem] h-[0.15rem] rounded-full' data-aos='fade-left'/>
                                        </div>
                                        <h2 className=' text-baseextra4 font-semibold lgs:text-3xl mds:text-2xl font-kanit  sms:pl-4 pl-5'>
                                         {reviews.brand}
                                      </h2>
                                      <h3 className=' text-baseextra4 lg:text-md mds:text-xl  mds:mb-10 font-kanit lgs:mb-5 sms:pl-4 pl-5' style={{
                                        fontWeight:'300'
                                      }}>
                                         {reviews.title}
                                      </h3>
                                       </div>
                 ))
                  )}

              </div>
              <div className='hidden sms:grid  sms:grid-cols-1  gap-3 p-5'>
                  {isLoading ? (
                    <Loading2/>
                  ) : (
                                     review
                                    .slice(0,4)
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
                                              <div className='flex flex-col text-secondary text-md font-russoone overflow-hidden ml-5'>
                                              {reviews.category}<div className='bg-baseprimary w-auto h-[0.1rem]' data-aos='fade-right'/>
                                              </div>
                                              <h2 className=' text-baseextra4 text-xl font-semibold  font-ibmplexsans  ml-5'>
                                              {reviews.brand}
                                            </h2>
                                            <h3 className=' text-baseextra4 text-md mds:text-xl  font-kanit ml-5'>
                                              {reviews.title}
                                            </h3>
                                     </div>              
                                       </div>
                 ))
                  )}

              </div>


        </div>

        <motion.div
       initial={{opacity:0,marginLeft:'-100px'}}
       whileInView={{opacity:1,marginLeft:'0px'}}
       transition={{duration:'1.5', ease:'easeInOut', delay:'0.4'}}
       className='flex flex-row items-center justify-center h-[10vh] sms:p-4 mds:p-2 lgs:p-10'>

        <div className='text-2xl text-baseprimary font-semibold cursor-pointer font-russoone transition-transform duration-300 ease-in-out hover:scale-110'>
          <Link style={{fontWeight:'300'}} to={`/reviews`}>See more</Link></div>
        <FontAwesomeIcon icon={faAngleDoubleRight} className='w-10 text-baseprimary'  style={{
          
        }}/>
      </motion.div>


      </div>
          

    </div>


      </Wrapper>
    </AppContainer>
  );
}

export default Reviewsection;

// Styled Components

const AppContainer = styled.div`
  width: 100%;
  height: 'auto';
  background-color: #FFFFFF;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.4s ease;
  padding-top: 5%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Note = styled.div`
  font-size: 25px;
  font-weight: 600;
  cursor: default;
  font-family: 'Kanit', sans-serif;
  color: #02203c;
  

`;


const Marquee = styled.div`
  display: flex;
  width: 1300px;
  padding: 20px;
  overflow: hidden;
  user-select: none;

  @media(max-width: 640px ){
    width:1000px;
    display: none;
  
  }
  
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 150%;
  height: relative;
  animation: ${scrollX} 50s linear infinite;
  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};

    @media (min-width: 641px) and (max-width: 1024px) {
    width: 150%;
    
  }
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const BrandCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 10px;
  }
      @media (max-width: 640px) {
      
    width: 140px;
    padding: 10px;
    font-size: 14px;
    
  }

    @media (min-width: 641px) and (max-width: 1024px) {
    width: 120px;
    font-size: 16px;
  }
`;
