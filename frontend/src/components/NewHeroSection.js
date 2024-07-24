import React, {useEffect} from 'react';
import wallpaper from '../assests/HeroWallpaper1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

//import video and image files

import bgvideo from '../assests/Videofiles/final bg hero.mp4'

const NewHeroSection = () => {  

  useEffect(() =>{

    Aos.init({
      
      duration:3000

    })

  })


  return (

    
    <main className='relative h-auto w-full'>
              <section className='sm:hidden max-w-sms mx-auto'>
                <div className='flex h-auto w-full'>
                  <video src={bgvideo} autoPlay loop muted playsInline/>

                  <motion.div 
                  initial={{height:'0vh'}}
                  whileInView={{height:'100vh'}}
                  transition={{duration:'2.0', ease:'easeInOut', delay:'0.3'}}
                  
                  className='absolute bottom-0 w-full  bg-secondary opacity-70'>
                   
                   



                  </motion.div>

                  
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
