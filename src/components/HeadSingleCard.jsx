import React from 'react'

function HeadSingleCard({item}) {
  return (
    <div className='bg-gradient-to-tr from-yellow-500 to-yellow-200 m-3 h-[70px] rounded-b-lg rounded-r-lg'>
        <img src="item.image" className='rounded-lg flex justify-center items-center' />
      <p className='text-white flex justify-center items-center mt-4 font-sans'>
        {item.name}
      </p>
    </div>
  )
}

export default HeadSingleCard
