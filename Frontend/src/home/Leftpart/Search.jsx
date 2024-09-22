import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import useGetAllUsers from "../../context/useGetAllUsers";
import useConversation from "../../components/zustand/useConversation";
import { toast } from 'react-toastify';

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const {setSelectedConversation} = useConversation();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search)
       return;
    
    const conversation = allUsers.find((user)=> user.fullname.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }
    else{
      toast.error("User not found");
    }
  }

  return (
    <div className='h-[10vh]'>
      <div className='px-6 py-4'>
        <form onSubmit={handleSubmit}>
          <div className='flex space-x-3'>
              <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg flex items-center p-3 gap-2 w-[80%] h-[40px] mt-2">
                  <input type="text" className="grow outline-none bg-slate-900" placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)} />
              </label>
              <button>
                  <FaSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 mt-1' />
              </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search
