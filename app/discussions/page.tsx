"use client"

import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";

const Page = () => {

  const [mode, setMode] = useState<boolean>(true);

  const discussions = [
    {
      id:1,
      title:"Wholesome People...",
      author: 'Shanks1203',
      description:"Wholesome people radiate kindness, compassion, and positivity, bringing comfort and joy to others. They find beauty in simplicity, celebrate small victories, and uplift those around them with genuine care. With unpretentious actions and open hearts, they inspire others to cherish life's little moments and create a brighter, more loving world.",
      date:"01/01/2024",
      tags: ['wholesome', 'people', 'being-human'],
      likes: 1378,
      comments: 203,
    },
    {
      id:2,
      title:"I love cats 😻",
      author: 'Shree2802',
      description:"I love cats for their playful curiosity, soft purring, and independent yet affectionate nature. Their quirky antics bring endless joy, while their quiet companionship feels comforting. Cats teach us to appreciate calm moments and live with grace. Whether mischievous or cuddly, they're the perfect blend of sass and sweetness.",
      date:"21/05/2024",
      tags: ['cats', 'kittens', 'mischief'],
      likes: 5793,
      comments: 104,
    },
    {
      id:3,
      title:"Best k-drama to watch in 2024.",
      author: 'Anuuu',
      description:"The best K-dramas to watch in 2024 are packed with compelling stories, diverse genres, and top-tier performances. From intense revenge plots to heartwarming romances, there's something for everyone. Whether you're into action, romance, or thought-provoking narratives, 2024's lineup is brimming with must-watch K-dramas.",
      date:"24/03/2024",
      tags: ['k-drama', 'dr-romantic', 'pinocchio'],
      likes: 2032,
      comments: 334,
    },
    {
      id:4,
      title:"How to make a friend uninstall instagram?",
      author: 'Blade_2501',
      description: "Seriously? Another reel? Are you kidding me? It's like you think I'm interested in watching the same dance moves for the hundredth time. Maybe if I start sending you 10-page essays, you'd get the hint. Come on, just uninstall it already. It's not even that hard, man.",
      date:"12/01/2024",
      tags: ['instagram', 'friend', 'uninstall'],
      likes: 1504,
      comments: 256,
    },
    {
      id:5,
      title:"Reasons why we should resurrect Soviet Union.",
      author: 'Adolf_Hitler',
      description:"Oh, resurrect the Soviet Union? Sure, let's bring back all the chaos, brutal repression, and endless ideological battles. What better way to strengthen global peace than reviving a massive, oppressive empire? After all, who doesn't love the idea of competing with another totalitarian regime for world domination? Perfect!",
      date:"01/11/2024",
      tags: ['soviet-union', 'hitler', 'ww2', 'germany', 'power'],
      likes: 126596,
      comments: 1743,
    }
  ]

  return (
    <>
        <div className='flex justify-between w-full items-center'>
            <p className='text-2xl font-medium'>Discussions</p>
            <form className='flex items-center bg-white w-[30%] rounded-sm'>
                <IoIosSearch className='text-3xl mx-2 text-[#8967B3]'/>
                <input type="text" placeholder='Search discussions...' className='w-full py-2 outline-none' name='query'/>
            </form>
        </div>

        <div className='mt-4 w-full'>
            <ul className='flex items-center gap-4'>
              <li className={`cursor-pointer ${mode && 'border-b-2 border-b-[#8967B3] text-[#8967B3]'}`} onClick={()=>setMode(true)}>Interests</li>
              <li className={`cursor-pointer ${!mode && 'border-b-2 border-b-[#8967B3] text-[#8967B3]'}`} onClick={()=>setMode(false)}>Trending</li>
            </ul>

            <div className='flex flex-col gap-4 mt-4'>
              {
                discussions.map((discussion, index) => {
                  return (
                    <div key={index} className='w-full border-2 border-[#80808020] p-4 rounded-md'>
                      <div className='flex gap-3 items-center'>
                        <div className='w-[2.5rem] h-[2.5rem] rounded-full bg-[#80808050]'/>
                        <p className='cursor-pointer'>{discussion.author}</p>
                        <p className='ml-auto text-sm opacity-65'>{discussion.date}</p>
                      </div>
                      <div className='flex flex-col gap-4 mt-2'>
                        <p className='font-medium text-xl text-[#8967B3] cursor-pointer hover:underline'>{discussion.title}</p>
                        <p>{discussion.description}</p>
                        <div className='flex gap-3 items-center'>
                          {
                            discussion.tags.map((tag, index)=>{
                              return (
                                <div key={index} className='px-3 py-1 text-sm opacity-65 rounded-full border-2 border-[#80808050] cursor-pointer hover:underline'>{tag}</div>
                              )
                            })
                          }
                        </div>
                      </div>

                      <hr className='h-[3px] bg-[#80808020] my-4'/>

                      <div className='flex items-center gap-8 text-sm opacity-65'>
                          <p className='flex items-center gap-1'><AiOutlineLike className='text-2xl'/> {discussion.likes}</p>
                          <p>{discussion.comments} comments</p>
                      </div>

                    </div>
                  )
                })
              }
            </div>
        </div>
    </>
  )
}

export default Page
