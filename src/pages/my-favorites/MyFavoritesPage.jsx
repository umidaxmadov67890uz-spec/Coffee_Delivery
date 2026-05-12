import React, { useContext } from 'react'
import CardItem from '../../components/cards/CardItem'
import { DataContext } from './../../context/CardContext';

function MyFavoritesPage() {
  const {card} = useContext(DataContext)
  return (
    <div className="container px-2 m-auto mt-16" >
      <h2 className="text-3xl font-bold text-center lg:text-4xl pb-5">Nossos cafés</h2>
      <div className="m-auto mt-12 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-5 lg:px-5 xl:w-4/5">
        {card?.filter(e => e.favorite).map(item => (<CardItem el={item} key={item.id} />))}
      </div>
    </div>
  )
}

export default MyFavoritesPage
