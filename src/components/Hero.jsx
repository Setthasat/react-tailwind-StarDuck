import React from 'react'
import Navbar from './Navbar'

function Hero() {
  return (
    <div>
        <div className='max-w-[1640px] mx-auto'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <div className='mb-36'>
                        <Navbar />
                    </div>
                    <div className='mb-3'>
                         <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300'>Welcome To</h1>
                         <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-300'> <span className='text-gray-400'>StarBox</span> Coffee</h1>
                    </div>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-starbucks-cup-and-coffee-beans-1619637256.jpg" alt="/" />
            </div>
    </div>
    </div>
  )
}

export default Hero