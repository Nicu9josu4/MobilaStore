import React from 'react'
import "./Contactpage.css"


const Contactpage = () => {
  return (
    <div className='contactpage'>
      <div className='contact-content-1'>

        <div className='contact-info'>
          <div className='cinfo-header'>
            Adrese si numere de telefon:
          </div>

          <div className='c-adrese'>
             <div className='c-adress'>
              adres1 (strada Stefan cel Mare)
              </div>

              <div className='c-adress'>
              adres2
              </div>
          </div>

          <div className='c-numbers'>
<div className='c-number'>
  number1 ( +37368483577)
  </div>
          </div>

          <div className='c-mails'>
<div className='c-mail'>
  mail1 (shopname@gmail.com)
</div>
          </div>

        </div>


      <div className='c-form'>
        <div className='c-form-header'>
          Consulta-ne gratuit!
        </div>

      <input type='text' placeholder='Nume'></input>
      <input type='text' placeholder='Prenume'></input>
      <input type='text' placeholder='Telefon'></input>

      <div className='c-buttons'>
        <div className='c-button'>
          Trimite
        </div>
      </div>
    </div>



      </div>

<div className='contact-content-2'>
  <div className='c-map'>
  <iframe
   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2723.667245529167!2d28.719369476826795!3d46.948578733184526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c98025dc65dd95%3A0xe7b2f7550c5497a6!2sAqua%20Magic!5e0!3m2!1sru!2s!4v1687014417077!5m2!1sru!2s" 
  width="1920" 
  height="1080" 
  style={{border: "1px solid black" }} 
  allowfullscreen=""
   loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">\
    </iframe>
</div>
</div>


    </div>
  )
}

export default Contactpage
