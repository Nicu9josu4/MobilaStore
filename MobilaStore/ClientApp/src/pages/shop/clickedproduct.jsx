import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context"
import './shop.css'
import clickedimgg from "../../assets/1.png"


export const ClickedProduct = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { addToCart, cartItems  } = useContext(ShopContext);

    const cartItemAmmount = cartItems[id]



    const StopDisplayingClicked = () => {
        document.getElementById("clickedproductt").style.display = "none";
    }

    return <div id="clickedproductt" className="clicked-product">
    <div className="clicked-product-container">
        <div className="clicked-img">
            <img src={productImage}></img>
        </div>

        <div className="clicked-product-info">
            <div className="product-title">{productName}</div>
            <div className="clicked-product-description">
                Descrierea acestui produs
            </div>
            <div className="clicked-product-price">{price} MDL</div>
            <div className="clicked-product-buttons">
            <button className="addToCartBtn2" onClick={() => addToCart(id)}>
                Adauga in Cos {cartItemAmmount > 0 && <> ({cartItemAmmount})</>}
            </button>

            <button className="addToCartBtn2" onClick={StopDisplayingClicked}>Inchide</button>
            </div>
        </div>
    </div>
</div>
}

export default ClickedProduct