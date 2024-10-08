import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/Logo.png'
import { CiUser } from "react-icons/ci";

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center text-[#8967B3] bg-[#EEEDED] px-8 fixed top-0'>
        <div className='flex justify-start items-center py-2 gap-1'>
            <Image src={logo} alt='logo' className='w-[3.5rem]'/>
            <p className='text-2xl font-bold'>fable.</p>
        </div>
        <div className='flex gap-[3rem] items-center'>
            <p>Discussions</p>
            <CiUser className='cursor-pointer text-2xl'/>
        </div>
    </div>
  )
}

export default Header
