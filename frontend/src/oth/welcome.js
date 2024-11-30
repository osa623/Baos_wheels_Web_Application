import React, { useState } from 'react'

//video file
import loading from '../assests/Videofiles/loading.mp4';

const Welcome = () => {

  const [isLoading, setIsLoading] = useState(true);


  return (
    <div className='flex h-screen w-[100vw] bg-secondary items-center justify-center'>

        <div className='flex flex-col lgs:w-1/4 sms:w-1/2 mds:w-1/3 h-auto items-center justify-center'>
            <video src={loading} autoPlay loop muted playsInline/>
        </div>
      
    </div>
  )
}

export default Welcome;
