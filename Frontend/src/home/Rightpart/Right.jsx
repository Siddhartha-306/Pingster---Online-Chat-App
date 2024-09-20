import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'

const Right = () => {
  return (
    <div className='w-[70%] bg-slate-900 text-gray-300'>
      <ChatUser />
      <div className='scrollbar-hide overflow-y-auto' style={{ maxHeight: "calc(92vh - 8vh)"}}>
        <Messages />
      </div>
      <Typesend />
    </div>
  )
}

export default Right
Right