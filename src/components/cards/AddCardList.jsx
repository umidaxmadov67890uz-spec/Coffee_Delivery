import React, { useContext } from "react";
import CardItem from "./CardItem";
import { DataContext } from '../../context/CardContext';

function AddCardList() {
  const {card} = useContext(DataContext)
  return (
    <div className="container px-2 m-auto mt-6 mb-10 sm:mb-0" >
      <h2 className="text-3xl font-bold text-center lg:text-4xl">Nossos cafés</h2>
      <div className="m-auto mt-12 grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-5 lg:px-5 xl:w-4/5">
        {card.map(item => (<CardItem el={item} key={item.id} />))}
      </div>
    </div>
  );
}

export default AddCardList;
