import Image from 'next/image'
import React from 'react'
import logo from '../../assets/images/Logo.png'
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center text-[#8967B3] bg-[#EEEDED] z-10 px-8 h-[8vh] fixed top-0'>
        <div className='flex justify-start items-center py-2 gap-1'>
            <Image src={logo} alt='logo' className='w-[3.5rem]'/>
            <p className='text-2xl font-bold'>fable.</p>
        </div>
        <Link href='/profile'><FaRegUser className='cursor-pointer text-2xl'/></Link>
    </div>
  )
}

export default Header
