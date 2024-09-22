import React from 'react'

const Message = ({message}) => {
  
  const authUser = JSON.parse(localStorage.getItem("PingSter"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColour = itsMe ? "bg-blue-500" : "";
  
  return (
    <div>
      <div className='p-4'>
        <div className={`chat ${chatName}`}>
            <div className={`chat-bubble text-white ${chatColour}`}>{message.message}</div>
        </div>
      </div>
    </div>
  )
}

export default Message
