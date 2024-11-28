import React from 'react'
import { IoMdMore } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsChat } from "react-icons/bs";
import posts from '@/constants/feed';
import Image from 'next/image';
import { VscSend } from "react-icons/vsc";

const page = () => {
  return (
    <div className='w-[50%] mx-auto text-black flex flex-col gap-8 mb-[2rem]'>

      { posts.map((post)=>{
        return (
          <div key={post.id} className='w-full shadow-xl p-[2rem] rounded-md'>
            <div className='flex gap-2 mb-4 items-center justify-between'>
              <div className='flex items-center gap-2'>
                <div className='rounded-full w-[3rem] h-[3rem] bg-gray-300'></div>
                <p>{post.author}</p>
              </div>
              <IoMdMore className='text-2xl'/>
            </div>
            <div className='w-full'>
              <Image src={post.post} alt='post' className='w-full rounded-md'/>
            </div>
            <p>{post.description}</p>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center gap-8'>
                <p className='flex items-center gap-2'><CiHeart className='text-3xl'/>{post.likes}</p>
                <p className='flex items-center gap-2'><BsChat className='text-[1.32rem]'/>{post.comments}</p>
                <p className='flex items-center gap-2'><VscSend className='text-2xl'/>Send</p>
              </div>
            </div>
          </div>
        )
        })
      }
    </div>
  )
}

export default page
