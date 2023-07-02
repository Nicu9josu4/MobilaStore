import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context"


const CartItem = (props) => {
    const { id, productName, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);


  return (
    <div className='cartItem'>
        <img src={productImage} alt="none"/>
        <div className='description'>
            <p className='product-name'>{productName}</p>
<div className='dprice-center'>
            <p className='product-price'>{price} MDL</p>
            </div>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]}
                 onChange={(e) => 
                 updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
