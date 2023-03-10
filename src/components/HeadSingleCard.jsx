import React from 'react'
import Duck from '../assets/Duck.png'
import { motion } from "framer-motion"

function HeadSingleCard({ item }) {
  return (
      <div className='bg-gradient-to-tr from-yellow-500 shadow-2xl to-yellow-200 m-3 h-[70px] rounded-b-lg rounded-r-lg grid grid-cols-2'>
        <img src={Duck} width='90px' height='50px' className='rounded-lg m-3 shadow-lg' />
        <div>
          <p className='text-white flex flex-col items-center mt-1 mb-1 font-sans text-[17px]  md:text-[20px]'>
            {item.name}
            <motion.button  whileHover={{ scale: 1.2 }} className='md:mt-[1px] text-[17px] md:text-[19px] border border-white rounded-xl text-white'><span className='m-2'>Buy</span></motion.button>
          </p>
          
        </div>
      </div>
  )
}

export default HeadSingleCard
