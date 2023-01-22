import React from 'react'

function HeadSingleCard({item}) {
  return (
    <div className='bg-stone-500 m-3 h-[70px] rounded-b-lg rounded-r-lg'>
        <img src="item.image" className='rounded-lg flex justify-center items-center' />
      <p className='text-white flex justify-center items-center mt-4'>
        {item.name}
      </p>
    </div>
  )
}

export default HeadSingleCard
