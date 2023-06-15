import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"; 
import { ShoppingCart, User } from "phosphor-react";

export const Navbar = () => {
  return <div className='navbar'>
<div className='linksleft'>
  <div className='logo'><Link to="/">LOGO</Link></div>
    <div className='links'>
    <Link to="/home">Principala</Link>
    <Link to="/about">Despre noi</Link>
    <Link to="/contact">Contacte</Link>
    <Link to="/categories">Catalog</Link>
    </div>
    </div>
    <div className='linksright'>
    <div className='links'>
      <Link to="/">Magazin</Link>
      <Link className='iconsimage' to="/cart">
        <ShoppingCart size={30} />
      </Link>
      <Link className='iconsimage' to="/profile"><User size={30} /></Link>
    </div>
    </div>
  </div>
};