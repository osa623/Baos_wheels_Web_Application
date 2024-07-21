import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'

const Articlesec = () => {
useEffect(()=>{
    Aos.init(
        {
            duration:'2000'
        }
    );

    
}, []);


  return (
    <div className='relative h-auto w-auto'>

      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start'>
        <div className='flex md:h-[10vh] sms:h-[5vh]   w-full items-center justify-center' />
        
        <div className='flex flex-col h-[20vh] w-full items-center justify-center'>
          <div className='flex md:w-[30vw] sms:w-[50vw] h-0.5 bg-secondary' data-aos='fade-right' />
          <h2 className='flex text-6xl sms:text-7xl font-russoone text-baseextra4' data-aos='flip-up'>Articles</h2>
          <div className='flex md:w-[30vw] sms:w-[50vw] h-0.5 bg-secondary' data-aos='fade-left' />
        </div>

        <div className='flex flex-col h-auto w-full items-center justify-center'>
            <p className='flex h-autp w-auto '></p>
        </div>
        </div>
        </div>
  )
}

export default Articlesec
