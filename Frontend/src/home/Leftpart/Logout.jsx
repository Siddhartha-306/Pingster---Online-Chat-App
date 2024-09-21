import React from 'react';
import { TbLogout } from "react-icons/tb";

const Logout = () => {
  return (
    <div className='h-[6vh]'>
      <div className='flex text-white text-xl hover:bg-slate-700 duration-300 cursor-pointer p-1 h-[68px] justify-center items-center gap-4 mt-[29px]' onClick={handleLogout}>
        LogOut
        <TbLogout className='text-2xl' />
      </div>
    </div>
  )
}

export default Logout
