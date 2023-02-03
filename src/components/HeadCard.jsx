import React from 'react'
import HeadSingleCard from './HeadSingleCard'
import { data } from '../data/data'
import useStore from '../store/store'

function HeadCard() {
  const darkmode = useStore((state => state.darkmode))
  return (
    <div className={darkmode ? 'from-slate-50 to-slate-100 duration-[550ms]' : ' bg-[#404040] duration-[550ms]'}>
      <div className="flex justify-center items-center">
        <h1 className={darkmode ? ' underline-offset-8 underline text-black' : 'underline-offset-8 underline  text-white'}><span className={darkmode ? 'overline ' : 'overline '}>Product</span></h1>
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
