import React, { useEffect } from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Typesend from './Typesend'
import useConversation from '../../components/zustand/useConversation';
import {useAuth} from "../../context/Authprovider.jsx";
import {CiMenuFries} from "react-icons/ci";

const Right = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
    return setSelectedConversation(null)
  }, [setSelectedConversation]);

  return (
  <div className='w-full bg-slate-900 text-gray-300'>
    <div>
      {!selectedConversation ? (<NoChatSelected />) : (
          <>
            <ChatUser />
            <div className='scrollbar-hide overflow-y-auto' style={{ maxHeight: "calc(92vh - 8vh)"}}>
                <Messages />
            </div>
            <Typesend />
          </>
      )}
    </div>
  </div>
  )
}

export default Right;




const NoChatSelected = () => {
  const [authUser] = useAuth();

  return(
    <>
      <div className='relative'>
        <label htmlFor='my-drawer-2' className='btn btn-ghost drawer-button lg:hidden absolute left-5'>
          <CiMenuFries className="text-white text-2xl" />
        </label>
        <div className='flex h-screen items-center justify-center'>
            <h1 className='text-center'>Welcome <span className='font-semibold'>{authUser.user.fullname}</span>
            <br />
            <br />
            No chat is selected, please start the conversation by selecting anyone from your contacts.
            </h1>
        </div>
      </div>
    </>
  )
}