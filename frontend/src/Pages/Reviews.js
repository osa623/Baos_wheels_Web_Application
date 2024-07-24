import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

// Brand Logos
import mercedesbenz from '../assests/Brand Logos/Mercedes_benz.png';
import bmw from '../assests/Brand Logos/bmw.png';
import audi from '../assests/Brand Logos/audi.png';
import nissan from '../assests/Brand Logos/nissan.png';
import honda from '../assests/Brand Logos/honda.png';
import mitsubhishi from '../assests/Brand Logos/mitsubhishi.png';
import rangerover from '../assests/Brand Logos/range_rover.png';
import tesla from '../assests/Brand Logos/tesla.png';
import toyota from '../assests/Brand Logos/toyota.png';
import mazda from '../assests/Brand Logos/mazda.png';

const Reviews = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,
    });
  }, []);

  const Autobrands = [
    { name: 'Audi', logo: audi },
    { name: 'BMW', logo: bmw },
    { name: 'Honda', logo: honda },
    { name: 'Mazda', logo: mazda },
    { name: 'Mercedes', logo: mercedesbenz },
    { name: 'mitsubhishi', logo: mitsubhishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota },
    { name: 'Audi', logo: audi },
    { name: 'BMW', logo: bmw },
    { name: 'Honda', logo: honda },
    { name: 'Mazda', logo: mazda },
    { name: 'Mercedes', logo: mercedesbenz },
    { name: 'mitsubhishi', logo: mitsubhishi },
    { name: 'Nissan', logo: nissan },
    { name: 'Range Rover', logo: rangerover },
    { name: 'Tesla', logo: tesla },
    { name: 'Toyota', logo: toyota },
  ];

  const bodystyle =[

    { name:'Hatchback', logo: bmw},
    { name: 'Sedan', logo: bmw },
    { name: 'SUV', logo: honda },
    { name: 'Crossover', logo: mazda },
    { name: 'Wagon', logo: mercedesbenz },
    { name: 'Mini', logo: mitsubhishi },


  ]

  return (
    <div className='relative w-full h-auto'>
      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start'>
        <div className='flex md:h-[10vh] sms:h-[5vh]   w-full items-center justify-center' />
        <div className='flex flex-col h-[20vh] w-full items-center justify-center'>
          <div className='flex w-[30vw] h-0.5 bg-secondary' data-aos='fade-right' />
          <h2 className='flex text-6xl sms:text-7xl font-russoone text-baseextra4' data-aos='flip-up'>Reviews</h2>
          <div className='flex w-[30vw] h-0.5 bg-secondary' data-aos='fade-left' />
        </div>

        <p className='flex flex-col w-[70vw] sms:w-[90vw] h-auto text-wrap text-m font-kanit text-secondary text-center sms:m-4 m-2' data-aos='zoom-in'>
          Explore the world of automobiles with Baos Wheels' comprehensive Review Section. Our mission is to provide you with detailed, impartial, and insightful evaluations of the latest and most sought-after vehicles on the market. We delve deep into every aspect of each car, from performance and features to comfort and reliability, ensuring you have all the information you need to make an informed decision.
        </p>

        <div className='sm:hidden flex sms:h-[5vh]   w-full items-center justify-center' />

        <div className='flex flex-col w-full h-auto items-center justify-center'>
          <h2 className='text-2xl font-russoone text-baseextra4 m-2' data-aos='zoom-in'>Explore by Brand Names</h2>

         <div className='flex w-full h-auto items-center justify-center p-5'>
          <div className='lg:flex flex-row flex-wrap sms:grid grid-cols-3 gap-x-2 lg:w-full h-auto gap-3 cursor-pointer justify-center items-center'>
            {Autobrands.map((brand, index) => (
              <div className='flex flex-col w-[10vw] sms:w-[25vw] sms:h-[15vh] items-center h-[20vh] justify-center rounded-lg space-y-3 border-gray-200 bg-primary p-5 m-2 border-2 hover:border-baseprimary hover:border-1 transition-transform' key={index} data-aos='flip-up'
              style={{
                transitionDuration:20
              }}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-16 scale-100 p-1"
                  style={{
                    objectFit: 'contain'}}/>
                <span className="text-sm sms:text-sm pt-2 sms:w-[20vw] font-kanit text-center" style={{
                  
                }}>{brand.name}</span>
              </div>
            ))}
          </div>
          </div>  



              <h2 className='text-2xl font-russoone text-baseextra4 m-6' data-aos='zoom-out'>Explore by Body Styles</h2>

              <div className='flex flex-row flex-wrap w-full h-auto gap-4 justify-center items-center cursor-pointer'>
                {bodystyle.map((bstyle, index) =>(
                  <div className='flex flex-col w-[10vw] items-center justify-center rounded-lg bg-primary p-5 m-3 border-2 hover: scale-120 transition-transform' key={index} data-aos='flip-right'
                  style={{
                    transform: 0.5
                  }}>
                    <img
                      src={bstyle.logo}
                      alt={bstyle.name}
                      className="w-16 h-16"
                      style={{
                        objectFit: 'contain'}}/>
                    <span className="text-sm pt-2 font-poppins">{bstyle.name}</span>
                  </div>
                ))}
              </div>

        </div>
      </div>

      {/*Reviews previewing section*/}
      <div className='flex w-full h-auto bg-transparent'>



      </div>
    </div>
  );
};

export default Reviews;
