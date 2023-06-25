import React from 'react'
import './shop.css'
import Listres from "./Listres"

const List = ({results}) => {
  return (
    <div className='listcomponent'>
        {
            results.map((result, id) => {
                return <Listres result={result} key={id} />
            })
        }
    </div>
  )
}

export default List
