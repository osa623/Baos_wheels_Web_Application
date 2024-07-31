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
    <div className='relative flex-grow w-full  bg-baseextra1 rounded-t-md  hover:transition duration-1000 ease-in-out' style={{
    
    }}>

    <div className='flex flex-col h-auto items-center justify-center pt-20 sms:pt-10 mds:p-10'>
      <div className='flex bg-baseextra3 w-[50vw] h-0.5 mt'data-aos='fade-right'/>
      <h2 className='lgs:text-6xl sms:text-6xl mds:text-7xl mds:w-[75vw] text-center sms:text-center font-extrabold font-russoone text-primary cursor-default hover:text-baseprimary transition duration-2000 ease-in-out p-2' data-aos='flip-up'>High-Octane Showdowns</h2>
      <div className='flex bg-baseextra3 w-[50vw] h-0.5'data-aos='fade-left'/>

      <div class="sms:flex sms:flex-col sms:w-[90vw] lg:w-[60vw] mx-auto sms:p-4  lg:pt-5 space-x-2 items-center justify-start text-center " data-aos="zoom-in">
              <p class="text-primary lgs:text-lg h-auto sms:text-sm sms:w-[75vw] font-kanit lg:pt-5 sms:pt-2 sms:text-center">
              {''}<span className='font-thin text-2xl'>Discover</span>{''} our top automobile videos from Baos Wheels on YouTube, featuring car reviews, mechanical insights, and the latest trends. Dive into the automotive world with our curated favorites. 
              </p>
             
