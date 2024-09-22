import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from "../../components/Loading.jsx";
import useGetSocketMessage from '../../context/useGetSocketMessage.js';

const Messages = () => {

  const {loading, messages} = useGetMessage();
  useGetSocketMessage();     //listening incoming messages in real time
  console.log(messages);

  const lastMsgRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMsgRef.current){
        lastMsgRef.current.scrollIntoView({ behavior: "smooth"});
      }
    }, 100);
  }, [messages]);

  return (
    <div className='scrollbar-hide overflow-y-auto' style={{ minHeight: "calc(92vh - 8vh)"}}>
      
      {loading? (<Loading />) : (messages.length>0 && messages.map((message) => (
        <div key={message._id} ref={lastMsgRef}>
          <Message message={message} />
        </div>
      )))}

      {!loading && messages.length === 0 && (
        <div className='flex justify-center items-center h-[80vh] text-lg text-gray-400'>
          <p>Say Hi! to start the conversation.</p>
        </div>
      )}
    </div>
  )
}

export default Messages
 