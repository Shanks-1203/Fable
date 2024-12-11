import ProfileSwitch from '@/components/Profile Switch/ProfileSwitch'
import React from 'react'
import Logo from '../../assets/images/post2.jpg';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className='flex w-full'>
        <div className='w-[15rem] h-[15rem] rounded-full bg-[#80808050] overflow-hidden'>
          <Image src={Logo} alt="profile" className='rounded-full h-full w-full object-cover'/>
        </div>

        <div className='flex-grow flex items-center justify-between px-[2rem]'>

          <div>
            <p className='text-2xl font-semibold'>Marvel_Shanks</p>
            <p className='opacity-65 mt-1 max-w-[30rem]'>Selenophine.</p>
            
            <p className='mt-5 cursor-pointer px-6 py-2 bg-[#8967B3] w-fit text-white rounded-sm'>Follow</p>
          </div>

          <div className='flex gap-[4rem]'>
            <div>
              <p className='opacity-65'>Followers</p>
              <p className='font-semibold text-5xl mt-1'>7433</p>
            </div>

            <div>
              <p className='opacity-65'>Following</p>
              <p className='font-semibold text-5xl mt-1'>122</p>
            </div>

            <div>
              <p className='opacity-65'>Posts</p>
              <p className='font-semibold text-5xl mt-1'>63</p>
            </div>
          </div>

        </div>
      </div>

      <ProfileSwitch/>
    </>
  )
}

export default page
