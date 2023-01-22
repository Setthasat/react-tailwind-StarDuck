import React from 'react'
import {data} from '../data/data'

function HeadCard() {
  
  return (
    <div className='grid grid-cols-2'>
      {data.map((item, index) => (
        <div key={index}>
            <image src={item.image} alt={item.id} />
            <div>
                <p>{item.name}</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default HeadCard
