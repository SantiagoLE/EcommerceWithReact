import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart.slice'
import ProductInCart from '../components/cart/ProductInCart'

const Cart = () => {

   const dispatch = useDispatch()
 useEffect(() => {
  dispatch(getAllProductsCartThunk())
 }, [])

 const {cartGlobal} = useSelector(state => state)




  return (
    <div>
      <h2>Cart</h2>
      {
        cartGlobal?.map(prodCart => (
<ProductInCart 
key={prodCart.id}
prodCart={prodCart}
/>
          
        ))
      }
    </div>
  )
}

export default Cart