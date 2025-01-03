import React, {useEffect} from 'react';
import wallpaper from '../assests/HeroWallpaper.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../oth/shape.css';
import { motion } from 'framer-motion';

//import video and image files

//import bgvideo from '../assests/Videofiles/final bg hero.mp4';
import bgvideo from '../assests/Videofiles/bgvideo.mp4';
import SnowEffect from '../oth/SnowEffect';


const NewHeroSection = () => {  

  useEffect(() =>{

    Aos.init({
      
      duration:3000

    })

  })


  return (

    
    <main className='relative h-auto w-full overflow-hidden'>
              <section className='flex flex-col  max-w-sms mx-auto'>
                <div className='hidden sms:flex h-auto w-full overflow-hidden'>
                  <video src={bgvideo} autoPlay loop muted playsInline/>

                  


                  <motion.div 
                  initial={{height:'200vh'}}
                  whileInView={{height:'200vh'}}
                  transition={{duration:'2.0', ease:'easeInOut', delay:'0.3'}}
                  
                  className='absolute flex-col bottom-0 w-full bg-transparent opacity-20 z-30'/>
                    <div className='absolute flex-col bottom-0 w-full bg-transparent opacity-60 z-40'>
                    <SnowEffect/>
                    </div>

                   
                    
                    <div className='absolute bottom-0 bg-gradient-to-t from-secondary to-transparent sms:h-[50vh] opacity-100 w-full items-center justify-center'/>
                    <div className='absolute bottom-0 bg-gradient-to-t from-secondary to-transparent sms:h-[50vh] opacity-50 w-full items-center justify-center z-40'/>
                  
                     <div className='absolute flex-col bottom-0 h-[30vh] w-full bg-transparent items-center justify-center z-20 space-y-5 overflow-hidden'>

                        <div className='flex h-auto w-auto items-center justify-center mx- space-x-2 mx-3 opacity-50 overflow-hidden'>

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
                          <p className='flex text-center text-primary font-ibmplexsans text-sm w-[80vw] opacity-50' style={{
                            fontWeight:'300'
                          }}>
                          Baos Wheels is your go-to hub for car reviews, insightful articles, and the latest trends in the automotive world. Discover, explore, and fuel your passion for all things on wheels!
                          </p>
                        </motion.div>

                     </div>
                  
                </div>



              </section>


              <section 
                className='hidden mds:flex lgs:flex flex-col mds:h-auto w-full lgs:h-auto lgs:w-auto bg-secondary'>

              <div className='flex lgs:w-full lgs:h-[80vh] mds:w-[100vw] mds:h-[25rem]' style={{
                  backgroundImage: `url(${wallpaper})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundAttachment:'scroll'

              }}> 


              <div className='hidden lgs:flex mds:flex w-full h-screen overflow-hidden'>
                <SnowEffect/>
              </div>  
                              <div class="curved"/>

           

              


              

                        <div className='absolute flex flex-col w-auto lgs:h-[50vh] mds:h-[15rem] bottom-10 right-20 items-end justify-start lgs:space-y-2 mds:space-y-5 overflow-hidden '>
                            
                              <div className='flex flx-col w-auto h-auto'>
                              <div className='flex flex-col w-auto h-auto'>
                               
                                    <h2 className='flex font-russoone lgs:text-8xl mds:text-7xl' data-aos='fade-down' data-aos-delay='300'>
                                      Drive The {''}<span className='text-baseprimary' data-aos='fade-up' data-aos-delay='500'>{'\u00A0'}Future</span>
                                    </h2>

                                </div> 
                            </div>   
                            <div className='flex flex-col w-auto h-auto  overflow-hidden'>
                              <div className='flex flex-col w-auto h-auto'>
                                        <p className='flex text-end text-secondary font-ibmplexsans lgs:text-lg mds:text-xs lgs:w-[40vw] mds:w-[50vw]' data-aos='fade-left'>
                                        Baos Wheels is where car enthusiasts gather for detailed reviews, insightful articles, and the latest trends in the automotive world. Whether you're diving into cutting-edge technology, staying updated on industry developments, or fueling your passion for cars, Baos Wheels has everything you need to stay informed and inspired. Explore the thrill of the automotive world with us!
                                        </p>

                                </div> 
                            </div>  
                          <div className='flex flex-col w-full h-auto items-end justify-center lgs:pt-5 lgs:pr-10'>     
                            <div className='flex lgs:w-[30vw] mds:w-[45vw] h-auto lgs:bottom-40 lgs:right-36 overflow-hidden'>
                                  <div className='lgs:w-[10vw] mds:w-[45vw] h-[0.4rem]  bg-baseprimary'/>
                                  <div className='lgs:w-[10vw] mds:w-[45vw] h-[0.4rem] bg-primary '/>
                                  <div className='lgs:w-[10vw] mds:w-[45vw] h-[0.4rem] bg-secondary '/>
                            </div> 
                        </div>        
                     </div>             

              </div>    

                
                

                
              </section>

    </main>
    
  );
};

export default NewHeroSection; 
