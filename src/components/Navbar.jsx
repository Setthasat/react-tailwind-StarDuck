import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
            <div className='fixed max-w-[1640px] mx-auto flex justify-between items-center p-4'>
                {/* Left side */}
                <div className='flex items-center justify-between'>
                    <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                        <AiOutlineMenu size={30} className='text-yellow-300'/>
                    </div>
                </div>

                
                {nav ? <div className='fixed w-full h-screen bg-black/40 z-10 top-0 left-0'></div> : ''}

                {/* Sidebar */}
                <div className={nav ? 'fixed top-0 left-0 w-[250px] md:w-[350px] h-screen bg-zinc-50 z-10 duration-300 ' : 'fixed top-0 left-[-100%] md:w-[350px] w-[250px] h-screen bg-zinc-50 z-10 duration-300'}>
                    <AiOutlineClose
                        onClick={() => setNav(!nav)}
                        size={30}
                        className='absolute right-4 top-4 cursor-pointer text-black'
                    />
                    <h2 className='text-2xl p-4 text-black'>
                        Star<span className='text-yellow-600'>Duck</span> <span className='font-bold'>Store</span>
                    </h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='text-xl py-4 flex hover:bg-gray-200 pl-3'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                            <li className='text-xl py-4 flex hover:bg-gray-200 pl-3'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                            <li className='text-xl py-4 flex hover:bg-gray-200 pl-3'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                            <li className='text-xl py-4 flex hover:bg-gray-200 pl-3'><MdHelp size={25} className='mr-4' /> Help</li>
                            <li className='text-xl py-4 flex hover:bg-gray-200 pl-3'><FaUserFriends size={25} className='mr-4' /> Login / Sing up</li>
                        </ul>
                    </nav>
                </div>
            </div>
    );
};

export default Navbar;
