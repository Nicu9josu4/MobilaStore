import React, { useContext } from "react";
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import CartItem from './cart-item'
import './cart.css'

import { useNavigate } from "react-router-dom"

export const Cart = () => {
    const { cartItems, getTotalCartAmmount } = useContext(ShopContext);
    const totalAmmount = getTotalCartAmmount();

    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }


    return <div className="cart">
        <div className="cart-header"> 
            <h1> Produsele selectate </h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0 ) {
                    return <CartItem  data={product} />
                }
            })}
        </div>
        {totalAmmount > 0 ? (
        <div className="checkout">
            <p className="check-total"> Total: {totalAmmount} MDL</p>
            <div className="cart-buttons">
            <button onClick={() => navigate("/shop/#navbarid")}><p onClick={scrollToTop}> Continua</p> </button>
            <button> Cumpara </button>
            </div>
        </div>
        ) : ( <h1>Inca nu ai adaugat nimic</h1>
        )}
        
    </div>
}