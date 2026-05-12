import React, { useContext } from 'react'
import { DataContext } from '../../context/CardContext'
import { Link } from 'react-router-dom'
import Descriptions from '../description/descriptions'
import BasketCard from '../cards/BasketCard'

function SelectedProducts() {
    const {card} = useContext(DataContext)
    
  return (
    <div className=" mb-24 sm:mb-12 md:mb-0">
      <div className="w-full bg-white pt-14 pb-1 md:hidden">
        <div className="w-full px-5 container m-auto">
          <Descriptions />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] md:mt-14 lg:grid-cols-[70%_30%]">
        <div className="grid grid-cols-1 container m-auto px-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:pl-5 lg:pr-2 xl:grid-cols-3 xl:pl-5">
          {card.filter(e => e.isSelected).map(item => (
            <BasketCard el={item} key={item.id} />
          ))}
        </div>
        <div className="w-full pr-2 hidden lg:pr-5 md:block">
          <div className="h-36 bg-white py-2 px-3 rounded-2xl sticky right-2 top-16">
            <Descriptions />
            <Link to={"/form"} ><span  className="w-full block text-center mt-2 rounded-2xl bg-violet-700 hover:bg-violet-600 text-white text-lg font-bold py-1 cursor-pointer">formalization</span></Link>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 px-2 pb-16 pt-2 w-full bg-white drop-shadow-2xl drop-shadow-black sm:pb-3 md:hidden">
        <Link to={"/form"} > <span className="w-full rounded-2xl text-center block bg-violet-700 hover:bg-violet-600 text-white text-lg font-bold py-1 cursor-pointer">formalization</span></Link>
      </div>
    </div>
  )
}

export default SelectedProducts
