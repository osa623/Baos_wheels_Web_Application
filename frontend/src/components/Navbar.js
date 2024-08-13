import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import bwlogo from '../assests/baoswheelslogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed w-full flex items-center justify-between bg-secondary px-4 z-50 transition-all duration-300'>
      <div className="flex items-center">
        <img src={bwlogo} alt="bwlogo" className="h-12 w-auto m-4 mds:h-8 mds:m-2 lgs:h-12 sms:h-8" />
      </div>
      <ul className="hidden md:flex items-center font-russoone text-primary text-xl cursor-pointer">
        <li className="p-4 hover:text-baseprimary"><a href='/'>Home</a></li>
        <li className="p-4 hover:text-baseprimary"><a href='/reviews'>Reviews</a></li>
        <li className="p-4 hover:text-baseprimary"><a href='/articles'>Articles</a></li>
        <li className="p-4 hover:text-baseprimary"><a href='/about'>About</a></li>
      </ul>
      <div className="md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} color="#FFFFFF" /> : <AiOutlineMenu size={30} color="#FFFFFF" />}
      </div>
      <div
        className={`fixed left-0 top-0 sms:w-[80vw] mds:w-[80vw] h-full border-r rounded-r-2xl border-r-gray-400 bg-secondary transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="p-4 font-russoone text-primary items-center justify-center">
          <div className="flex items-center justify-center">
            <img src={bwlogo} alt="bwlogo" className="h-8 w-auto m-4" />
          </div>
          <li className="p-4 border-b border-gray-600 text-center"><a href='/'>Home</a></li>
          <li className="p-4 border-b border-gray-600 text-center"><a href='/reviews'>Reviews</a></li>
          <li className="p-4 border-b border-gray-600 text-center"><a href='/articles'>Articles</a></li>
          <li className="p-4 border-b border-gray-600 text-center"><a href='/about'>About</a></li>
        </ul>
        <div className='flex items-center justify-center p-4 gap-4'>
          <span className="text-gray-400 hover:text-primary transition-transform cursor-pointer">
            {/* Insert your SVG icon for Facebook */}
          </span>
          <span className="text-gray-400 hover:text-primary transition-transform cursor-pointer">
            {/* Insert your SVG icon for Instagram */}
          </span>
          <span className="text-gray-400 hover:text-primary transition-transform cursor-pointer">
            {/* Insert your SVG icon for YouTube */}
          </span>
          <span className="text-gray-400 hover:text-primary transition-transform cursor-pointer">
            {/* Insert your SVG icon for Twitter */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
