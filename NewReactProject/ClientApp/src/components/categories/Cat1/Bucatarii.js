import React from 'react'
import "./Bucatarii.css"
import Headersearch from "../../forshopcomponents/Headersearch"
import Categories from "../../forshopcomponents/Categories"

const Bucatarii = () => {
  return (
    <div className='sec-cat1'>
      <div className='sec-cat1-container'>
  <Headersearch />
    <Categories />
      </div>
    </div>
  )
}

export default Bucatarii
