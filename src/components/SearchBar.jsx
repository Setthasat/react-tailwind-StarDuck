import React from 'react'
import { motion } from "framer-motion"

function SearchBar() {
  return (
    <div className='flex justify-center items-center '>
       <motion.div  whileHover={{ scale: 1.2 }} className='bg-gray-200 m-5 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <motion.input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search here . . .'
        />
      </motion.div>
    </div>
  )
}

export default SearchBar
