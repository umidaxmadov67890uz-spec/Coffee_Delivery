import React from "react"
import { DataContext } from "../../context/CardContext"
import { useContext } from "react"

function Descriptions() {
    const {card} = useContext(DataContext)
  return (
    <div>
      <p className="font-normal text-lg flex items-center justify-between">type of products: <span className="font-bold">{card?.filter(e => e?.isSelected)?.length}</span></p>
      <p className="font-normal text-lg flex items-center justify-between">number of products: <span className="font-bold">{card?.reduce((a, b) => (a + b?.count), 0)}</span></p>
      <p className="font-normal text-lg flex items-center justify-between">total price: <span className="font-bold">{card?.reduce((a, b) => (a + b?.total), 0)?.toFixed(1)}$</span></p>
    </div>
  )
}

export default Descriptions
