import React from 'react'
import { FaBookmark, FaHome } from 'react-icons/fa'
import { MdLocalGroceryStore } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className='container m-auto  fixed bottom-0 bg-white border-t border-gray-300 py-2 sm:hidden'>
      <div className='flex items-center justify-evenly w-full'>
        <NavLink to={"/"} ><FaHome className='w-8 h-8'/></NavLink>
        <NavLink to={"/cart"} ><MdLocalGroceryStore className='w-8 h-8'/></NavLink>
        <NavLink to={"/my-favorites"} ><FaBookmark className='w-6 h-6'/></NavLink>
      </div>
    </div>
  )
}

export default NavBar
