import React from 'react';
import bwlogo from '../assests/baoswheelslogo.png';

const Footer = () => {
  return (
    <footer className="relative w-full h-[50vh] bg-secondary flex flex-col items-center justify-between">
      <div className="flex w-full items-center justify-center mt-10 space-x-12"> {/* Adjust the space-x-* value as needed */}
        <div className="flex items-center justify-center h-[15vh]">
          <img src={bwlogo} alt="Baos Wheels Logo" className="max-h-full" />
        </div>
        <nav className="flex justify-center">
          <ul className="flex gap-8 font-kanit text-xl text-primary list-none p-0 m-0">
            <li className="hover:text-baseprimary cursor-pointer">Home</li>
            <li className="hover:text-baseprimary cursor-pointer">Articles</li>
            <li className="hover:text-baseprimary cursor-pointer">Reviews</li>
            <li className="hover:text-baseprimary cursor-pointer">About Us</li>
          </ul>
        </nav>
      </div>
      <div className="bg-baseextra1 w-full h-[8vh] flex items-center justify-center">
        <h2 className="font-kanit text-lg text-primary text-center">Copyright 2024 © Baos Wheels. All Rights Reserved.</h2>
      </div>
    </footer>
  );
}

export default Footer;
