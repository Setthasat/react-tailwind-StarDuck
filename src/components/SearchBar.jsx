import React from 'react'
import { motion } from "framer-motion"
import useStore from '../store/store'

function SearchBar() {
  const darkmode = useStore((state => state.darkmode))
  return (
    <div className={darkmode ? 'flex justify-center items-center from-slate-50 to-slate-100 duration-[500ms] ' : 'duration-[500ms] flex justify-center items-center bg-[#404040]'}>
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
