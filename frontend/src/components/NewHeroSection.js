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

    
    <main className='relative h-auto w-full'>
              <section className='max-w-sms mx-auto'>
                <div className='flex h-auto w-full pb-5'>
                  <div className='flex h-[50vh] w-full bg-baseprimary'></div>

                  
                </div>

              </section>


              <section 
                className='hidden md:flex h-[100vh] w-full bg-secondary'
                style={{ backgroundImage: `url(${wallpaper})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                <div className='absolute top-0 left-0 flex flex-row h-full w-full justify-end items-center '>

                </div>
              </section>

    </main>
    
  );
};

export default NewHeroSection; 
