import React, { useState } from 'react';
import { TbLogout } from "react-icons/tb";
import axios from 'axios';
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    // setLoading(true);
    try {
      const response = await axios.post("/api/user/logout");
      localStorage.removeItem("GupShup");
      Cookies.remove("jwt");
      // setLoading(false);
      alert("Logged Out successfully");
      window.location.reload();    //to reload the page so that after logout the login page will show
    } catch (error) {
      console.log("Error in logout", error);
    }
  }

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
