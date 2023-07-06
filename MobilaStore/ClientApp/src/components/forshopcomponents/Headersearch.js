import { React, useState }from "react";
import "../../pages/shop/shop.css"
// import { PRODUCTS } from "../../products"
// import { Product } from "./product"
// import { Link } from "react-router-dom"

import List from '../../pages/shop/List'
import Searchbar from '../../pages/shop/Searchbar'
const Headersearch = () => {

    const [results, setResults] = useState([])


  return (
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
  )
}

export default Headersearch
