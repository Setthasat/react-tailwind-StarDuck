import React from 'react'
import { AiOutlinePhone, AiFillYoutube, AiOutlineGithub, AiFillFacebook } from 'react-icons/ai'

function Footer() {
    return (
        <div className='bg-slate-100'>
            <div className=' font-sans flex justify-center items-center '>
                <h1 className='overline'><span className='underline underline-offset-4'>Contact</span></h1>
            </div>
            <div className='md:grid-cols-2'>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-center items-center'>
                        <AiOutlinePhone />
                        <p>Phone : 081-xxx-xxxx</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <AiOutlineGithub />
                        <p>Github : DekChineSafe</p>
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
