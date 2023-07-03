import React, { useEffect, useState } from 'react'
import './Tabel.css'

const FetchData = () => {

    const [ records, setRecords ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setRecords({data}))
        .catch(err => console.log(err))
    }, [])
  return (
    <div className='Tabeladmin'>
      <div className='tabel-container'>
        <div className=''>
            {
                records.map((list, index) => (
                    <div key={index} className=''>{list.id}</div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default FetchData
