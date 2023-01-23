import React from 'react'
import { motion } from "framer-motion"
import Duck from '../assets/Duck.png'

function TopsellSingleCard({ item }) {
    return (
        <div>
            <div className='bg-gradient-to-tr from-yellow-500 to-yellow-200 m-3 h-[70px] rounded-b-lg rounded-r-lg grid grid-cols-2'>
                <img src={Duck} width='90px' height='50px' className='rounded-lg m-3 shadow-lg' />
                <div>
                    <p className='text-white flex justify-center items-center mt-1 mb-1 font-sans text-[17px]  md:text-[20px]'>
                        {item.name}
                    </p>
                    <motion.button whileHover={{ scale: 1.2 }} className='ml-5 md:ml-[10.6rem] text-[17px] md:text-[19px] md:-mt-4 border border-white rounded-xl text-white'><span className='m-2'>Buy</span></motion.button>
                </div>
            </div>
        </div>
    )
}

export default TopsellSingleCard