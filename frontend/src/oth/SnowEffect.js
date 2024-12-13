// SnowEffect.js
import React from 'react';
import '../oth/SnowEffect.css';

const SnowEffect = () => {
  return (
    <>

      <div className="snowFall">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="snowFall delayMe">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="snowFall biggerSnow">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="snowFall delayMe biggerSnow">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
    </>
  );
};

export default SnowEffect;
