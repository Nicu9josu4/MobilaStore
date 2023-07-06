import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"
import './shop.css'


export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems  } = useContext(ShopContext);

    const cartItemAmmount = cartItems[id]

    const ClickedProductInfo = () => {
        document.getElementById("clickedproductt").style.display = "flex";
    }
    return <div className="product" onClick={ClickedProductInfo}> 
    <div className="product-container">
        <div className="product-overlay"></div>
    <div className="product-image">
    <img src={productImage} alt="none"/>
    </div>
    <div className="description">
        <p className="product-name">
            {productName}
        </p>

        <p className="product-price"> {price} MDL</p>
    </div>
    <button id="addbtnid" className="addToCartBtn" onClick={() => addToCart(id)}>
        Adauga In Cos {cartItemAmmount > 0 && <> ({cartItemAmmount})</>}</button>
        </div>
        
        
    </div>
}