import React from 'react'
import './Tabel.css'
import Records from './Data.json'


const Tabel = () => {
  return (

    <div className='Tabeladmin'>
      <div className='tabel-container'>
        <div className='tabel-headers'>
            <div className='header-tabel'>Numele</div>
            <div className='header-tabel'>Prenumele</div>
            <div className='header-tabel'>Varsta</div>
        </div>
{
    Records.map( record => {
        return (
            <div className='tabel-line' key={ record.id} >
                <div className='just-tabel'>{ record.name } </div>
                <div className='just-tabel'>{ record.surname } </div>
                <div className='just-tabel'>{ record.age } </div>
            </div>
        )
    })
}
      </div>
    </div>
  )
}

export default Tabel
