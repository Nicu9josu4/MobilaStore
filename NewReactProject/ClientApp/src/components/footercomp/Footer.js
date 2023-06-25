import React from 'react'
import "./Footer.css"
import { InstagramLogo, FacebookLogo } from "phosphor-react";
import { Link } from "react-router-dom"


const scrollToTop = () => {
  window.scrollTo(0, 0)
}


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content-1'>
      <div className='column'>
      <Link to='/bucatarii'><p onClick={scrollToTop}>Bucatarii</p></Link>
      <Link to='/dormitoare'><p onClick={scrollToTop}>Dormitoare</p></Link>
      <Link to='/usi'><p onClick={scrollToTop}>Usi</p></Link>
      <Link to='/sufragerii'><p onClick={scrollToTop}>Sufragerii</p></Link>
      <Link to='/altele'><p onClick={scrollToTop}>Altele</p></Link>
      </div>


      <div className='column'>
      <Link to='/proiecte'><p onClick={scrollToTop}> Proiecte</p></Link>
      <Link to='/about'><p onClick={scrollToTop}>Echipa</p></Link>
      <Link to='/services'><p onClick={scrollToTop}>Servicii</p></Link>
      <Link to='/help'><p onClick={scrollToTop}>Ajutor</p></Link>
      </div>



      </div>

      <div className='footer-content-2'>
        <div className='column2'>
            <div className='column2-header'>
                NAME SHOP
            </div>

            <p>Adresa</p>
            <p>Numar tel</p>
            <p>Email/Gmail</p>
            <p>© 2023 nameshop all rights reserved</p>
        </div>
      </div>


      <div className='footer-content-3'>
        <div className='column3-header'>
            Retele de socializare
        </div>

        <div className='column3'>
            <InstagramLogo className='col-icon'/>
            <FacebookLogo className='col-icon'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
