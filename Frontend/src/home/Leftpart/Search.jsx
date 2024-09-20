import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='h-[10vh]'>
      <div className='px-6 py-4'>
        <form action="">
          <div className='flex space-x-3'>
              <label className="border-[1px] border-gray-700 bg-slate-900 rounded-lg flex items-center p-3 gap-2 w-[80%] h-[40px] mt-2">
                  <input type="text" className="grow outline-none bg-slate-900" placeholder="Search" />
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
