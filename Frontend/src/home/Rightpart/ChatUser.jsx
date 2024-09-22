import React from 'react'
import useConversation from '../../components/zustand/useConversation'

const ChatUser = () => {
  
  const {selectedConversation} = useConversation();
  // console.log(selectedConversation);
  return (
    <div className='flex space-x-3 h-[8vh] items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
      <div className="avatar online">
            {(selectedConversation != null && <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>)}
            
        </div>
        <div>
            <h1 className='text-xl'>{(selectedConversation != null)?selectedConversation.fullname:""}</h1>
            <span className='text-sm'>{(selectedConversation != null)?"Online":""}</span>
        </div> 
    </div>
  )
}

export default ChatUser
