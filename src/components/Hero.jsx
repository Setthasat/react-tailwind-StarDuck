import React from 'react'
import Navbar from './Navbar'
import useStore from '../store/store'
function Hero() {

  const darkmode = useStore((state => state.darkmode))
  return (
    <div>
      <div className='w-full mx-auto '>
        <div className='relative max-h-[500px]'>
        <div className='max-h-[500px] relative'>
          <div className={darkmode ? 'absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center' : 'absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center'}>
            <div className='absolute left-0 top-0'>
              <Navbar />
            </div>
            <div className='mt-60'>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300'>Welcome To</h1>
              <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300'>Star<span className='text-yellow-500'>Duck</span> Store</h1>
            </div>
          </div>
          <img className='w-full h-[500px] object-cover border shadow-2xl' src="https://tenrandomfacts.com/wp-content/uploads/2016/08/Rubber-Duck.jpg" alt="/" />
        </div>
        </div>
        {/* <div className='relative flex flex-col bg-gradient-to-r from-bg-[#838FA5] to'>
          <div className='absolute mt-20 ml-20'>
            <h1>Menu</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#656871" fill-opacity="1" d="M0,256L40,234.7C80,213,160,171,240,133.3C320,96,400,64,480,80C560,96,640,160,720,208C800,256,880,288,960,298.7C1040,309,1120,299,1200,288C1280,277,1360,267,1400,261.3L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" />
          </svg>
        </div> */}
        
      </div>
    </div>
  )
}

export default Hero