
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
      <ul className="hidden md:flex flex-grow justify-center font-russoone text-primary text-xl cursor-pointer">
        <li className="p-4 hover:text-baseprimary">Home</li>
        <li className="p-4 hover:text-baseprimary">Reviews</li>
        <li className="p-4 hover:text-baseprimary">Articles</li>
        <li className="p-4 hover:text-baseprimary">Videos</li>
        <li className="p-4 hover:text-baseprimary">About</li>
      </ul>
      <div className="hidden md:flex items-center mr-10">
        <button className="bg-primary text-baseprimary w-[100%] h-auto px-6 py-2 rounded-2xl font-russoone font-bold">
          AI Mechanical Engineer
        </button>
      </div>
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} color="#FFFFFF" /> : <AiOutlineMenu size={30} color="#FFFFFF" />}
      </div>
      <div
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] sm:w-[50%] md:w-[40%] h-full border-r border-r-gray-400 bg-secondary ease-in-out duration-500'
            : 'fixed left-[-100%] top-0 w-[60%] sm:w-[50%] md:w-[40%] h-full ease-in-out duration-500'
        }
      >
        <ul className="p-4 font-russoone text-primary">
          <div className="flex items-center">
            <img src={logo} alt="bwlogo" className="h-12 w-auto m-4" />
          </div>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Reviews</li>
          <li className="p-4 border-b border-gray-600">Articles</li>
          <li className="p-4 border-b border-gray-600">Videos</li>
          <li className="p-4 border-b border-gray-600">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;