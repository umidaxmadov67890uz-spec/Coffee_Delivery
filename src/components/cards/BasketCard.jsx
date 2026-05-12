import React, { useContext } from 'react'
import { DataContext } from '../../context/CardContext'
import { BsBookmark } from 'react-icons/bs'

function BasketCard({el}) {
    const {setCard} = useContext(DataContext)

    function increment (id){
      setCard(prev => prev.map(item => item?.id === id ? {...item, count: item?.count + 1, total: item?.total + item?.price} : item ))
    }
    
    function decrement (id){
      if(el?.count === 1){
          setCard(prev => prev.map(item => item?.id === id ? {...item, isSelected: false, total: 0, count: 0} : item ))
      }else if(el.count > 1){
        setCard(prev => prev.map(item => item?.id === id ? {...item, count: item?.count - 1, total: item?.total - item?.price} : item ))
      }else{return}
    }

    function toggel (id){
      setCard(prev => prev.map(item => item?.id === id ? {...item, favorite: !item?.favorite} : item))
    }

    function remove (id){
      setCard(prev => prev.map(item => item?.id === id ? {...item, isSelected: false, total: 0, count: 0} : item))
    }


    
  return (
   <div className='m-1 mt-2 pt-1 rounded-2xl overflow-hidden bg-white'>
    <div className='flex gap-x-1 px-1'>
      <img src={el?.img} alt={el?.name} className='w-16 h-16'/>
      <div>
        <h3 className='font-bold text-lg line-clamp-1'>{el?.name}</h3>
        <div className='flex gap-1 w-auto overflow-x-scroll scroll-none'>
          {el?.type.map((item,i) => (<p className='text-[#C47F17] text-xs text-nowrap py-1 px-2 bg-[#F1E9C9] rounded-lg ' key={i}>{item}</p>))}
        </div>
      </div>
    </div>
    <div className='p-3'>
        <p className='h-12 line-clamp-2'>{el?.description}</p>
        <div className='flex w-full justify-between'>
          <div>
            <p><span className='font-bold'>price: </span>{el?.price}$</p>
            <p><span className='font-bold'>total: </span>{el?.total?.toFixed(1)}$</p>
          </div>
          <div className='flex items-center'>
            <div className='grid grid-cols-3 w-36 h-10 mt-1 bg-violet-100 p-1 rounded-[5px]'>
              <button type="button" onClick={() => decrement(el?.id)} className='flex items-center justify-center h-8 cursor-pointer bg-violet-600 hover:bg-violet-500 text-white rounded-[5px]'>-</button>
              <p className='m-auto'>{el?.count}</p>
              <button type="button" onClick={() => increment(el?.id)} className='flex items-center justify-center h-8 cursor-pointer bg-violet-600 hover:bg-violet-500 text-white rounded-[5px]'>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-black h-10 flex'>
        <button type="button" onClick={() => toggel(el?.id)} className={`w-1/2 flex items-center justify-center border-r  ${el?.favorite? `bg-violet-700 hover:bg-violet-600 border-white` : `bg-transparent border-black`}  cursor-pointer transition-all`}>
          <BsBookmark color={`${el?.favorite? `#fff` : `#7000ff`}`} className='h-6 w-auto' />
        </button>
        <button onClick={() => remove(el?.id)} className='text-center w-1/2 text-red-600 font-bold cursor-pointer'>delete</button>
      </div>
   </div>
  )
}

export default BasketCard