</div>

    </div>

    {/*mobile responsive configs for this section */}

    <div className='sm:hidden flex flex-col w-full h-auto p-4'>

        <div className='grid grid-cols-1 gap-2 gap-y-5 p-1'>
          {youtube.map((yt, index) =>(
            <div className='flex w-auto h-auto items-center justify-center border-2 rounded-lg' key={index}  data-aos='fade-up' data-aos-delay='100s'>

                <img src={yt.path}
                     alt={yt.name}
                     className='lgs:w-50 lgs:h-auto mds:w-auto rounded-lg' style={{
                      objectFit:'contain'
                     }}/>

            </div>
          ))}
        </div>

    </div>


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

  <div className='sm:hidden flex flex-col w-full items-center justify-center'>

  <div className='absolute w-full bottom-0 h-[20vh] bg-gradient-to-t from-baseprimary to-transparent'/>

  <div className='flex flex-col w-full h-auto items-center justify-start p-4 space-y-5 z-30'>
                <h2 className='text-5xl font-russoone  text-primary mb-4 text-center' data-aos='zoom-out'>
                  Our Tiktok Gallery
                </h2>
                <p className='text-md text-center w-[75vw] text-primary font-kanit' data-aos='fade-up' fade-aos-delay='20'>
               {''}<span className='font-thin text-primary text-2xl pr-1'>Baos Wheels</span> {' '} brings you engaging auto mechanical videos on TikTok. We offer in-depth mechanical explanations, detailed car reviews, insights into the latest inventions, and record-breaking information in the auto industry. Stay informed and entertained with the newest trends and developments in the world of automobiles.
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
            <a target="_blank" title="@baos_623" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a> Hybrid Technology ගැන කෙටියෙන් 💥⚙️🚗
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="technology" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a>
            <a title="cars" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#cars</a>
            <a title="battery" target="_blank" href="https://www.tiktok.com/tag/battery?refer=embed">#battery</a>
            <a title="engine" target="_blank" href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="fuel" target="_blank" href="https://www.tiktok.com/tag/fuel?refer=embed">#fuel</a>
            <a title="efficiency" target="_blank" href="https://www.tiktok.com/tag/efficiency?refer=embed">#efficiency</a>
            <a title="energy" target="_blank" href="https://www.tiktok.com/tag/energy?refer=embed">#energy</a>
            <a title="saving" target="_blank" href="https://www.tiktok.com/tag/saving?refer=embed">#saving</a>
            <a title="how" target="_blank" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="toyota" target="_blank" href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="prius" target="_blank" href="https://www.tiktok.com/tag/prius?refer=embed">#prius</a>
            <a title="mitsubishi" target="_blank" href="https://www.tiktok.com/tag/mitsubishi?refer=embed">#mitsubishi</a>
            <a title="outlander" target="_blank" href="https://www.tiktok.com/tag/outlander?refer=embed">#outlander</a>
            <a title="phev" target="_blank" href="https://www.tiktok.com/tag/phev?refer=embed">#phev</a>
            <a title="plug" target="_blank" href="https://www.tiktok.com/tag/plug?refer=embed">#plug</a>
            <a title="in" target="_blank" href="https://www.tiktok.com/tag/in?refer=embed">#in</a>
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="baoswheels" target="_blank" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="japan" target="_blank" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a>
            <a title="srilanka" target="_blank" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="cartech" target="_blank" href="https://www.tiktok.com/tag/cartech?refer=embed">#cartech</a>
            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a>
            <a title="trending" target="_blank" href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engineering" target="_blank" href="https://www.tiktok.com/tag/engineering?refer=embed">#engineering</a>
            <a title="shorts" target="_blank" href="https://www.tiktok.com/tag/shorts?refer=embed">#shorts</a>
            <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="tech" target="_blank" href="https://www.tiktok.com/tag/tech?refer=embed">#tech</a>
            <a title="car" target="_blank" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="brake" target="_blank" href="https://www.tiktok.com/tag/brake?refer=embed">#brake</a>
            <a title="comfortable" target="_blank" href="https://www.tiktok.com/tag/comfortable?refer=embed">#comfortable</a>
            <a title="carreview" target="_blank" href="https://www.tiktok.com/tag/carreview?refer=embed">#carreview</a>
            <a target="_blank" title="♬ original sound - Baos Wheels" href="https://www.tiktok.com/music/original-sound-7382543070937533185?refer=embed">♬ original sound - Baos Wheels</a>
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
            <a target="_blank" title="@baos_623" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a> Hybrid Technology ගැන කෙටියෙන් 💥⚙️🚗
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="technology" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a>
            <a title="cars" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#cars</a>
            <a title="battery" target="_blank" href="https://www.tiktok.com/tag/battery?refer=embed">#battery</a>
            <a title="engine" target="_blank" href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="fuel" target="_blank" href="https://www.tiktok.com/tag/fuel?refer=embed">#fuel</a>
            <a title="efficiency" target="_blank" href="https://www.tiktok.com/tag/efficiency?refer=embed">#efficiency</a>
            <a title="energy" target="_blank" href="https://www.tiktok.com/tag/energy?refer=embed">#energy</a>
            <a title="saving" target="_blank" href="https://www.tiktok.com/tag/saving?refer=embed">#saving</a>
            <a title="how" target="_blank" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="toyota" target="_blank" href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="prius" target="_blank" href="https://www.tiktok.com/tag/prius?refer=embed">#prius</a>
            <a title="mitsubishi" target="_blank" href="https://www.tiktok.com/tag/mitsubishi?refer=embed">#mitsubishi</a>
            <a title="outlander" target="_blank" href="https://www.tiktok.com/tag/outlander?refer=embed">#outlander</a>
            <a title="phev" target="_blank" href="https://www.tiktok.com/tag/phev?refer=embed">#phev</a>
            <a title="plug" target="_blank" href="https://www.tiktok.com/tag/plug?refer=embed">#plug</a>
            <a title="in" target="_blank" href="https://www.tiktok.com/tag/in?refer=embed">#in</a>
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="baoswheels" target="_blank" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="japan" target="_blank" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a>
            <a title="srilanka" target="_blank" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="cartech" target="_blank" href="https://www.tiktok.com/tag/cartech?refer=embed">#cartech</a>
            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a>
            <a title="trending" target="_blank" href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engineering" target="_blank" href="https://www.tiktok.com/tag/engineering?refer=embed">#engineering</a>
            <a title="shorts" target="_blank" href="https://www.tiktok.com/tag/shorts?refer=embed">#shorts</a>
            <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="tech" target="_blank" href="https://www.tiktok.com/tag/tech?refer=embed">#tech</a>
            <a title="car" target="_blank" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="brake" target="_blank" href="https://www.tiktok.com/tag/brake?refer=embed">#brake</a>
            <a title="comfortable" target="_blank" href="https://www.tiktok.com/tag/comfortable?refer=embed">#comfortable</a>
            <a title="carreview" target="_blank" href="https://www.tiktok.com/tag/carreview?refer=embed">#carreview</a>
            <a target="_blank" title="♬ original sound - Baos Wheels" href="https://www.tiktok.com/music/original-sound-7382543070937533185?refer=embed">♬ original sound - Baos Wheels</a>
          </section>
        </blockquote>
      </div>

      <div className='mds:hidden flex w-[20vw] h-auto scale-75 hover:scale-90 transition duration-500'>
        <blockquote className="tiktok-embed mx-auto rounded-2xl" cite="https://www.tiktok.com/@baos_623/video/7382543004868922642" data-aos='zoom-in' data-aos-duration='8000' data-aos-delay='150' data-video-id="7382543004868922642" style={{ maxWidth: '605px', minWidth: '325px' }}>
          <section>
            <a target="_blank" title="@baos_623" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a> Hybrid Technology ගැන කෙටියෙන් 💥⚙️🚗
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="technology" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a>
            <a title="cars" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#cars</a>
            <a title="battery" target="_blank" href="https://www.tiktok.com/tag/battery?refer=embed">#battery</a>
            <a title="engine" target="_blank" href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="fuel" target="_blank" href="https://www.tiktok.com/tag/fuel?refer=embed">#fuel</a>
            <a title="efficiency" target="_blank" href="https://www.tiktok.com/tag/efficiency?refer=embed">#efficiency</a>
            <a title="energy" target="_blank" href="https://www.tiktok.com/tag/energy?refer=embed">#energy</a>
            <a title="saving" target="_blank" href="https://www.tiktok.com/tag/saving?refer=embed">#saving</a>
            <a title="how" target="_blank" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="toyota" target="_blank" href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="prius" target="_blank" href="https://www.tiktok.com/tag/prius?refer=embed">#prius</a>
            <a title="mitsubishi" target="_blank" href="https://www.tiktok.com/tag/mitsubishi?refer=embed">#mitsubishi</a>
            <a title="outlander" target="_blank" href="https://www.tiktok.com/tag/outlander?refer=embed">#outlander</a>
            <a title="phev" target="_blank" href="https://www.tiktok.com/tag/phev?refer=embed">#phev</a>
            <a title="plug" target="_blank" href="https://www.tiktok.com/tag/plug?refer=embed">#plug</a>
            <a title="in" target="_blank" href="https://www.tiktok.com/tag/in?refer=embed">#in</a>
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="baoswheels" target="_blank" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="japan" target="_blank" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a>
            <a title="srilanka" target="_blank" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="cartech" target="_blank" href="https://www.tiktok.com/tag/cartech?refer=embed">#cartech</a>
            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a>
            <a title="trending" target="_blank" href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engineering" target="_blank" href="https://www.tiktok.com/tag/engineering?refer=embed">#engineering</a>
            <a title="shorts" target="_blank" href="https://www.tiktok.com/tag/shorts?refer=embed">#shorts</a>
            <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="tech" target="_blank" href="https://www.tiktok.com/tag/tech?refer=embed">#tech</a>
            <a title="car" target="_blank" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="brake" target="_blank" href="https://www.tiktok.com/tag/brake?refer=embed">#brake</a>
            <a title="comfortable" target="_blank" href="https://www.tiktok.com/tag/comfortable?refer=embed">#comfortable</a>
            <a title="carreview" target="_blank" href="https://www.tiktok.com/tag/carreview?refer=embed">#carreview</a>
            <a target="_blank" title="♬ original sound - Baos Wheels" href="https://www.tiktok.com/music/original-sound-7382543070937533185?refer=embed">♬ original sound - Baos Wheels</a>
          </section>
        </blockquote>
      </div>
      <div className='flex lgs:w-[20vw] h-auto scale-75 hover:scale-90 transition duration-500' >
        <blockquote className="tiktok-embed mx-auto rounded-2xl" cite="https://www.tiktok.com/@baos_623/video/7382543004868922642" data-video-id="7382543004868922642"  data-aos='zoom-in' data-aos-duration='10000' data-aos-delay='200' style={{ maxWidth: '605px', minWidth: '325px' }}>
          <section>
            <a target="_blank" title="@baos_623" href="https://www.tiktok.com/@baos_623?refer=embed">@baos_623</a> Hybrid Technology ගැන කෙටියෙන් 💥⚙️🚗
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="technology" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a>
            <a title="cars" target="_blank" href="https://www.tiktok.com/tag/cars?refer=embed">#cars</a>
            <a title="battery" target="_blank" href="https://www.tiktok.com/tag/battery?refer=embed">#battery</a>
            <a title="engine" target="_blank" href="https://www.tiktok.com/tag/engine?refer=embed">#engine</a>
            <a title="fuel" target="_blank" href="https://www.tiktok.com/tag/fuel?refer=embed">#fuel</a>
            <a title="efficiency" target="_blank" href="https://www.tiktok.com/tag/efficiency?refer=embed">#efficiency</a>
            <a title="energy" target="_blank" href="https://www.tiktok.com/tag/energy?refer=embed">#energy</a>
            <a title="saving" target="_blank" href="https://www.tiktok.com/tag/saving?refer=embed">#saving</a>
            <a title="how" target="_blank" href="https://www.tiktok.com/tag/how?refer=embed">#how</a>
            <a title="this" target="_blank" href="https://www.tiktok.com/tag/this?refer=embed">#this</a>
            <a title="thing" target="_blank" href="https://www.tiktok.com/tag/thing?refer=embed">#thing</a>
            <a title="works" target="_blank" href="https://www.tiktok.com/tag/works?refer=embed">#works</a>
            <a title="?" target="_blank" href="https://www.tiktok.com/tag/%3F?refer=embed">#?</a>
            <a title="toyota" target="_blank" href="https://www.tiktok.com/tag/toyota?refer=embed">#toyota</a>
            <a title="prius" target="_blank" href="https://www.tiktok.com/tag/prius?refer=embed">#prius</a>
            <a title="mitsubishi" target="_blank" href="https://www.tiktok.com/tag/mitsubishi?refer=embed">#mitsubishi</a>
            <a title="outlander" target="_blank" href="https://www.tiktok.com/tag/outlander?refer=embed">#outlander</a>
            <a title="phev" target="_blank" href="https://www.tiktok.com/tag/phev?refer=embed">#phev</a>
            <a title="plug" target="_blank" href="https://www.tiktok.com/tag/plug?refer=embed">#plug</a>
            <a title="in" target="_blank" href="https://www.tiktok.com/tag/in?refer=embed">#in</a>
            <a title="hybrid" target="_blank" href="https://www.tiktok.com/tag/hybrid?refer=embed">#hybrid</a>
            <a title="baoswheels" target="_blank" href="https://www.tiktok.com/tag/baoswheels?refer=embed">#baoswheels</a>
            <a title="japan" target="_blank" href="https://www.tiktok.com/tag/japan?refer=embed">#japan</a>
            <a title="srilanka" target="_blank" href="https://www.tiktok.com/tag/srilanka?refer=embed">#srilanka</a>
            <a title="cartech" target="_blank" href="https://www.tiktok.com/tag/cartech?refer=embed">#cartech</a>
            <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
            <a title="foryou" target="_blank" href="https://www.tiktok.com/tag/foryou?refer=embed">#foryou</a>
            <a title="trending" target="_blank" href="https://www.tiktok.com/tag/trending?refer=embed">#trending</a>
            <a title="engineering" target="_blank" href="https://www.tiktok.com/tag/engineering?refer=embed">#engineering</a>
            <a title="shorts" target="_blank" href="https://www.tiktok.com/tag/shorts?refer=embed">#shorts</a>
            <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a>
            <a title="tech" target="_blank" href="https://www.tiktok.com/tag/tech?refer=embed">#tech</a>
            <a title="car" target="_blank" href="https://www.tiktok.com/tag/car?refer=embed">#car</a>
            <a title="brake" target="_blank" href="https://www.tiktok.com/tag/brake?refer=embed">#brake</a>
            <a title="comfortable" target="_blank" href="https://www.tiktok.com/tag/comfortable?refer=embed">#comfortable</a>
            <a title="carreview" target="_blank" href="https://www.tiktok.com/tag/carreview?refer=embed">#carreview</a>
            <a target="_blank" title="♬ original sound - Baos Wheels" href="https://www.tiktok.com/music/original-sound-7382543070937533185?refer=embed">♬ original sound - Baos Wheels</a>
          </section>
        </blockquote>
      </div>
      <script async src="https://www.tiktok.com/embed.js"></script>
    </div>

    <div className='flex flex-col w-[40vw] lgs:h-auto mds:h-auto items-center justify-start p-8 mds:space-y-5 lgs:space-y-5'>
                <h2 className='text-5xl font-russoone lg:w-full text-primary mb-4 text-center'>
                  Our Tiktok Gallery
                </h2>
                <p className='text-sm text-center w-full lgs:w-[25vw] text-primary font-kanit'>
                {''}<span className=' text-primary text-lg font-thin pr-1'>Baos Wheels</span> {' '} brings you engaging auto mechanical videos on TikTok. We offer in-depth mechanical explanations, detailed car reviews, insights into the latest inventions, and record-breaking information in the auto industry. Stay informed and entertained with the newest trends and developments in the world of automobiles.
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



