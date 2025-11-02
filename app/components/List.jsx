import React from 'react'

const List = ({text , className}) => {
  return (
    <li className={`${className} list-none cursor-pointer duration-500 font-mont text-[13px] md:text-base hover:text-red font-semibold`}>{text}</li>
  )
}

export default List