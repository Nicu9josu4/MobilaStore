import { React, useState }from "react";
import { PRODUCTS } from "../../products"
import { Product } from "./product"
import './shop.css'
import { ClickedProduct } from "./clickedproduct"
import clickedimgg from "../../assets/1.png"
// import { Link } from "react-router-dom"

import List from './List'
import Searchbar from './Searchbar'

// shop components 
import Categories from "../../components/forshopcomponents/Categories"
// import TextField from '@material-ui/core/TextField';


export const Shop = () => {

    const [results, setResults] = useState([])




    return <div className="shop">
        <div className="shop-container">
        <div className="shop-head-section">
            <h1 className="shopTitle">NAME SHOP</h1>
            <Searchbar setResults={setResults} />
            {results && results.length > 0 && <List results={results} />}
            {/* <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List /> */}
        </div>

        <Categories />


        <div className="products">
            { PRODUCTS.map((product) => (
                <Product data={product}/>
            )) }
        </div>

        <div className="clicked-products">
            { PRODUCTS.map((product) => (
                <ClickedProduct data={product}/>
            )) }
        </div>
        {/* <div className="clicked-product">
            <div className="clicked-product-container">
                <div className="clicked-img">
                    <img src={clickedimgg}></img>
                </div>

                <div className="clicked-product-info">
                    <div className="product-title"></div>
                </div>
            </div>
        </div> */}
        </div>


    </div>
}