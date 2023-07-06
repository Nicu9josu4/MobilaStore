import React, { useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"; 
import { ShoppingCart, User, List, X } from "phosphor-react";
// import { categoriesItems } from "./Categories"

export const Navbar = () => {

  const navRef = useRef();
  // const mobilenavidd = document.getElementById("mobilenavid");

  // const Displaynavbar = () => {
  //   console.log("clicked");
  //   mobilenavidd.style.transform = "translateX(100%)";
  // };


  const LinksActive = () => {
    const link = document.getElementById("link");
    console.log("link clicked");

  }

  const NavbarDisplaytwo = () => {
    const mobilenavidd = document.getElementById("mobilenavid");
    const navicon2 = document.getElementById("navmenuicon2");
    const navicon = document.getElementById("navmenuicon1");

    console.log("clicked2");
    mobilenavidd.style.transform = "translateX(-100%)";
    navicon2.style.display = "none";
    navicon.style.display = "block";
  }

  const NavbarDisplay = () => {
    const mobilenavidd = document.getElementById("mobilenavid");
    const navicon = document.getElementById("navmenuicon1");
    const navicon2 = document.getElementById("navmenuicon2");

    console.log("clicked");
    mobilenavidd.style.transform = "translateX(0)";
    navicon.style.display = "none";
    navicon2.style.display = "block";
  };

  return <div className='navbar' id="navbarid" ref={navRef}>
    <div className='logo-mobile'><Link to="/">LOGO</Link></div>
    <div className="nav-menu-mobile" id="mobilenavid">
    
<div className='linksleft'>
  <div className='logo'><Link to="/">LOGO</Link></div>
    <div className='links'>
    <Link id="link" onClick={LinksActive} to="/home">Principala</Link>
    <Link id="link" onClick={LinksActive} to="/about">Despre noi</Link>
    <Link id="link" onClick={LinksActive} to="/contact">Contacte</Link>
    <a href="/home">Categorii</a>
    </div>
    </div>
    <div className='linksright'>
    <div className='links'>
      <Link id="link" onClick={LinksActive} to="/shop">Magazin</Link>
      <Link id="link" onClick={LinksActive} className='iconsimage' to="/cart">
        <ShoppingCart size={30} />
      </Link>

      <Link className='icon-for-mobile' to="/cart">
        <ShoppingCart size={42} />
      </Link>

      <Link className='iconsimage' to="/profile">
        <User size={30} />
        </Link>
      
        <Link className='icon-for-mobile' to="/profile">
        <User size={42} />
        </Link>

    </div>
    </div>
    </div>
    
    <label id="mynavbaricons">
    <div className='nav-menu-icon' onClick={NavbarDisplay} id="navmenuicon1"><List size={42} /></div>
    <div className='nav-menu-icon2' onClick={NavbarDisplaytwo} id="navmenuicon2"><X size={42} /></div>
    </label>
  </div>
};