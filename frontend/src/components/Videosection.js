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

//youtube grid array list

const youtube = [
  {name :'Supra Story' ,path: supra_img},
  {name :'GTR Story' ,path: gtr_img,},
  {name :'Panda Story' ,path: panda_img},
  {name :'Yaris Story' ,path: yaris_img},
  {name :'Charger Story' ,path: charger_img}
  

]


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
    <div className='relative flex-grow w-full  bg-baseextra1 rounded-t-2xl  hover:transition duration-1000 ease-in-out' style={{
    
    }}>

    <div className='flex flex-col h-auto items-center justify-center pt-20 sms:pt-10 mds:p-10'>
      <h2 className='flex flex-col lgs:text-6xl sms:text-5xl mds:text-7xl mds:w-[75vw] text-center overflow-hidden sms:text-center font-extrabold font-russoone text-primary cursor-default hover:text-baseprimary transition duration-2000 ease-in-out p-2' data-aos='zoom-out'>{''}
      Rev Reels{''}<div className='bg-baseprimary mt-2 will-change-auto h-[0.15rem]' data-aos='fade-right' data-aos-delay='400'/></h2>
    
      <div class="sms:flex sms:flex-col sms:w-[90vw] lg:w-[60vw] mx-auto sms:p-4  lg:pt-5 space-x-2 items-center justify-start text-center " data-aos="zoom-in">
              <p class="text-primary lgs:text-lg h-auto sms:text-md sms:w-[75vw] font-ibmplexsans lg:pt-3 sms:pt-2 sms:text-center" style={{
                fontWeight:'300'
              }}>
              {''}Discover our top automobile videos from Baos Wheels on YouTube, featuring car reviews, mechanical insights, and the latest trends. Dive into the automotive world with our curated favorites. 
              </p>
             
