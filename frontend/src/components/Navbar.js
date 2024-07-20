
import React, { useState, useEffect } from 'react';
import logo from '../assests/baoswheelslogo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  //const [showNavBar, setShowNavBar] = useState(true);
  //const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

/*useEffect(() => {
      
    const handleScroll = () =>{
      if(window.scrollY > lastScrollY){
        setShowNavBar(false);
      }else{
        setShowNavBar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return()=> {
      
      window.removeEventListener('scroll', handleScroll);
    } ;   
  }, [lastScrollY]);*/

  return (
    <div className='fixed w-full flex items-center justify-between bg-secondary h-15 px-4 z-50 sms:justify-between  sms:w-[100vw] sms:h-[5vh] sms:p-6 transition-transform duration-1000' style={{
      transitionDuration:'100s'
    }}>
      <div className=" flex items-center">
        <img src={logo} alt="bwlogo" className="flex flex-col lg:h-12 w-auto m-4 sms:w-[40vw] sms:m-auto "/>
      </div>
      <ul className="hidden md:flex flex-grow items-end justify-end font-russoone text-primary text-xl cursor-pointer pr-10">
        <li className="p-4 hover:text-baseprimary"><a href='/home'>Home</a></li>
        <li className="p-4 hover:text-baseprimary"><a href='/reviews'>Reviews</a></li>
        <li className="p-4 hover:text-baseprimary">Articles</li>
        <li className="p-4 hover:text-baseprimary">About</li>
      </ul>
      <div className="md:hidden transition-transform" onClick={handleNav} style={{
        transitionDuration:'200s'
      }}>
        {nav ? <AiOutlineClose size={30} color="#FFFFFF" /> : <AiOutlineMenu size={30} color="#FFFFFF" />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[80%] sm:w-100 md:w-[40%] h-full border-r border-r-gray-400 bg-secondary ease-in-out duration-500'
            : 'fixed left-[-100%] top-0 w-[60%] sm:w-[50%] md:w-[40%] h-full ease-in-out duration-500'
        }
      >
        <ul className="p-4 font-russoone text-primary items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={logo} alt="bwlogo" className="h-8 w-auto m-4" />
          </div>
          <li className="p-4 border-b border-gray-600 text-center"><a href='/home'>Home</a></li>
          <li className="p-4 border-b border-gray-600 text-center"><a href='/reviews'>Reviews</a></li>
          <li className="p-4 border-b border-gray-600 text-center">Articles</li>
          <li className="p-4 border-b border-gray-600 text-center">Videos</li>
          <li className="p-4 border-b border-gray-600 text-center">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

