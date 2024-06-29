
import React, { useState } from 'react';
import logo from '../assests/baoswheelslogo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full flex items-center justify-between bg-secondary h-15 max-w-auto mx-auto px-4 z-50">
      <div className="flex items-center">
        <img src={logo} alt="bwlogo" className="h-12 w-auto m-4" />
      </div>
      <ul className="hidden md:flex flex-grow items-end justify-end font-russoone text-primary text-xl cursor-pointer pr-10">
        <li className="p-4 hover:text-baseprimary"><a href='/home'>Home</a></li>
        <li className="p-4 hover:text-baseprimary"><a href='/reviews'>Reviews</a></li>
        <li className="p-4 hover:text-baseprimary">Articles</li>
        <li className="p-4 hover:text-baseprimary">About</li>
      </ul>
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} color="#FFFFFF" /> : <AiOutlineMenu size={30} color="#FFFFFF" />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[80%] sm:w-[50%] md:w-[40%] h-full border-r border-r-gray-400 bg-secondary ease-in-out duration-500'
            : 'fixed left-[-100%] top-0 w-[60%] sm:w-[50%] md:w-[40%] h-full ease-in-out duration-500'
        }
      >
        <ul className="p-4 font-russoone text-primary items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={logo} alt="bwlogo" className="h-8 w-auto m-4" />
          </div>
          <li className="p-4 border-b border-gray-600 text-center">Home</li>
          <li className="p-4 border-b border-gray-600 text-center">Reviews</li>
          <li className="p-4 border-b border-gray-600 text-center">Articles</li>
          <li className="p-4 border-b border-gray-600 text-center">Videos</li>
          <li className="p-4 border-b border-gray-600 text-center">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;