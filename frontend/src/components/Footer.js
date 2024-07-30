import React from 'react';

// Image file import
import bwlogo from '../assests/baoswheelslogo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-secondary flex flex-col items-center">
      {/* Logo and Navigation */}
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full p-4 space-y-4 md:space-y-0 md:space-x-12 lg:mt-10">
        <div className="flex justify-center">
          <img src={bwlogo} alt="Baos Wheels Logo" className="max-h-20" />
        </div>
        <nav className="flex justify-center">
          <ul className="flex flex-wrap gap-6 font-kanit text-primary text-sm md:text-base lg:text-xl items-center justify-center p-0 m-0">
            <li className="hover:text-baseprimary cursor-pointer">Home</li>
            <li className="hover:text-baseprimary cursor-pointer">Articles</li>
            <li className="hover:text-baseprimary cursor-pointer">Reviews</li>
            <li className="hover:text-baseprimary cursor-pointer">About Us</li>
          </ul>
        </nav>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-8 py-4">
        <span className="text-gray-400 cursor-pointer hover:text-baseprimary">
          {/* Replace with your own icon */}
          <i className="fab fa-facebook-f"></i>
        </span>
        <span className="text-gray-400 cursor-pointer hover:text-baseprimary">
          {/* Replace with your own icon */}
          <i className="fab fa-instagram"></i>
        </span>
        <span className="text-gray-400 cursor-pointer hover:text-baseprimary">
          {/* Replace with your own icon */}
          <i className="fab fa-twitter"></i>
        </span>
        <span className="text-gray-400 cursor-pointer hover:text-baseprimary">
          {/* Replace with your own icon */}
          <i className="fab fa-youtube"></i>
        </span>
      </div>

      {/* Copyright */}
      <div className="w-full bg-transparent text-center py-4">
        <h2 className="font-kanit text-primary text-sm md:text-base">Copyright 2024 © Baos Wheels. All Rights Reserved.</h2>
        <h2 className="text-primary text-xs md:hidden">Design By Graficore</h2>
      </div>
    </footer>
  );
}

export default Footer;
