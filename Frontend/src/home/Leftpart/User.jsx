import React from 'react'
import useConversation from '../../components/zustand/useConversation'

const User = ({user}) => {

  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div className= {`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} onClick={()=>setSelectedConversation(user)}>
      <div className='flex items-center space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer'>
        <div className="avatar online">
            <div className="w-12 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
        <div>
            <h1 className='font-bold'>{user.fullname}</h1>
            <span>{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default User
