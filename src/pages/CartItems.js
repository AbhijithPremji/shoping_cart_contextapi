import React, { useContext } from 'react'
import './Cart.css'
import { shopcontext } from '../context/Shop-context'



export const CartItems = (props) => {

const {id,pname,price,productimage} = props.data
const { cartitem,addItem,removeItem,addItemCount} = useContext(shopcontext)
  return (
    <div className='cartItem'>
     <img src={productimage} alt="" className=''/>
        <div className='description'>
            <p>
                <b>
                    {pname}
                </b>
            </p>
            <p>
                <b>
                    Rs: {price}
                </b>
            </p>
        </div>
        <div className='countHandler'>
            <button className='sub' onClick={()=>{removeItem(id)}}>-</button>
            <input className='field' value={cartitem[id]} onChange={(e)=>(addItemCount(Number(e.target.value),id))} />
            <button className='add' onClick={()=>{addItem(id)}}>+</button>
        </div>
    </div>
  )
}

