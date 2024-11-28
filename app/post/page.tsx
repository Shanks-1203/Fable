/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const page = () => {

    const [postType, setPostType] = useState<boolean>(false);
    const [content, setContent] = useState('');

    const handleChange = (value:string) => {
      setContent(value);
    };

    const postContent = () => {
      setPostType(!postType);
    }

  return (
    <div className='w-[50%] mx-auto'>
      <p className='text-[#8967B3] text-xl'>Write your imagination</p>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={page.modules}
        formats={page.formats}
        placeholder="Start writing here..."
        className='w-full rounded-md text-lg mt-4'
      />
      <button onClick={postContent} className='bg-[#8967B3] text-white float-right mt-4 px-4 py-2 rounded-sm'>Post</button>

      { postType &&
        <div dangerouslySetInnerHTML={{ __html: content }} />
      }
    </div>
  )
}

page.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }],
    ['bold', 'italic', 'underline', 'strike'],        
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']
  ]
};

page.formats = [
  'header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image'
];

export default page