</div>

    </div>

    {/*mobile responsive configs for this section */}
    <div className='hidden sms:flex flex-col items-center justify-center  h-auto w-auto pt-5 ' data-aos='zoom-in'>

        

     
      <div className='flex flex-col w-auto h-auto items-center justify-center bg-transparent m-2  hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
        <img src={supra_img} alt="supta" style={{
          width:'90%',
          height: 'auto',
          objectFit: 'Fill',
          borderRadius: 'inherit'
        }}/>

      </div>

      <div className='flex flex-col w-auto h-auto items-center justify-center bg-transparent m-2  hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
        <img src={gtr_img} alt="supta" style={{
          width:'90%',
          height: 'auto',
          objectFit: 'Fill',
          borderRadius: 'inherit'
        }}/>

      </div>
      <div className='flex flex-col w-auto h-auto items-center justify-center bg-transparent m-2  hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
        <img src={panda_img} alt="supta" style={{
          width:'90%',
          height: 'auto',
          objectFit: 'Fill',
          borderRadius: 'inherit'
        }}/>

      </div>
      <div className='flex flex-col w-auto h-auto items-center justify-center bg-transparent m-2  hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
        <img src={yaris_img} alt="supta" style={{
          width:'90%',
          height: 'auto',
          objectFit: 'Fill',
          borderRadius: 'inherit'
        }}/>

      </div>

      <div className='flex flex-col w-auto h-auto items-center justify-center bg-transparent m-2  hover:scale-110 transition duration-1000 ease-in-out' style={{
           borderRadius: '20px',
           overflow:'hidden'
      }}>
        <img src={charger_img} alt="supta" style={{
          width:'90%',
          height: 'auto',
          objectFit: 'Fill',
          borderRadius: 'inherit'
        }}/>

      </div>


      </div> 
    



    {/*larger responsive configs for this section */}
      <div className='hidden mds:flex lgs:flex  flex-col items-center justify-center  h-auto w-auto pt-5 ' data-aos='zoom-in'>
      <Marquee style={{
        width:'95%',
        height:'50%',
        justifyItems: 'center',
        overflow: 'hidden'
        

      }}>
      <div className='flex flex-col w-auto mds:h-[25vh] lgs:h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
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

      <div className='flex flex-col w-auto mds:h-[25vh] lgs:h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
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
      <div className='flex flex-col w-auto mds:h-[25vh] lgs:h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
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

     <div className='flex flex-col w-auto mds:h-[25vh] lgs:h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out' style={{
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
      <div className='flex flex-col w-auto mds:h-[25vh] lgs:h-[30vh] bg-basesecondary m-2 hover:scale-110 transition duration-1000 ease-in-out'style={{
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


<div className='relative h-full w-full'>

  {/* max-screen size - 640 : screen configs */}

  <div className='sm:hidden flex flex-col w-full items-center justify-center sms:mt-5'>

  <div className='absolute w-full bottom-0 h-[20vh] bg-gradient-to-t from-baseprimary to-transparent'/>

  <div className='flex flex-col w-full h-auto items-center justify-start p-4 space-y-5 z-30'>
                <h2 className='flex flex-col text-5xl font-russoone  text-primary mb-4 text-center overflow-hidden' data-aos='zoom-out'>
                  Tiktok Reels{''}<div className='bg-baseprimary h-[0.15rem] will-change-auto' data-aos='fade-right' data-aos-delay='700'/>
                </h2>
                <p className='text-md text-center w-[75vw] text-primary font-ibmplexsans' data-aos='fade-up' fade-aos-delay='20'>
               {''}Baos Wheels brings you engaging auto mechanical videos on TikTok. We offer in-depth mechanical explanations, detailed car reviews, insights into the latest inventions, and record-breaking information in the auto industry. Stay informed and entertained with the newest trends and developments in the world of automobiles.
                </p>
                <div className='grid grid-cols-2 gap-y-6 gap-x-8 w-auto h-auto items-center justify-center p-2'>
                      <button class="group relative h-12 w-30 overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='100'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Car Tech</span>
                      </button>
                      <button class="group relative h-12 w-40 overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='150'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Strange Cars</span>
                      </button>
                      <button class="group relative h-12 w-30 overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='200'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Stories</span>
                      </button>
                      <button class="group relative h-12 w-30 overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='250'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Engine's Roar</span>
                      </button>
                      <button class="group relative h-12 w-30 overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='300'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Mercedes Benz</span>
                      </button>
                      <button class="group relative h-12 w-30 overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='350'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Ferrari</span>
                      </button>

                </div>
</div>

    <div className='grid grid-cols-1 w-auto h-auto justify-start items-start '>
      {/* TikTok embed HTML */}
      <div className='flex w-auto h-full scale-100 hover:scale-90 transition duration-500'>
        <blockquote className="tiktok-embed mx-auto rounded-2xl" cite="https://www.tiktok.com/@baos_623/video/7382543004868922642" data-aos='zoom-in' data-aos-duration='5000' data-aos-delay='100' data-video-id="7382543004868922642" style={{ maxWidth: '605px', minWidth: '325px' }}>
          <section>
            <a target="_blank"  rel="noopener noreferrer" title="@baos_623" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a> Hybrid Technology ගැන කෙටියෙන් 💥⚙️🚗
            <a title="hybrid"  rel="noopener noreferrer"target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="technology" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a>
            <a title="cars" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#cars</a>
            <a title="battery" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/battery?refer=embed">#battery</a>
            <a title="engine" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="fuel" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/fuel?refer=embed">#fuel</a>
            <a title="efficiency" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/efficiency?refer=embed">#efficiency</a>
            <a title="energy" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/energy?refer=embed">#energy</a>
            <a title="saving" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/saving?refer=embed">#saving</a>
            <a title="how" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="toyota" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="prius" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/prius?refer=embed">#prius</a>
            <a title="mitsubishi" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/mitsubishi?refer=embed">#mitsubishi</a>
            <a title="outlander" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/outlander?refer=embed">#outlander</a>
            <a title="phev" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/phev?refer=embed">#phev</a>
            <a title="plug" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/plug?refer=embed">#plug</a>
            <a title="in" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/in?refer=embed">#in</a>
            <a title="hybrid" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="baoswheels" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="japan" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a>
            <a title="srilanka" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="cartech" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/cartech?refer=embed">#cartech</a>
            <a title="fyp" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="foryou" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a>
            <a title="trending" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engineering" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/engineering?refer=embed">#engineering</a>
            <a title="shorts" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/shorts?refer=embed">#shorts</a>
            <a title="viral" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="tech" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/tech?refer=embed">#tech</a>
            <a title="car" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="brake" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/brake?refer=embed">#brake</a>
            <a title="comfortable" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/comfortable?refer=embed">#comfortable</a>
            <a title="carreview" rel="noopener noreferrer" target="_blank" href="https://www.tiktok.com/tag/carreview?refer=embed">#carreview</a>
            <a target="_blank" rel="noopener noreferrer" title="♬ original sound - Baos Wheels" href="https://www.tiktok.com/music/original-sound-7382543070937533185?refer=embed">♬ original sound - Baos Wheels</a>
          </section>
        </blockquote>
      </div>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>

    <div className='flex flex-col items-center justify-center w-full h-auto p-2 z-40'>
    <button class="group relative h-12 w-[50vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='350'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">See more</span>
    </button> 
    </div>


  </div>
  

  
  

  {/*max screen size -1024 and min-screen size - 640 : screen configs */}
  <div className='hidden mds:flex lgs:flex flex-grow w-full items-start justify-start'>
    <div className='flex flex-row w-[60vw]  lgs:h-auto lgs:justify-start lgs:items-start mds:justify-center mds:items-center'>
      

      {/* Rendering TikTok videos */}

      {/* TikTok embed HTML */}
      <div className='mds:hidden flex w-[20vw] h-auto scale-75 hover:scale-90 transition duration-500'>
        <blockquote className="tiktok-embed mx-auto full rounded-2xl" cite="https://www.tiktok.com/@baos_623/video/7382543004868922642" data-aos='zoom-in' data-aos-duration='5000' data-aos-delay='100' data-video-id="7382543004868922642" style={{ maxWidth: '605px', minWidth: '325px' }}>
          <section>
            <a target="_blank" rel="noopener noreferrer" title="@baos_623" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a> Hybrid Technology ගැන කෙටියෙන් 💥⚙️🚗
            <a title="hybrid" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="technology" target="blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a>
            <a title="cars" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/cars?refer=embed">#cars</a>
            <a title="battery" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/battery?refer=embed">#battery</a>
            <a title="engine" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="fuel" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/fuel?refer=embed">#fuel</a>
            <a title="efficiency" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/efficiency?refer=embed">#efficiency</a>
            <a title="energy" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/energy?refer=embed">#energy</a>
            <a title="saving" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/saving?refer=embed">#saving</a>
            <a title="how" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="toyota" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="prius" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/prius?refer=embed">#prius</a>
            <a title="mitsubishi" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/mitsubishi?refer=embed">#mitsubishi</a>
            <a title="outlander" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/outlander?refer=embed">#outlander</a>
            <a title="phev" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/phev?refer=embed">#phev</a>
            <a title="plug" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/plug?refer=embed">#plug</a>
            <a title="in" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/in?refer=embed">#in</a>
            <a title="hybrid" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="baoswheels" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="japan" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a>
            <a title="srilanka" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="cartech" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/cartech?refer=embed">#cartech</a>
            <a title="fyp" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="foryou" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a>
            <a title="trending" target="_blank" rel="noopener noreferrer"   href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engineering" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/engineering?refer=embed">#engineering</a>
            <a title="shorts" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/shorts?refer=embed">#shorts</a>
            <a title="viral" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="tech" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/tech?refer=embed">#tech</a>
            <a title="car" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="brake" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/brake?refer=embed">#brake</a>
            <a title="comfortable" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/comfortable?refer=embed">#comfortable</a>
            <a title="carreview" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/carreview?refer=embed">#carreview</a>
            <a target="_blank" rel="noopener noreferrer" title="♬ original sound - Baos Wheels" href="https://www.tiktok.com/music/original-sound-7382543070937533185?refer=embed">♬ original sound - Baos Wheels</a>
          </section>
        </blockquote>
      </div>

      <div className='mds:hidden flex w-[20vw] h-auto scale-75 hover:scale-90 transition duration-500'>
   <blockquote className="tiktok-embed mx-auto full rounded-2xl" data-aos='zoom-in' data-aos-duration='5000' data-aos-delay='100' style={{ maxWidth: '605px', minWidth: '325px' }} cite="https://www.tiktok.com/@baos_623/video/7353235188513525010" data-video-id="7353235188513525010" data-embed-from="embed_page">
      <section>
         <a target="_blank" title="@baos_623" rel="noopener noreferrer"  href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a>
         <p>Formula one ගැන කෙටියෙන් ⚙️💥
            <a title="formula1" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/formula1?refer=embed">#formula1</a> 
            <a title="formulaone" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/formulaone?refer=embed">#formulaone</a>
            <a title="formula" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/formula?refer=embed">#formula</a>
            <a title="formula1car" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/formula1car?refer=embed">#formula1car</a>
            <a title="mercedesbenz" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/mercedesbenz?refer=embed">#mercedesbenz</a>
            <a title="petronas" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/petronas?refer=embed">#petronas</a>
            <a title="redbull" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/redbull?refer=embed">#redbull</a>
            <a title="redbullracing" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/redbullracing?refer=embed">#redbullracing</a>
            <a title="lewishamilton" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/lewishamilton?refer=embed">#lewishamilton</a>
            <a title="maxverstappen" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/maxverstappen?refer=embed">#maxverstappen</a>
            <a title="grand" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/grand?refer=embed">#grand</a>
            <a title="prix" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/prix?refer=embed">#prix</a>
            <a title="formula2" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/formula2?refer=embed">#formula2</a>
            <a title="baharain" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/baharain?refer=embed">#baharain</a>
            <a title="2024" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/2024?refer=embed">#2024</a>
            <a title="champion" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/champion?refer=embed">#champion</a>
            <a title="ferrari" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/ferrari?refer=embed">#ferrari</a>
            <a title="georgerussell" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/georgerussell?refer=embed">#georgerussell</a>
            <a title="charlesleclerc" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/charlesleclerc?refer=embed">#charlesleclerc</a>
            <a title="sergioperez" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/sergioperez?refer=embed">#sergioperez</a>
            <a title="astonmartin" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/astonmartin?refer=embed">#astonmartin</a>
            <a title="how" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="mclaren" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/mclaren?refer=embed">#mclaren</a>
            <a title="baoswheels" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="srilanka" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="fyp" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="fypシ" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/fyp%E3%82%B7?refer=embed">#fypシ</a>
            <a title="trending" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engine" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="viralvideo" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/viralvideo?refer=embed">#viralvideo</a>
            <a title="amg" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/amg?refer=embed">#amg</a>
            <a title="sainz" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/sainz?refer=embed">#sainz</a>
            <a title="uk" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/uk?refer=embed">#uk</a>
            <a title="racing" target="_blank" rel="noopener noreferrer"  href="https://www.tiktok.com/tag/racing?refer=embed">#racing</a>
            <a title="racecar" target="_blank"  rel="noopener noreferrer" href="https://www.tiktok.com/tag/racecar?refer=embed">#racecar</a>
         </p>
         <a target="_blank" title="♬ original sound - Baos Wheels" rel="noopener noreferrer" href="https://www.tiktok.com/music/original-sound-7353235228963932945?refer=embed">♬ original sound - Baos Wheels</a>
      </section>
   </blockquote>
      </div>
      <div className='flex lgs:w-[20vw] h-auto scale-75 hover:scale-90 transition duration-500' >
      <blockquote className="tiktok-embed mx-auto full rounded-2xl" cite="https://www.tiktok.com/@baos_623/video/7356950729975762194" data-video-id="7356950729975762194" data-embed-from="embed_page" style={{ maxWidth: '605px', minWidth: '325px' }}>
      <section>
         <a target="_blank" title="@baos_623" rel="noopener noreferrer" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a>
         <p>Engine Cooling System එක ගැන කෙටියෙන් 🥶⚙️
            <a title="engine" target="_blank"  rel="noopener noreferrer"href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a> 
            <a title="cooling" target="_blank"  rel="noopener noreferrer"href="https://www.tiktok.com/tag/cooling?refer=embed">#cooling</a>
            <a title="system" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/system?refer=embed">#system</a>
            <a title="how" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="foryoupage" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a>
            <a title="learnontiktok" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/learnontiktok?refer=embed">#learnontiktok</a>
            <a title="auto" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/auto?refer=embed">#auto</a>
            <a title="mechanic" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/mechanic?refer=embed">#mechanic</a>
            <a title="auto" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/auto?refer=embed">#auto</a>
            <a title="tips" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/tips?refer=embed">#tips</a>
            <a title="fyp" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="viral" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="viralvideo" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/viralvideo?refer=embed">#viralvideo</a>
            <a title="baoswheels" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="mercedes" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/mercedes?refer=embed">#mercedes</a>
            <a title="mclaren" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/mclaren?refer=embed">#mclaren</a>
            <a title="ferrari" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/ferrari?refer=embed">#ferrari</a>
            <a title="jaguar" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/jaguar?refer=embed">#jaguar</a>
            <a title="bmw" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/bmw?refer=embed">#bmw</a>
            <a title="car" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="toyota" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="lexus" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/lexus?refer=embed">#lexus</a>
            <a title="honda" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/honda?refer=embed">#honda</a>
            <a title="srilanka" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="colombo" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/colombo?refer=embed">#colombo</a>
            <a title="drive" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/drive?refer=embed">#drive</a>
            <a title="carmods" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/carmods?refer=embed">#carmods</a>
            <a title="foryoupage" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/foryoupage?refer=embed">#foryoupage</a>
            <a title="fypシ" target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/tag/fyp%E3%82%B7?refer=embed">#fypシ</a>
         </p>
         <a target="_blank" title="♬ original sound - Baos Wheels" rel="noopener noreferrer" href="https://www.tiktok.com/music/original-sound-7356950739054234881?refer=embed">♬ original sound - Baos Wheels</a>
      </section>
   </blockquote>
      </div>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>

    <div className='flex flex-col w-[40vw] lgs:h-auto mds:h-auto items-center justify-start p-8 mds:space-y-5 lgs:space-y-5'>
                <h2 className='flex flex-col text-5xl font-russoone text-primary mb-4 text-center overflow-hidden'>
                  Our Tiktok Gallery{''}<div className='bg-baseprimary h-[0.15rem] mt-1 will-change-auto' data-aos='fade-left' data-aos-delay='500'/>
                </h2>
                <p className='text-md text-center w-full lgs:w-[25vw] text-primary font-ibmplexsans' style={{fontWeight:'300'}}>
                {''}Baos Wheels brings you engaging auto mechanical videos on TikTok. We offer in-depth mechanical explanations, detailed car reviews, insights into the latest inventions, and record-breaking information in the auto industry. Stay informed and entertained with the newest trends and developments in the world of automobiles.
                </p>
                <div className='flex flex-col w-full h-auto  mt-4 items-center justify-center space-y-4 lgs:p-4 mds:p-5'>
                      <button class="group relative h-12 mds:w-48 lgs:w-[20vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='100'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Car Tech</span>
                      </button>
                      <button class="group relative h-12 mds:w-48 lgs:w-[20vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='150'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Strange Cars</span>
                      </button>
                      <button class="group relative h-12 mds:w-48 lgs:w-[20vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='200'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Stories</span>
                      </button>
                      <button class="group relative h-12 mds:w-48 lgs:w-[20vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='250'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Engine's Roar</span>
                      </button>
                      <button class="group relative h-12 mds:w-48 lgs:w-[20vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='300'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Mercedes Benz</span>
                      </button>
                      <button class="group relative h-12 mds:w-48 lgs:w-[20vw] overflow-hidden rounded-xl bg-white text-lg shadow" data-aos='flip-left' data-aos-delay='350'>
                          <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                          <span class="relative text-black group-hover:text-white">Ferrari</span>
                      </button>

                </div>
</div>


  </div>
</div>



    
    </div>
  )
}

export default Videosection;



