import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"
import './shop.css'


export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems  } = useContext(ShopContext);

    const cartItemAmmount = cartItems[id]
    return <div className="product"> 
    <div className="product-container">
        <div className="product-overlay"></div>
    <div className="product-image">
    <img src={productImage} />
    </div>
    <div className="description">
        <p className="product-name">
            {productName}
        </p>

        <p className="product-price"> {price} MDL</p>
    </div>
    <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Adauga In Cos {cartItemAmmount > 0 && <> ({cartItemAmmount})</>}</button>
        </div>
    </div>
}