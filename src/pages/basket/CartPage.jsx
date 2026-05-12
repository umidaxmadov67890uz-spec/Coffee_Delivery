import React, { useContext } from 'react'
import { DataContext } from '../../context/CardContext'
import SelectedProducts from '../../components/cart/SelectedProducts'
import EmptyCart from '../../components/cart/EmptyCart'

function CartPage() {
  const {card} = useContext(DataContext)
  const selected = card.some(e => e.isSelected)
  
  return (
    <>
      {selected ? <SelectedProducts /> : <EmptyCart />}
    </>
  )
}

export default CartPage
