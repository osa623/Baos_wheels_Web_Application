import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import {faArrowRightLong} from '@fortawesome/free-solid-svg-icons';



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


//Car Type Images


const Reviewsection = () => {

  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter =() =>{
      setIsPaused(true);
  }

  const handleMouseLeave =() =>{
    setIsPaused(false);
}

  const row1 = [
    { url: "https://example.com/page1", src: mercedesbenz, name: 'Mercedes Benz' },
    { url: "https://example.com/page2", src: mercedesbenz },
    { url: "https://example.com/page3", src: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png" },
    { url: "https://example.com/page4", src: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png" },
    { url: "https://example.com/page5", src: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png" },
    { url: "https://example.com/page6", src: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png" },
    { url: "https://example.com/page7", src: "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png" },
  ];

  const Autobrands = [
    { name: 'Audi', logo: audi },
    { name: 'BMW', logo: bmw },
    { name: 'Honda', logo: honda },
    { name: 'Mazda', logo: mazda },
    { name: 'Mercedes Benz', logo: mercedesbenz },
    { name: 'mitsubhishi', logo: mitsubhishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);



  return (
    <AppContainer>
      <Wrapper>
        <div className='flex flex-col h-auto w-full items-center justify-center  overflow-hidden sms:space-y-2 lgs:space-y-10'>
          <div className='flex flex-col w-[50vw] mds:mt-10 sms:mt-10 lgs:mt-5 items-center justify-center'>
            <div className='flex h-0.5 lgs:w-[30vw] mds:w-[40vw] sms:w-[50vw] bg-black cursor-default' data-aos='fade-right'></div>
            <h2 className='lgs:text-7xl mds:text-6xl sms:text-5xl font-russoone text-baseextra1' data-aos='flip-up'>Reviews</h2>
            <div className='flex h-0.5 lgs:w-[30vw] mds:w-[40vw] sms:w-[50vw] bg-black cursor-default' data-aos='fade-left'></div>
            </div>  
            <p className='lgs:text-md mds:text-sm sms:text-sm sms:p-10  text-baseextra1 font-kanit mds:w-[80vw] lgs:w-[70vw] h-inherit mb-5 mt-5 text-center md:w-[' data-aos='zoom-in'
            style={{
              
            }}>{''}<span className='text-3xl font-thin'>Welcome</span>{' '}to our Car Reviews section! Here, you'll find detailed and easy-to-understand reviews of various cars. We cover everything from speed and safety to comfort and technology. Whether you're interested in a car that's fast, safe, or packed with the latest features, our reviews will help you make an informed decision. Read insights from our experts and real car owners, and discover the perfect car for you today</p>

        </div>
        <Note className='sms:p-3 mds:p-3 lgs:p-5' data-aos='zoom-in'>Explore by Vehicle Type</Note>
        <Marquee >
          <MarqueeGroup isPaused ={isPaused}>
            {row1.map((el, index) => (
              <ImageGroup key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href={el.url} target="_blank" rel="noopener noreferrer">
                  <Image src={el.src} />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup isPaused ={isPaused}>
            {row1.map((el, index) => (
              <ImageGroup key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <a href={el.url} target="_blank" rel="noopener noreferrer">
                  <Image src={el.src} />
                </a>
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

        {/* screen adjustments for 640px screens */}
        <div className='sm:hidden flex flex-col w-full h-auto items-center justify-center p-5 pb-20' data-aos='fade-up' data-aos-delay='20'>
              <div className='grid grid-flow-row grid-cols-3 gap-4'>
                {row1.map((el, index) => (
                      
                        <div className='flex flex-col border-2 p-3 rounded-lg items-center' key={index}>
                          <img src={el.src}
                                alt={el.url}
                                className='w-20 h-20' style={{
                                  objectFit:'contain'
                                }}/>

                                <span className='text-sm font-russoone text-secondary text-center'>{el.name}</span>
                        </div>

                ))}
              </div>
        </div>

        <div className='flex flex-col w-auto items-center justify-center sms:p-5 mds:p-3 lgs:p-8'>
          <Note className='sms:h-autom sms:w-auto text-2xl' data-aos='zoom-out'>Explore by Brand Names</Note>
        </div>
        <div className='flex lgs:w-[95vw] lgs:h-auto sms:w-[90vw] sms:h-auto items-center justify-center sms:p-2 '>
        <div className='flex flex-wrap lgs:w-full lgs:h-auto mds:w-[100vw] sms:h-auto overflow-hidden  lgs:gap-5 sms:gap-x-4 sms:pt-4 mds:gap-5 sms:gap-3 cursor-pointer justify-center sms:p-5 mds:p-5 lgs:p-3 '>
          {Autobrands.map((brand, index) => (
            <BrandCard key={index} data-aos='fade-up'>
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="w-20 h-20" style={{
                  objectFit:'contain'
                }} 
              />
              <span className="text-sm pt-2 font-poppins">{brand.name}</span>
            </BrandCard>
          ))}
        </div>
       
        </div>
        <motion.div
       initial={{opacity:0,marginLeft:'-100px'}}
       whileInView={{opacity:1,marginLeft:'0px'}}
       transition={{duration:'1.5', ease:'easeInOut', delay:'0.4'}}
       className='flex flex-row items-center justify-center h-[10vh] mt-[-2vh] sms:p-4 mds:p-2 lgs:p-10'>

        <div className='text-2xl text-baseprimary font-semibold cursor-pointer font-russoone'>
          <Link to={`/reviews`}>See more</Link></div>
        <FontAwesomeIcon icon={faArrowRightLong} className='w-10 text-baseprimary'  style={{
          
        }}/>
      </motion.div>
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
  padding-top: 10%;

  &:hover {
    box-shadow: 0 0 30px 20px rgba(0, 0, 0, 0.5);
  }
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
  width: 1200px;
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
  width: 100%;
  height: relative;
  animation: ${scrollX} 50s linear infinite;
  animation-play-state: ${({ isPaused }) => (isPaused ? 'paused' : 'running')};
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
    transform: scale(1.4);
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
      
    width: 110px;
    padding: 10px;
    font-size: 14px;
    
  }

    @media (min-width: 641px) and (max-width: 1024px) {
    width: 120px;
    font-size: 16px;
  }
`;
