import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled, { keyframes, css } from "styled-components";



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
    { url: "https://example.com/page1", src: mercedesbenz },
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
        <div className='flex flex-col h-[30vh] w-full items-center justify-center mb-10'>
          <div className='flex flex-col h-[10vh] w-[50vw] items-center justify-center '>
            <div className='flex h-0.5 w-[50vw] bg-black cursor-default' data-aos='fade-right'></div>
            <h2 className='text-6xl font-russoone text-baseextra1' data-aos='fade-up'>Reviews</h2>
            <div className='flex h-0.5 w-[50vw] bg-black cursor-default' data-aos='fade-left'></div>
            </div>  
            <p className='text-m text-baseextra1 font-kanit w-[60vw] h-inherit mb-5 mt-5 text-center' data-aos='zoom-in'
            style={{
              fontWeight: 500
            }}>Welcome to our Car Reviews section! Here, you'll find detailed and easy-to-understand reviews of various cars. We cover everything from speed and safety to comfort and technology. Whether you're interested in a car that's fast, safe, or packed with the latest features, our reviews will help you make an informed decision. Read insights from our experts and real car owners, and discover the perfect car for you today</p>

        </div>
        <Note data-aos='zoom-in'>Explore by Vehicle Type</Note>
        <Marquee>
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

        <div className='flex flex-col w-auto items-center justify-center'>
          <Note data-aos='zoom-out'>Explore by Brand Names</Note>
        </div>
        <div className='flex lg:w-[95vw] lg:h-[30vh] sm:w-[20vw] sm:h-[50vh] items-center justify-center'>
        <div className='flex flex-wrap lg:w-inherit  gap-5 cursor-pointer'>
          {Autobrands.map((brand, index) => (
            <BrandCard key={index} data-aos='fade-up'>
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="w-16 h-16" style={{
                  objectFit:'contain'
                }} 
              />
              <span className="text-sm pt-2 font-poppins">{brand.name}</span>
            </BrandCard>
          ))}
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
  height: 100vh;
  background-color: #FFFFFF;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.4s ease;

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
  width: 100px;
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
`;
