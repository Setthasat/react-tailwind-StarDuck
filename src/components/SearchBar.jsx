import React from 'react'
import { motion } from "framer-motion"
import useStore from '../store/store'

function SearchBar() {
  const darkmode = useStore((state => state.darkmode))
  return (
    <div className={darkmode ? 'flex justify-center items-center bg-slate-100  duration-300 ' : '  duration-300 flex justify-center items-center bg-slate-700'}>
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
