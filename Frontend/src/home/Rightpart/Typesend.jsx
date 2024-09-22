import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../context/useSendMessage.js';

const Typesend = () => {
  const [message, setMessage] = useState("");
  const {loading, sendMessages} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center justify-between px-4 space-x-1 h-[8vh] bg-gray-800'>
          <div className='w-[70%] mx-4'>
              <input
              type="text" 
              placeholder='Type here' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              className='border-2 border-gray-400 w-full outline-none rounded-xl mt-1 px-4 py-3 bg-gray-800 h-[45px] text-lg' />
          </div>
          <button>
              <IoMdSend className='text-4xl'/>
          </button>
      </div>
    </form>
  )
}

export default Typesend
