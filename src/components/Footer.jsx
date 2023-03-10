import React from 'react'
import { AiOutlinePhone, AiFillYoutube, AiOutlineGithub, AiFillFacebook } from 'react-icons/ai'
import useStore from '../store/store'

function Footer() {
    const darkmode = useStore((state => state.darkmode))
    return (
        <div className={darkmode ? 'from-slate-50 to-slate-100 duration-[650ms]' : 'bg-[#404040] duration-[650ms]'}>
            <div className={darkmode ? ' font-sans flex justify-center items-center ' : 'text-white font-sans flex justify-center items-center'}>
                <h1 className='overline'><span className='underline underline-offset-4'>Contact</span></h1>
            </div>
            <div className={darkmode ? 'md:grid-cols-2' : 'md:grid-cols-2 text-white'}>
                <div className='grid grid-cols-2 mt-2'>
                    <div className='flex justify-center items-center'>
                        <AiOutlinePhone />
                        <p>Phone : 081-xxx-xxxx</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <AiOutlineGithub />
                        <p>Github : Setthasat (Safety)</p>
                    </div>

                </div>

                <div className='grid md:grid-cols-2 '>
                    <div className='flex justify-center items-center'>
                        <AiFillYoutube />
                        <p>Youtube : StarDuck official</p>
                    </div>

                    <div className='flex justify-center items-center'>
                        <AiFillFacebook />
                        <p>Facebook : StarDuck official</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
