import React, {useEffect} from 'react';
import wallpaper from '../assests/HeroWallpaper1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NewHeroSection = () => {

  useEffect(() =>{

    Aos.init({
      
      duration:3000

    })

  })


  return (
    <div 
      className='relative h-[100vh] w-full bg-secondary'
      style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className='absolute top-0 left-0 flex flex-row h-full w-full justify-end items-center '>

      </div>
    </div>
  );
};

export default NewHeroSection; 