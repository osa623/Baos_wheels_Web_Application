import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
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
        {/* Use Link component for routing */}
        <li className="p-4 hover:text-baseprimary focus:text-baseprimary">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-baseprimary focus:text-baseprimary">
          <Link to="/reviews">Reviews</Link>
        </li>
        <li className="p-4 hover:text-baseprimary">
          <Link to="/articles">Articles</Link>
        </li>
        <li className="p-4 hover:text-baseprimary">
          <Link to="/about">About</Link>
        </li>
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
          {/* Use Link component for mobile navigation */}
          <li className="p-4 border-b border-gray-600 text-center">
            <Link to="/" onClick={handleNav}>Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-center">
            <Link to="/reviews" onClick={handleNav}>Reviews</Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-center">
            <Link to="/articles" onClick={handleNav}>Articles</Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-center">
            <Link to="/about" onClick={handleNav}>About</Link>
          </li>
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
