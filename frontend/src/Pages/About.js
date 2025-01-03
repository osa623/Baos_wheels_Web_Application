import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { faQuoteLeft, faQuoteRight, faMailForward, faMessage} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//image file
import  bwlogo from '../assests/bwlogo.png';
import { Link } from 'react-router-dom';


const Popup = ({ message, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg text-center items-center justify-center">
      <img src= {bwlogo} alt='' className='hidden lgs:flex sms:flex lgs:h-[10rem]'/>
      <p className="text-lg font-ibmplexsans mb-4">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 bg-baseprimary text-white rounded"
      >
        Close
      </button>
    </div>
  </div>
);



const About = () => {

     const [formSubmit, setFormSubmit] = useState(false);
     const [formData, setFormData] = useState({
       user_name: '',
       user_email: '',
       message: ''
     });
     const [formError, setFormError] = useState('');
     
     const handleChange = (e) => {
       setFormData({
         ...formData,
         [e.target.name]: e.target.value
       });
     };
     
     const handleSubmit = (event) => {
       event.preventDefault();
     
       const { user_name, user_email, message } = formData;
     
       // Validate the form fields
       if (!user_name || !user_email || !message) {
         setFormError('Please fill in all fields');
         return;
       }
     
       emailjs.sendForm('service_oq88bb9', 'template_1gsqs0j', event.target, 't9HDMRrmehzRQKGE9')
         .then((result) => {
           console.log(result.text);
           setFormSubmit(true);
           setFormError('');
           setFormData({ user_name: '', user_email: '', message: '' });
     
           setTimeout(() => {
             setFormSubmit(false);
           }, 3000);
         }, (error) => {
           console.log(error.text);
         });
     }; 

 useEffect(() => {
   Aos.init({duration:1500})

 })

 useEffect(() => {
  window.scrollTo(0, 0);
}, []);





  return (
    
    <section className='relative h-auto w-full'>

      <div className='flex flex-col w-full h-auto bg-primary items-center justify-start sms:space-y-2 z-40'>

    {/* About section title segment*/}
        <div className='flex sms:h-[10vh] mds:h-[10vh] lgs:h-[20vh] w-full items-center justify-center' />

        <div className='flex flex-col sms:h-[10vh] mds:h-auto w-full items-center justify-center mds:pt-10 lgs:p-5'>
            <h2 className='flex flex-col mds:text-7xl sms:text-6xl overflow-hidden lgs:text-7xl  font-russoone text-baseextra4' data-aos='flip-up'>About Us
              {''}<div className='bg-secondary w-autp h-[0.15rem]' data-aos='fade-right' data-aos-delay='400'/>
            </h2>
        </div>

        {/* content*/}

          <div className='flex flex-col h-auto w-auto justify-center items-center sms:space-y-5 lgs:space-y-4 sms:pb-10 sms:pt-10 mds:pt-15 lgs:pt-12 mds:pt-12 mds:space-y-5'>
               <h2 className='flex flex-col font-russoone text-3xl text-center overflow-hidden text-baseextra4' data-aos='fade-right' data-aos-delay='200'>Driven by Passion
                {''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-left' data-aos-delay='450'/>
               </h2>
               <p className='h-auto sms:w-[80vw] mds:w-[75vw] lgs:w-[60vw] text-center font-ibmplexsans lgs:text-lg sms:text-md text-secondary' style={{fontWeight:'400'}}  data-aos='fade-right' data-aos-delay='400'>{' '}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Baos Wheels isn't just a platform—it's a journey fueled by a deep love for automobiles. Our passion drives us to create content that resonates with enthusiasts and curious minds alike. We showcase the latest models and tell the stories behind the machines, innovations, and people shaping the automotive world. {' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
          </div>


          <div className='flex flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-20 mds:p-10 lgs:pt-20 lgs:space-y-4 mds:space-y-5'>
               <h2 className='flex flex-col font-russoone text-3xl text-center overflow-hidden text-baseextra4' data-aos='fade-left' data-aos-delay='200'>Meet the Gearheads
                {''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-right' data-aos-delay='500'/>
               </h2>
               <p className='h-auto sms:w-[80vw] mds:w-[75vw] lgs:w-[50vw] text-center font-ibmplexsans sms:text-md lgs:text-lg text-secondary' style={{fontWeight:'400'}}  data-aos='fade-left' data-aos-delay='400'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Our team of car enthusiasts and experts brings diverse perspectives, from classic muscle cars to the latest electric vehicles, providing insights and explanations that make complex concepts accessible.{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
          </div>


          
          <div className='flex flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-10 lgs:space-y-5 mds:pt-10 lgs:pt-20 mds:space-y-5'>
               <h2 className='flex flex-col font-russoone text-3xl text-center overflow-hidden text-baseextra4'  data-aos='zoom-in' data-aos-delay='300'>What We Bring
                {''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-right' data-aos-delay='550'/>
               </h2>
               <p className='h-auto sms:w-[80vw] text-center font-ibmplexsans sms:text-md lgs:text-lg text-secondary'  data-aos='zoom-in' data-aos-delay='500'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> At Baos Wheels, we go beyond the surface to bring you,</p>

              <div className='flex h-auto lgs:w-[100vw] mds:w-[100vw]  items-center justify-center overflow-hidden'>
              <ul
               className='flex sms:flex-col mds:grid mds:grid-cols-4  lgs:grid-cols-4 lgs:p-2 mds:gap-10 cursor-default lgs:gap-10 sms:w-[80vw] lgs:w-[80vw] h-auto justify-center items-center font-kanit sms:text-sm text-secondary sms:p-5 sms:space-y-8'>
                    <li className='flex flex-col lgs:w-[15rem] lgs:h-[15rem] mds:w-[10rem] mds:h-[10rem] sms:w-[15rem] justify-evenly items-center  text-center lgs:rounded-xl lgs:shadow-md  lgs:p-5 rounded-xl  p-3 ' style={{
                      boxShadow:'inset 0 5px 10px rgba(0,0,0,0.4)'
                    }}  data-aos='zoom-in' data-aos-delay='300'>{''}<span className='sms:text-md mds:text-md lgs:text-2xl font-russoone text-baseextra4'>Unfiltered Car Reviews:</span>{''}<span className='mds:text-sm sms:text-xs font-ibmplexsans lgs:w-[10vw]'>Honest, in-depth reviews.</span></li>
                    <li className='flex flex-col lgs:w-[15rem] mds:w-[10rem] mds:h-[10rem]  lgs:h-[15rem] sms:w-[15rem] justify-evenly items-center  text-center sms:pt-2 lgs:rounded-xl lgs:shadow-lg lgs:p-5  rounded-xl p-3' style={{
                      boxShadow:'inset 0 5px 10px rgba(0,0,0,0.4)'
                    }}  data-aos='zoom-out' data-aos-delay='400'>{''}<span className='sms:text-md mds:text-md lgs:text-2xl font-russoone  text-baseextra4'>Tech Insights:</span>{''}<span className='mds:text-sm sms:text-xs font-ibmplexsans lgs:w-[10vw]'> Deep dives into vehicle mechanics and technology.</span></li>
                    <li className='flex flex-col lgs:w-[15rem] mds:w-[10rem] mds:h-[10rem]  lgs:h-[15rem] sms:w-[15rem] justify-evenly items-center  text-center  sms:pt-2 lgs:rounded-xl lgs:shadow-lg lgs:p-5  rounded-xl  p-3 ' style={{
                      boxShadow:'inset 0 5px 10px rgba(0,0,0,0.4)'
                    }}  data-aos='zoom-in' data-aos-delay='500'>{''}<span className='sms:text-md mds:text-md lgs:text-2xl font-russoone  text-baseextra4'>Behind-the-Scenes:</span>{''} <span className='mds:text-sm sms:text-xs font-ibmplexsans lgs:w-[10vw]'>Exclusive industry stories and interviews.</span></li>
                    <li className='flex flex-col lgs:w-[15rem] mds:w-[10rem] mds:h-[10rem]  lgs:h-[15rem] sms:w-[15rem] justify-evenly items-center text-center  sms:pt-2 lgs:rounded-xl lgs:shadow-lg lgs:p-5 rounded-xl  p-3' style={{
                      boxShadow:'inset 0 5px 10px rgba(0,0,0,0.4)'
                    }}  data-aos='zoom-out' data-aos-delay='600'>{''}<span className='sms:text-md mds:text-md lgs:text-2xl font-russoone  text-baseextra4'>Visual Storytelling:</span>{''} <span className='mds:text-sm sms:text-xs font-ibmplexsans lgs:w-[10vw]'>Engaging videos on YouTube, TikTok, and Instagram.</span></li>

               </ul>

              </div>

          </div>



          <div className='flex flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-20 lgs:pt-20 mds:pt-10 lgs:space-y-5 mds:space-y-5'>
               <h2 className='flex flex-col font-russoone text-3xl overflow-hidden text-center text-baseextra4'  data-aos='fade-right' data-aos-delay='300'>Beyond the Screens
                {''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-right' data-aos-delay='400'/>
               </h2>
               <p className='h-auto sms:w-[80vw] mds:w-[70vw] lgs:w-[50vw] text-center font-ibmplexsans sms:text-md lgs:text-lg text-secondary'  data-aos='fade-right' data-aos-delay='500'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Baos Wheels is a community for car enthusiasts, offering a space to learn, share, and connect. Whether you're an expert or a newcomer, there's something here for everyone.{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
          </div>
               

          <div className='flex flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-20 lgs:pt-20 lgs:space-y-5 mds:pt-20 mds:space-y-5'>
               <h2 className='flex flex-col font-russoone text-3xl overflow-hidden text-center text-baseextra4'  data-aos='fade-right' data-aos-delay='300'>Join the Ride
                {''}<div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-right' data-aos-delay='400'/>
               </h2>
               <p className='h-auto sms:w-[80vw] mds:w-[70vw] lgs:w-[40vw] text-center font-ibmplexsans sms:text-md lgs:text-lg text-secondary'  data-aos='fade-right' data-aos-delay='500'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Join our automotive journey! Subscribe to our YouTube channel, follow us on TikTok and Instagram, and connect with a community that shares a passion for cars.{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>

                    <div className='flex h-auto w-auto sms:p-2 sms:justify-center sms:space-x-4 lgs:p-5 overflow-hidden lgs:space-x-5 mds:space-x-5'>

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
          
          
          </div>     
          
          <div className='flex sms:flex-col mds:flex-col h-auto w-auto justify-center items-center sms:space-y-5 sms:pb-20 mds:pt-20 lgs:pt-20 mds:space-y-10 lgs:space-x-10'>
            <div className='hidden lgs:flex mds:flex flex-col w-auto h-auto space-y-5 items-center justify-center'>
               <h2 className='flex flex-col font-russoone text-3xl text-center text-baseextra4 overflow-hidden '  data-aos='fade-right' data-aos-delay='300'>Fuel the Ride{''}
               <div className='bg-baseprimary h-[0.15rem] w-auto' data-aos='fade-left' data-aos-delay='450'/>
               </h2>
               <p className='h-auto sms:w-[80vw] mds:w-[60vw] lgs:w-[40vw] text-center font-kanit sms:text-md lgs:text-lg text-secondary'  data-aos='fade-right' data-aos-delay='500'>{''}<FontAwesomeIcon icon={faQuoteLeft} className='my-1'/> Share your thoughts and connect with fellow car enthusiasts. Your input helps keep the conversation lively and engaging. Join us and be part of the journey!{' '}<FontAwesomeIcon icon={faQuoteRight} className='my-1'/>{' '}</p>
               <div className='hidden lgs:flex w-auto h-auto items-center justify-center overflow-hidden'>
                     <img src= {bwlogo} alt='' className='h-[20rem]' data-aos='zoom-in' data-aos-delay='400'/>
               </div>
         
         
         
          </div>
                    {/* Adding the form */}

                    <div className='flex sms:flex-col w-auto h-auto sms:justify-center items-center sms:p-2 mds:p-6 lgs:p-5'>
                    <form onSubmit={handleSubmit} className="mx-auto lgs:max-w-xl sms:w-auto sms:mt-10 drop-shadow-md border-2 lgs:p-10 sms:p-5 mds:p-12 rounded-2xl bg-fontsecondary bg-opacity-80 z-40 items-center overflow-hidden" data-aos='fade-left' data-aos-delay='100'>
                                
                              <div className='flex sms:w-[70vw] mds:w-[70vw] sms:h-auto mds:justify-start justify-center items-center overflow-hidden'data-aos='fade-right' data-aos-delay='650'>
                                <h2 className='flex lgs:w-[30vw] sms:w-[70vw] h-auto text-center text-baseextra4 font-russoone mds:text-4xl lgs:text-5xl sms:text-4xl'>Let's Talk{''}<FontAwesomeIcon icon={faMessage} className='sms:mx-4 lgs:mx-2 lgs:h-5' /></h2>
                              </div>  
                                {formError && <p className="text-red-500">{formError}</p>}
                                
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 sms:w-[80vw] sms:pt-4 " data-aos='zoom-in' data-aos-delay='500'>
                                  <div className="sm:col-span-2">
                                    <label htmlFor="user_name" className="block sms:text-md font-semibold leading-6 text-gray-900">First name</label>
                                    <div className="mt-2.5">
                                      <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="sm:col-span-2">
                                    <label htmlFor="user_email" className="block sms:text-md font-semibold leading-6 text-gray-900">Email</label>
                                    <div className="mt-2.5">
                                      <input
                                        type="email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block sms:text-md font-semibold leading-6 text-gray-900">Message</label>
                                    <div className="mt-2.5">
                                      <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        required
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div className='flex w-full h-auto justify-center sms:mt-10 items-center lgs:mt-5 overflow-hidden'>
                                  <button type='submit' className="group relative sms:w-[60vw] mds:w-[30vw] sms:h-auto mds:h-auto sms:p-2 mds:p-3 lgs:h-12 lgs:w-[15vw]  overflow-hidden sms:border-2 rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5" data-aos='fade-up' data-aos-delay='700'>
                                    <div className="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span className="relative text-secondary justify-center text-xl font-kanit group-hover:text-primary transition-all duration-[100ms] hover:ease-out">
                                      Send Message <FontAwesomeIcon icon={faMailForward} alt=' ' className='relative'/>
                                    </span>
                                  </button>
                                </div>
                     </form>

                     {formSubmit && (
                    <Popup
                      message="Thank you for reaching out to Baos Wheels! We appreciate your message and will get back to you shortly."
                      onClose={() => setFormSubmit(false)}
                    />
                  )}
                  {formError && <p className="mt-4 text-red-500 text-sm">{formError}</p>}

                    </div>
          </div>



      </div>

    


          

    

    </section>
  )
}

export default About
