import React from 'react';
import { IoMdSend } from "react-icons/io";

const Typesend = () => {
  return (
    <div className='flex items-center justify-between px-4 space-x-1 h-[8vh] bg-gray-800'>
        <div className='w-[70%] mx-4'>
            <input type="text" placeholder='Type here' className='border-2 border-gray-400 w-full outline-none rounded-xl mt-1 px-4 py-3 bg-gray-800 h-[45px] text-lg' />
        </div>
        <button>
            <IoMdSend className='text-4xl'/>
        </button>
    </div>
  )
}

export default Typesend
