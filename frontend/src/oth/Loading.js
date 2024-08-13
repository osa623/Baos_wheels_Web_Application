import React from 'react'
import '../oth/loader.css';

const Loading = () => {
  return (
     <div className='relative min-h-screen w-full'>
        <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
        </div>
    </div>   
  )
}

export default Loading;
