import React from 'react'
import { data1 } from '../data/data'
import TopsellSingleCard from './TopsellSingleCard'

function Topsell() {
  return (
    <div>
      <div className='flex justify-center items-center overline'>
        <h1 className=' underline underline-offset-8'>Top <span className='font-bold'>Sell</span></h1>
      </div>
      <div>
        <div className='grid grid-cols-2'>
            {data1.map((item, index) => {
              return (
                <div key={index}>
                  <TopsellSingleCard item={item} />
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Topsell
