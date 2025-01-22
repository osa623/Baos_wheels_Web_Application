import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../oth/shape.css';
import { motion } from 'framer-motion';

//import video and image files
import wallpaper from '../assests/HeroWallpaper1.png';


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


                              <div class="curved"/>

           

              


              

                        <div className='absolute flex flex-col w-auto lgs:h-[50vh] mds:h-[15rem] bottom-10 right-20 items-end justify-start lgs:space-y-2 mds:space-y-5 overflow-hidden '>
                            
                              <div className='flex flx-col w-auto h-auto'>
                                <div className='flex flex-col w-auto h-auto'>
                                
                                      <h2 className='flex font-russoone lgs:text-8xl text-primary text-shadow-xl mds:text-7xl' data-aos='fade-down' data-aos-delay='300'>
                                        Drive The {''}<span className='text-baseprimary' data-aos='fade-up' data-aos-delay='500'>{'\u00A0'}Future</span>
                                      </h2>

                                </div> 
                             </div>   
                             <div className='flex flex-col w-auto h-auto  overflow-hidden'>
                                <div className='flex flex-col w-auto h-auto'>
                                        <h2 className='flex text-end text-primary text-shadow-xl lgs:justify-end items-center justify-center font-kanit lgs:text-2xl mds:text-xl mds:w-[75vw]' data-aos='fade-left'>
                                        <div className='flex lgs:w-[10vw] mds:w-[10vw] h-[0.1rem] lgs:mr-2 bg-baseprimary'/>{''}Where Innovation Fuels Every Journey{''}<div className='flex lgs:w-[10vw] mds:w-[10vw] h-[0.1rem] lgs:ml-2 bg-baseprimary'/>
                                        </h2>

                                </div> 
                             </div>  
                            <div className='flex flex-col w-full h-auto items-end justify-center lgs:pt-5 lgs:pr-10'>     
                                <div className='flex lgs:w-[30vw] mds:w-[45vw] h-auto lgs:bottom-40 lgs:right-36 overflow-hidden'>
                                      <div className='lgs:w-[10vw] mds:w-[45vw] h-[0.4rem]  bg-baseprimary'/>
                                      <div className='lgs:w-[10vw] mds:w-[45vw] h-[0.4rem] bg-primary '/>
                                      <div className='lgs:w-[10vw] mds:w-[45vw] h-[0.4rem] bg-secondary '/>
                                </div> 
                           </div>  
                           <div className='flex h-auto w-auto sms:p-2 sms:justify-center sms:space-x-4 lgs:p-5 overflow-hidden lgs:space-x-5 mds:space-x-5'>
                           
                                                             <Link to={'https://www.facebook.com/Baos623/'} className='bg-transparent border-blue-700 w-10 h-10 rounded-xl items-center justify-between text-blue-600 font-russoone' data-aos='fade-up' data-aos-delay='300'> 
                                                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>          
                                                             </Link>
                                                             <Link to={'https://www.tiktok.com/@baos_623'} className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone ' data-aos='fade-up' data-aos-delay='400'>
                                                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                                             </Link>
                                                             <Link to={'https://www.instagram.com/baos.623/'} className='w-10 h-10 text-xl rounded-xl text-center text-pink-700 font-russoone' data-aos='fade-up' data-aos-delay='500'>
                                                             <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                                             </Link>
                                                             <Link to={'https://www.youtube.com/@baos_623'} className='w-11 h-11 text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-up' data-aos-delay='600'>
                                                             <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                                             </Link>
                           </div>      
                      </div>             

              </div>    

                
                

                
              </section>

    </main>
    
  );
};

export default NewHeroSection; 
