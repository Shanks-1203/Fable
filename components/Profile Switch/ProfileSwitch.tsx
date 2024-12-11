"use client"

import React, { useState } from 'react'

const ProfileSwitch = () => {

    const [mode, setMode] = useState(true);

  return (
    <div className='mt-[2.5rem] flex gap-6'>
        <p className={`p-1 cursor-pointer ${mode && 'border-b-2 border-[#8967B3] text-[#8967B3]'}`} onClick={()=>setMode(true)}>Posts</p>
        <p className={`p-1 cursor-pointer ${!mode && 'border-b-2 border-[#8967B3] text-[#8967B3]'}`} onClick={()=>setMode(false)}>About</p>
    </div>
  )
}

export default ProfileSwitch
