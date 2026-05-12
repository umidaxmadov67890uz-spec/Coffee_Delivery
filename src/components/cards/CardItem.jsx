import React, { useContext }  from 'react'
import { BsBookmark } from 'react-icons/bs'
import { MdOutlineLocalGroceryStore } from 'react-icons/md'
import { DataContext } from '../../context/CardContext'

function CardItem({el}) {
    const {setCard} = useContext(DataContext)

    function toggel (id){
      setCard(prev => prev.map(item => item?.id === id ? {...item, favorite: !item?.favorite} : item))
    }

    function selected(id){
      setCard(prev => prev.map(item => item?.id === id ? {...item, isSelected: !item?.isSelected, total: item?.total + item?.price, count: 1} : item ))
    }

    function increment (id){
      setCard(prev => prev.map(item => item?.id === id ? {...item, count: item?.count + 1, total: item?.total + item?.price} : item ))
    }
    
    function decrement (id){
      if(el?.count === 1){
          setCard(prev => prev.map(item => item?.id === id ? {...item, isSelected: false, total: 0} : item ))
      }else if(el.count > 1){
        setCard(prev => prev.map(item => item?.id === id ? {...item, count: item?.count - 1, total: item?.total - item?.price} : item ))
      }else{return}
    }

    
   return (
    <div className='flex flex-col items-center gap-y-2 w-full h-max m-auto px-1 pb-2 bg-white rounded-md'>
      <div className='h-24 w-32 relative flex justify-center'>
        <img src={el?.img} alt="coffee-image" className='absolute bottom-0 h-32 w-auto' />
      </div>
      <div className='flex w-full justify-center'>
        <div className='flex gap-1 w-auto overflow-x-scroll scroll-none'>
          {el?.type.map((item,i) => (<p className='text-[#C47F17] text-xs text-nowrap py-1 px-2 bg-[#F1E9C9] rounded-lg m-auto' key={i}>{item}</p>))}
        </div>
      </div>
      
      <p className='text-sm font-bold text-center line-clamp-1 sm:text-lg '>{el?.name}</p>
      <p className='text-xs text-center h-12 line-clamp-3 sm:text-sm'>{el?.description}</p>
      <p className='font-bold text-center sm:text-lg' >{el?.price}$</p>
      <div className='flex flex-col gap-y-1 w-full'>
        <button type="button" onClick={() => toggel(el.id)} className={`w-full h-6 flex items-center justify-center border border-violet-700  ${el?.favorite? `bg-violet-700 hover:bg-violet-600` : `bg-transparent`} rounded-[5px] py-1.5 cursor-pointer transition-all sm:h-8`}>
          <BsBookmark color={`${el?.favorite? `#fff` : `#7000ff`}`} />
        </button>
        {
          el.isSelected? 
          (
            <div className='grid grid-cols-3 w-full h-6 bg-violet-100 border border-violet-700 rounded-[5px] sm:h-8'>
              <button type="button" onClick={() => decrement(el?.id)} className='flex items-center justify-center h-full cursor-pointer bg-violet-600 hover:bg-violet-500 text-white rounded-[5px]'>-</button>
              <p className='m-auto'>{el?.count}</p>
              <button type="button" onClick={() => increment(el?.id)} className='flex items-center justify-center h-full cursor-pointer bg-violet-600 hover:bg-violet-500 text-white rounded-[5px]'>+</button>
            </div>
          ):
          (
            <button type="button" onClick={() => selected(el?.id)} className='w-full h-6 flex items-center justify-center border border-violet-700 bg-violet-700 hover:bg-violet-600 rounded-[5px] py-1.5 cursor-pointer sm:h-8'>
              <MdOutlineLocalGroceryStore color='#fff' />
            </button>
          )
        }
        
      </div>
    </div>
  )
}


{/* <BsBookmarkFill /> */}


export default CardItem
