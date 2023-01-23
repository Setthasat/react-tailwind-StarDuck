import React from 'react'
import HeadSingleCard from './HeadSingleCard'
import { data } from '../data/data'

function HeadCard() {

  return (
    <div className='bg-slate-100'>
      <div className="flex justify-center items-center">
        <h1 className='underline-offset-8 underline'><span className='overline'>Product</span></h1>
      </div>
      <div>
        <div className='grid grid-cols-2 md:grid-cols-4 '>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <HeadSingleCard item={item} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeadCard
