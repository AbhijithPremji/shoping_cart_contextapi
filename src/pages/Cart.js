import React from 'react'
import { products } from './Products'
import { shopcontext } from '../context/Shop-context'
import {CartItems} from './CartItems'
import {useContext} from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
const {cartitem,total } = useContext(shopcontext);
const totalAmount = total()
let Navigate= useNavigate()

  return (
    <div className='cart'>
      

      <div className='cartItems'>
        {products.map((product)=>{

          if(cartitem[product.id] !== 0) {
            return <CartItems data={product} />
          }
          
        })}
      </div>
      {totalAmount > 0 ? (
        
      <div className='checkout'>
         <h1>Items List </h1>
        <p>Total: RS{totalAmount} </p>
        <button onClick={()=>(Navigate("/"))}>Continue Shopping</button>
        <button onClick={()=>(Navigate("/checkout"))} >Checkout My Cart</button>
      </div>
      ):(
        <h1>Cart Is Empty</h1>
      )}
    </div>
  )
}

export default Cart