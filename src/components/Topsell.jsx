import React from 'react'
import { data1 } from '../data/data'
import TopsellSingleCard from './TopsellSingleCard'
import useStore from '../store/store'

function Topsell() {
  const darkmode = useStore((state => state.darkmode))
  return (
    <div  className={darkmode ? 'from-slate-50 to-slate-100 duration-[600ms]' : 'bg-[#404040] duration-[600ms]'}>
      <div className={darkmode ? 'flex justify-center items-center overline' : 'flex justify-center items-center overline text-white'}>
        <h1 className={darkmode ? ' underline underline-offset-8' : 'underline underline-offset-8 text-white'}>Top <span className='font-bold'>Sell</span></h1>
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
