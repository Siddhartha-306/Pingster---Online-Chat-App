import React from 'react'
import useConversation from '../../components/zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';
import { CiMenuFries } from 'react-icons/ci';

const ChatUser = () => {
  
  const {selectedConversation} = useConversation();
  const {onlineUsers} = useSocketContext();

  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId)?"online":"offline";
  }

  // console.log(selectedConversation);
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-2xl" />
      </label>
      <div className='flex space-x-3 h-[8vh] items-center justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
        <div className="avatar">
              {(selectedConversation != null && <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>)}
              
          </div>
          <div>
              <h1 className='text-xl'>{selectedConversation.fullname}</h1>
              <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span>
          </div> 
      </div>
    </div>
  )
}

export default ChatUser
