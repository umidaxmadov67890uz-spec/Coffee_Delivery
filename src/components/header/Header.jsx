import { Link } from "react-router-dom"
import { MdLocalGroceryStore } from "react-icons/md"
import { FaBookmark } from "react-icons/fa"
import { GiCoffeeCup } from "react-icons/gi"

function Header() {
  return (
    <header className="fixed z-50 bg-white w-full px-2 lg:px-5 top-0 border-b border-gray-300">
      <div className='flex justify-between items-center py-2 m-auto'>
        <Link to={"/"}> <span className="flex items-center gap-x-1 text-violet-800 font-bold text-2xl"> <GiCoffeeCup className="h-8 w-auto" />Coffee</span></Link>
        <div className="hidden sm:flex sm:items-center sm:gap-x-1">
        <Link to={"/my-favorites"}><FaBookmark className="h-8 w-auto cursor-pointer p-1 text-violet-800  bg-violet-200 rounded-md" /></Link>
        <Link to={"/cart"} ><MdLocalGroceryStore className="h-8 w-auto cursor-pointer p-1 text-violet-800 bg-violet-200 rounded-md" /></Link>
        </div>
      </div>
    </header>
  )
}

export default Header
