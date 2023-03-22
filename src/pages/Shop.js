import React from 'react'
import { products } from './Products'
import Productsmap from '../assets/Productsmap'
import "./Shop.css"

export const Shop = () => {
  return (
    <div className='shop'>
       <div className='shop-title'>
        <h1>R-CART</h1>
       </div>
       <div className='products'>
        {products.map((products)=>(
            <Productsmap data={products}/>
        ))}
       </div>
    </div>
  )
}
