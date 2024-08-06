import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { faQuoteLeft, faQuoteRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






const About = () => {

 useEffect(() => {
   Aos.init({duration:1500})

 })



  return (
    
    <section className='relative h-auto w-full'>
      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start sms:space-y-2'>

    {/* About section title segment*/}
        <div className='flex sms:h-[10vh] mds:h-[10vh] lgs:h-[20vh] w-full items-center justify-center' />
        <div className='flex flex-col sms:h-[10vh] w-full items-center justify-center mds:pt-10'>
          <div className='flex sms:w-[60vw] mds:w-[30vw] h-0.5 bg-secondary' data-aos='fade-right' />
          <h2 className='flex mds:text-7xl sms:text-6xl lgs:text-7xl  font-russoone text-baseextra4' data-aos='flip-up'>About Us</h2>
          <div className='flex sms:w-[60vw] mds:w-[30vw] h-0.5 bg-secondary' data-aos='fade-left' />
        </div>

        {/* content*/}

          <div className='flex sms:flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-10 sms:pt-10'>
               <h2 className='font-russoone text-3xl text-center text-baseextra4' data-aos='fade-right' data-aos-delay='200'>Driven by Passion</h2>
               <p className='h-auto sms:w-[80vw] text-center font-kanit sms:text-md text-secondary'  data-aos='fade-right' data-aos-delay='400'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/>{' '}<span className='text-xl text-baseprimary'>Baos Wheels</span> isn't just a platform—it's a journey fueled by a deep love for automobiles. Our passion drives us to create content that resonates with enthusiasts and curious minds alike. We showcase the latest models and tell the stories behind the machines, innovations, and people shaping the automotive world{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
          </div>


          <div className='flex sms:flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-20'>
               <h2 className='font-russoone text-3xl text-center text-baseextra4' data-aos='fade-left' data-aos-delay='200'>Meet the Gearheads</h2>
               <p className='h-auto sms:w-[80vw] text-center font-kanit sms:text-md text-secondary'  data-aos='fade-left' data-aos-delay='400'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Our team of car enthusiasts and experts brings diverse perspectives, from classic muscle cars to the latest electric vehicles, providing insights and explanations that make complex concepts accessible.{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
          </div>


          
          <div className='flex sms:flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-10'>
               <h2 className='font-russoone text-3xl text-center text-baseextra4'  data-aos='zoom-in' data-aos-delay='300'>What We Bring</h2>
               <p className='h-auto sms:w-[80vw] text-center font-kanit sms:text-md text-secondary'  data-aos='zoom-in' data-aos-delay='500'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> At Baos Wheels, we go beyond the surface to bring you,</p>

               <ul className='flex sms:flex-col sms:w-[80vw] h-auto justify-center font-kanit sms:text-sm text-secondary sms:divide-dashed sms:divide-y-4 sms:p-5 sms:space-y-3'>
                    <li className='flex sms:flex-col text-center'  data-aos='fade-right' data-aos-delay='300'>{''}<span className='text-xl font-russoone text-baseextra4'>Unfiltered Car Reviews:</span>{''} Honest, in-depth reviews.</li>
                    <li className='flex sms:flex-col text-center sms:pt-2'  data-aos='fade-left' data-aos-delay='400'>{''}<span className='text-xl font-russoone  text-baseextra4'>Tech Insights:</span>{''}  Deep dives into vehicle mechanics and technology.</li>
                    <li className='flex sms:flex-col text-center  sms:pt-2 '  data-aos='fade-right' data-aos-delay='500'>{''}<span className='text-xl font-russoone  text-baseextra4'>Behind-the-Scenes:</span>{''}  Exclusive industry stories and interviews.</li>
                    <li className='flex sms:flex-col text-center  sms:pt-2'  data-aos='fade-left' data-aos-delay='600'>{''}<span className='text-xl font-russoone  text-baseextra4'>Visual Storytelling:</span>{''}  Engaging videos on YouTube, TikTok, and Instagram.</li>

               </ul>
          </div>



          <div className='flex sms:flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-20'>
               <h2 className='font-russoone text-3xl text-center text-baseextra4'  data-aos='fade-right' data-aos-delay='300'>Beyond the Screens</h2>
               <p className='h-auto sms:w-[80vw] text-center font-kanit sms:text-md text-secondary'  data-aos='fade-right' data-aos-delay='500'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Baos Wheels is a community for car enthusiasts, offering a space to learn, share, and connect. Whether you're an expert or a newcomer, there's something here for everyone.{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
          </div>
               


      </div>


          

    

    </section>
  )
}

export default About
