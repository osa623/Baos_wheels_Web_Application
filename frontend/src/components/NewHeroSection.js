import React, {useEffect} from 'react';
import wallpaper from '../assests/HeroWallpaper1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

//import video and image files

//import bgvideo from '../assests/Videofiles/final bg hero.mp4';
import bgvideo from '../assests/Videofiles/bgvideo.mp4';


const NewHeroSection = () => {  

  useEffect(() =>{

    Aos.init({
      
      duration:3000

    })

  })


  return (

    
    <main className='relative h-auto w-full'>
              <section className='flex max-w-sms mx-auto'>
                <div className='hidden sms:flex h-auto w-full'>
                  <video src={bgvideo} autoPlay loop muted playsInline/>

                  <motion.div 
                  initial={{height:'100vh'}}
                  whileInView={{height:'100vh'}}
                  transition={{duration:'2.0', ease:'easeInOut', delay:'0.3'}}
                  
                  className='absolute flex-col bottom-0 w-full  bg-secondary opacity-20 z-40'/>
                   
                    
                    <div className='absolute bottom-0 bg-gradient-to-t from-secondary to-transparent sms:h-[50vh] opacity-100 w-full items-center justify-center z-30'/>
                     <div className='absolute flex-col bottom-0 h-[30vh] w-full bg-transparent items-center justify-center z-20 space-y-5'>

                        <div className='flex h-auto w-auto items-center justify-center mx- space-x-2 mx-3'>
                            <motion.div
                            initial={{width:'0vw'}} 
                            whileInView={{width:'20vw'}}
                            transition={{duration:'2.0',ease:'easeInOut', delay:'0.4'}}
                            className='flex h-0.5 bg-primary'/>
                                <div className='flex flex-col h-auto w-auto items-center justify-center'>
                                    <h2
                                    className='flex font-russoone text-4xl text-center text-primary'>Drive the</h2>
                                    <h2 className='flex font-russoone text-5xl text-[#d874d5] text-center'>Future</h2>   
                                </div>
                                <motion.div
                            initial={{width:'0vw'}} 
                            whileInView={{width:'20vw'}}
                            transition={{duration:'2.0',ease:'easeInOut', delay:'0.4'}}
                            className='flex h-0.5 bg-primary'/>
                        </div>
                        <motion.div 
                        initial={{marginTop:'50px', opacity:'0'}}
                        whileInView={{marginTop:'5px', opacity:'1'}}
                        transition={{duration:'2.0',ease:'easeInOut', delay:'0.4'}}
                        className='flex h-[12vh] w-full items-center justify-center'>
                          <p className='flex text-center text-primary font-russoone text-sm w-[80vw] font-thin'>
                          Baos Wheels is your go-to hub for car reviews, insightful articles, and the latest trends in the automotive world. Discover, explore, and fuel your passion for all things on wheels!
                          </p>
                        </motion.div>

                     </div>
                          
                  


                  

                  
                </div>

              </section>


              <section 
                className='sms:hidden flex flex-col mds:h-auto w-full lgs:h-auto lgs:w-auto bg-secondary'>
                
                <img src={wallpaper} alt='' />
                

                
              </section>

    </main>
    
  );
};

export default NewHeroSection; 
