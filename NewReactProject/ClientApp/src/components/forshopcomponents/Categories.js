import React from 'react'
import "../../pages/shop/shop.css"
import { Link } from "react-router-dom"

const Categories = () => {

    
  return (
    <div className="categories">
            <div className="categories-container">
                <div className="categories-sec">
                        <div className="category-name">
                            <Link to="/bucatarii">Bucatarii</Link>
                            </div>
                </div>

                <div className="categories-sec">
                        <div className="category-name">
                        <Link to="/dormitoare">Dormitoare</Link>
                            </div>
                </div>

                <div className="categories-sec">
                        <div className="category-name">
                        <Link to="/usi">Usi</Link>
                            </div>
                </div>

                <div className="categories-sec">
                        <div className="category-name">
                        <Link to="/sufragerii">Sufragerii</Link>
                            </div>
                </div>

                <div className="categories-sec">
                        <div className="category-name">
                        <Link to="/altele">Altele</Link>
                            </div>
                </div>

            </div>
        </div>
  )
}

export default Categories
