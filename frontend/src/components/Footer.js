import React from 'react'

//images 
import logo from '../assests/baoswheelslogo.png'


const Footer = () => {
  return (
    <div className='relative flex h-[50vh] w-auto bg-secondary'>
        <div className='flex flex-col h-full w-[20vw] items-center justify-center'>
          
        

        </div>
        <div className='flex flex-col w-[45vw] h-full items-center justify-end bg-baseextra4'>
            <div className='flex-row '></div>
            <img src = {logo} alt='' style={{
                width:'100%'
            }}/>

        </div>
        <div className='flex flex-col w-[35vw] h-full items-center justify-center'>

</div>
      
    </div>
  )
}

export default Footer
