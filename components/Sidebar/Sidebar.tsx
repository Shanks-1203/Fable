"use client"

import React from 'react'
import options from './sidebarOptions'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <div className='w-[20%] h-full text-[#8967B3] pt-[4.5rem] fixed left-0 top-0'>
        <ul className='flex flex-col gap-4 mt-[2rem]'>
            { options.map((option)=>{
                return (
                  <Link key={option.name} href={option.path}>
                    <li className={`cursor-pointer pl-8 py-4 flex gap-3 items-center ${pathname === option.path && 'border-l-4 border-[#8967B3] bg-gradient-to-r from-[#8967B360] to-[#8967B300]'}`}><span className='text-[1.75rem] w-[2rem]'>{<option.icon/>}</span>{option.name}</li>
                  </Link>
                )
            })
            
            }
        </ul>
    </div>
  )
}

export default Sidebar
