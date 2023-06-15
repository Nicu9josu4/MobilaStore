import React from 'react'
import "./Footer.css"
import { InstagramLogo, FacebookLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content-1'>
      <div className='column'>
    <p>Bucatarii</p>
    <p>Dormitoare</p>
    <p>Usi</p>
    <p>Sufragerii</p>
    <p>Altele</p>
      </div>


      <div className='column'>
    <p>Proiecte</p>
    <p>Echipa</p>
    <p>Servicii</p>
    <p>Ajutor</p>
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
