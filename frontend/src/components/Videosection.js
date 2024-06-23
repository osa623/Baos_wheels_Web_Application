import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Marquee from "react-fast-marquee";


//youtube thumbnails 

import supra_img from '../assests/Youtube thumbnails/supra.jpg';
import gtr_img from '../assests/Youtube thumbnails/gtr.png';
import panda_img from '../assests/Youtube thumbnails/micro_panda.jpg';
import yaris_img from '../assests/Youtube thumbnails/Yaris_img.jpg'
import charger_img from '../assests/Youtube thumbnails/superchargervsturbocharger.jpg'


//
const Videosection = () => {

  useEffect( ()=> {
    AOS.init({duration:2000});
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.tiktok.com/embed.js";
    document.body.appendChild(script);

  
  },[]);


  return (
    <div className='relative flex-grow w-full bg-baseextra1 rounded-md  hover:transition duration-1000 ease-in-out' style={{
    
    }}>

    <div className='flex flex-col h-auto items-center justify-center pt-20'>
      <div className='flex bg-baseextra3 w-[50vw] h-0.5 mt'data-aos='fade-right'/>
      <h2 className='text-6xl font-extrabold font-russoone text-primary cursor-default hover:text-baseprimary transition duration-2000 ease-in-out p-2' data-aos='fade-up'>High-Octane Showdowns</h2>
      <div className='flex bg-baseextra3 w-[50vw] h-0.5'data-aos='fade-left'/>

      <div class="whitespace-nowrap w-[60vw] mx-auto pt-5 space-x-2 text-center" data-aos="zoom-in">
  <span class="text-primary text-lg h-[70vh] font-kanit pt-5">
    Some of Our Favourite Automobile Videos from  
  </span>
  <span class="text-primary text-lg font-extrabold font-russoone">
    Baos Wheels
  </span>
</div>

    </div>


    <div className='flex flex-col items-center justify-center  h-auto w-auto pt-5 ' data-aos='zoom-in'>
      <Marquee style={{
        width:'95%',
        height:'50%',
        justifyItems: 'center',
        overflow: 'hidden'
        

      }}>
      <div className='flex flex-col w-[25vw] h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
        <img src={supra_img} alt="supta" style={{
          width:'100%',
          height: '100%',
          objectFit: 'Fill',
          borderRadius: 'inherit'

        }}/>

      </div>

      <div className='flex flex-col w-[25vw] h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
        borderRadius:'20px',
        overflow:'hidden'
      }}>

      <img src={gtr_img} alt="supta" style={{
          width:'100%',
          height: '100%',
          objectFit: 'Fill',
          borderRadius:'inherit'

        }}/>

      </div>
      <div className='flex flex-col w-[25vw] h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
      <img src={panda_img} alt="supta" style={{
          width:'100%',
          height: '100%',
          objectFit: 'Fill',
          borderRadius: 'inherit'

        }}/>

     </div>

     <div className='flex flex-col w-[25vw] h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
     <img src={yaris_img} alt="supta" style={{
          width:'100%',
          height: '100%',
          objectFit: 'Fill',
          borderRadius: 'inherit'

        }}/>


    </div>
      <div className='flex flex-col w-[25vw] h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out'style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
      <img src={charger_img} alt="supta" style={{
          width:'100%',
          height: '100%',
          objectFit: 'Fill',
          borderRadius: 'inherit'

        }}/>


     </div>

      </Marquee>
      </div> 

      <div class="whitespace-nowrap w-[60vw] mx-auto pt-5 space-x-2 text-center" data-aos="zoom-in">
  <span class="text-primary text-lg h-[70vh] font-kanit pt-5">
    Some of Our Favourite Automobile Videos from  
  </span>
  <span class="text-primary text-lg font-extrabold font-russoone">
    Baos Wheels
  </span>
</div>



  <div className='relative flex-grow h-[75vh] w-full justify-start items-start'>
  <div className='flex flex-grow h-full w-[50vw] pl-20' data-aos='fade-right'>
    <blockquote className="tiktok-embed mx-auto rounded-xl" cite="https://www.tiktok.com/@baos_623" data-unique-id="baos_623" data-embed-from="embed_page" data-embed-type="creator" style={{ maxWidth: '780px', minWidth: '288px' }}>
      <section>
        <a href="https://www.tiktok.com/@baos_623?refer=creator_embed" target="_blank" rel="noopener noreferrer">@baos_623</a>
      </section>
    </blockquote>
    <script async src="https://www.tiktok.com/embed.js"></script>
  </div>
</div>


    
    </div>
  )
}

export default Videosection;



