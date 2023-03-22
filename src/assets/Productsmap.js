import React, { useContext } from "react";
import { shopcontext } from '../context/Shop-context';

const Productsmap = (props) => {
     const {id,pname,price,productimage } = props.data

     const {addItem,cartitem} = useContext(shopcontext)

     const cartitemcount = cartitem[id]

  return (
    <div className='product'>
        <div className='product-image'>
           <img src={productimage} alt=""/> 
        </div>
        <div className='descripion'>
            <p>
               <b> {pname}  </b>   
            </p>  
            <p>
                <b>Rs: {price}</b>
            </p>          
        </div>
       <button className='addToCartBttn' onClick={()=>addItem(id)}>
         Add to cart {cartitemcount > 0 && <>  ({cartitemcount})  </>  }
       </button>
       
    </div>
  )
}

export default Productsmap