import React from 'react'
import HeadSingleCard from './HeadSingleCard'
import {data} from '../data/data'

function HeadCard() {
  
  return (
    <div className='grid grid-cols-2'>
      {data.map((item, index) => {
        return(
          <div key={index}>
            <HeadSingleCard item={item}/>
          </div>
        )
      })}
    </div>
  )
}

export default HeadCard
