import React, { createContext, useState } from 'react'
import { products } from '../pages/Products'


export const shopcontext = createContext(null)

const getDefaultCart = ()=>{
    let cart = {}

    for(let i=1; i< products.length +1 ;i++){
        cart[i] = 0
    }
    return cart
}



export function ShopcontextProvider(props) {
    const [cartitem,setcartitem] = useState(getDefaultCart())

const addItem = (itemid)=>{
    setcartitem((prevval)=>({...prevval,[itemid]:prevval[itemid]+1}))
}

const removeItem = (itemid)=>{
    setcartitem((prevval)=>({...prevval,[itemid]:prevval[itemid]-1}))
}



const addItemCount = (newAmount,itemid) =>{
setcartitem((prevval)=>({...prevval,[itemid]:newAmount}))
}

const total = ()=>{
    let toalamount = 0
    for (const item in cartitem){
        if (cartitem[item]>0){
        let iteminfo = products.find((product) => product.id === Number(item))
        toalamount = toalamount + cartitem[item] * iteminfo.price;
    }
   }
   return toalamount
}


const contextValue = {cartitem,addItem,removeItem,addItemCount,total}
  return (
 <shopcontext.Provider value={contextValue}>{props.children}</shopcontext.Provider>
  )
}

export default ShopcontextProvider