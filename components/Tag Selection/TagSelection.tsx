"use client"

import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

const TagSelection = () => {

    const [tags, setTags] = useState<string[]>([]);
    const [input, setInput] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const addTag = (event:any) => {
        event.preventDefault();
        if(input){
            setTags([...tags, input])
            setInput('');
        }
    }

  return (
    <>
        <p className='opacity-65 mt-6'>Tags:</p>
        <div className={`flex flex-wrap gap-2 items-center ${tags.length > 0 && 'my-3'}`}>
            {
                tags.map((tag, index)=>{
                    return (
                        <div key={index} className='px-3 py-1 text-sm opacity-65 rounded-full border-2 border-[#80808050] cursor-pointer hover:underline'>{tag}</div>
                    )
                })
            }
        </div>
        <form onSubmit={(event)=>addTag(event)}>
            <div className='flex w-full items-center bg-white p-2 rounded-sm mt-1'>
                <input type="text" className='flex-grow outline-none' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <FaCheck className='text-2xl cursor-pointer text-[#8967B3]' onClick={(event)=>addTag(event)}/>
            </div>
        </form>
    </>
  )
}

export default TagSelection
