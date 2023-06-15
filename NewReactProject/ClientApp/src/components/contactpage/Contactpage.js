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
    </div>



      </div>

<div className='contact-content-2'>
  <div className='coming-soon'>
COMING SOON ( MAP )
</div>
</div>


    </div>
  )
}

export default Contactpage
