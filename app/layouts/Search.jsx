import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Search = () => {
  return (
    <div className='rounded-md relative bg-[#E6E6E6] h-[50px] w-[600px] px-4'>
        <input type="text" placeholder='search for products' className='h-full w-full outline-none border-0'/>
        <button className='h-10 w-10 flex items-center justify-center rounded-full absolute top-[5px] right-2 z-50 cursor-pointer hover:bg-gray-300 '>
                    <IoSearchOutline size={30} />
            </button>      
    </div>
  )
}

export default Search
