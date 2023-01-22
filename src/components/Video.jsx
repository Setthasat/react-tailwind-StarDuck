import React from 'react'
import Coffee from '../assets/Coffee.mp4'

function Video() {
  return (
    <div>
      <video loop autoPlay muted className='w-[345px] mx-auto my-[12px]'>
        <source src={Coffee} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
