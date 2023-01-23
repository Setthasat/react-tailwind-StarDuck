import React from 'react'
import HeadSingleCard from './HeadSingleCard'
import { data } from '../data/data'

function HeadCard() {

  return (
    <div className="">


      <div className='grid grid-cols-2 md:grid-cols-3 shadow-2xl'>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <HeadSingleCard item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeadCard
