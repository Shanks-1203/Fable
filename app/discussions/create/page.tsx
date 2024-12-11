import TagSelection from '@/components/Tag Selection/TagSelection'
import React from 'react'

const page = () => {
  return (
    <div>
      <p className='text-2xl font-medium'>Start Discussion</p>

      <div className='mt-6 w-[50%] mx-auto'>
        <p className='opacity-65'>Discussion Name:</p>
        <input type="text" className='w-full outline-none p-2 rounded-sm mt-1'/>

        <p className='opacity-65 mt-6'>Description:</p>
        <textarea className='w-full outline-none h-[10rem] p-2 rounded-sm mt-1 resize-none'/>

        <TagSelection/>
      </div>
    </div>
  )
}

export default page