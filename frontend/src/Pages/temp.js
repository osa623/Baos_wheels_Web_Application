import React from 'react';
import { Link } from 'react-router-dom';

//images
import wallpaper from '../assests/wallpaper01.jpg';
import  bwlogo from '../assests/bwlogo.png';
import bwlogo1 from '../assests/baoswheelslogo.png';
import  flywheel from '../assests/flywheel.png';
import  flywheel01 from '../assests/flywheel01.png';
//import  bwpattern from '../assests/bwpattern.png';
import  wallpaper01 from '../assests/temp01.png';

const temp = () => {
  return (
    <div className='relative flex bg-transparent w-full  h-screen overflow-hidden'>    
        <div className='absolute flex-col bottom-0 w-full  h-screen blur-sm bg-transparent opacity-100 z-30'>
            <img src={wallpaper} alt='wallpaper' className='object-cover w-full h-full animate-pulse' style={{
               MozAnimation: 'pulse 10s infinite',
            }}/>
        </div>

        <div className='absolute flex-col bottom-0 w-full  h-[100vh] bg-transparent opacity-100 z-40'>

            <div className='flex  h-[10vh] w-full items-center sms:justify-center justify-between  p-5'>
                <img src= {bwlogo1} alt='' className='object-cover   h-[2rem]'/>
                <h2 className='hidden lgs:flex mds:flex text-md font-ibmplexsans text-secondary' style={{
                                                fontWeight:'200'
                                              }}>
                     Powered by {''}<Link to={'https://neurioxit.systems'}><span className='ml-1'>Neuriox IT</span></Link>
                                              
               </h2>


            </div>

            <div className='flex  h-[40vh] w-full sms:scale-125 items-center justify-center'>

                <img src= {bwlogo} alt='bwlogo' className='object-cover  h-[20rem]  w-[20rem] z-40'/>
                <img src= {flywheel} alt='bwlogo' className='absolute object-cover animate-spin  h-[20rem]  w-[20rem] z-30'
                     style={{
                        animationTimeline:'infinite',
                        animationDuration:'5s',
                     }}
                />
                <img src= {flywheel01} alt='bwlogo' className='absolute object-cover animate-spin  h-[20rem]  w-[20rem] z-30'
                     style={{
                        animationTimeline:'infinite',
                        animationDuration:'10s',
                        animationDirection:'reverse'
                     }}
                />
                <div className='absolute bg-baseprimary  h-[15rem] blur-xl  w-[15rem] rounded-full animate-pulse z-10' style={{
                    boxShadow:'0px 0px 20px 10px rgba(153,0,102, 0.9)'
                }}/>

            </div>
            <div className='flex flex-col  h-[50vh] w-full items-center justify-center'>

                     <div className='flex  h-[20vh] sms:h-[10vh] bg-transparent w-full items-center justify-center z-30'>

                            <div className='absolute  h-[20vh] blur-2xl bg-primary w-[60vw] items-center justify-center z-30'/>
                                <div className='flex  h-[20vh] bg-transparent w-full items-center justify-center z-40'>

                                    <img src= {wallpaper01} alt='' className='object-cover  h-[20rem] sms:h-[5rem] sms:scale-90  scale-50 w-full'/>
                                  
                                </div>


 
                    </div>
                    
                    <div className='flex flex-col  h-[30vh] w-full items-center justify-center'>

                            <div className='flex  h-[10vh] w-full items-center justify-center'>

                            <div className='absolute  h-[10vh] blur-2xl bg-primary w-[30vw] items-center justify-center z-30'/>
                                            <div className='flex flex-col  h-[10vh] bg-transparent w-full items-center justify-center z-40'>
                                              
                                              <h2 className='text-md sms:w-[75vw] sms:text-center font-ibmplexsans text-secondary' style={{
                                                fontWeight:'200'
                                              }}>
                                                We’re working behind the scenes to bring you an even better experience. 
                                              
                                              </h2>
                                              <h2 className='text-4xl sms:text-2xl font-ibmplexsans text-secondary' style={{
                                                fontWeight:'200'
                                              }}>
                                               Stay tuned for exciting updates!
                                              
                                              </h2>
                                                
                                            
                                            </div>

                            </div>
                            <div className='flex flex-col  h-[20vh] w-full items-center justify-center'>

                                             <h2 className='text-sm font-ibmplexsans text-secondary' style={{
                                                fontWeight:'200'
                                              }}>
                                                Copyright 2025 © Baos Wheels. All Rights Reserved. 
                                              
                                              </h2>
                            <div className='flex h-auto w-auto sms:p-2 sms:justify-center sms:space-x-4  p-5 overflow-hidden  space-x-5 mds:space-x-5'>

                                  <Link to={'https://www.facebook.com/Baos623/'} className='bg-transparent border-blue-700 w-10 h-10 rounded-xl items-center justify-between text-primary font-russoone' data-aos='fade-up' data-aos-delay='300'> 
                                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>          
                                  </Link>
                                  <Link to={'https://www.tiktok.com/@baos_623'} className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone ' data-aos='fade-up' data-aos-delay='400'>
                                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </Link>
                                  <Link to={'https://www.instagram.com/baos.623/'} className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-up' data-aos-delay='500'>
                                  <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </Link>
                                  <Link to={'https://www.youtube.com/@baos_623'} className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-up' data-aos-delay='600'>
                                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </Link>

                            </div>
                            <h2 className='hidden sms:flex text-md sms:mt-5 font-ibmplexsans text-secondary' style={{
                                                fontWeight:'200'
                                              }}>
                                    Powered by {''}<Link to={'https://neurioxit.systems'}><span className='ml-1'>Neuriox IT</span></Link>
                                                            
                            </h2>

                            </div>   

                

                    </div>

                

            </div>
           
        </div>
      
    </div>
  )
}

export default temp
