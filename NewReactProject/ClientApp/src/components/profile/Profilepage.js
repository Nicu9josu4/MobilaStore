import React from 'react'
import { useParams } from 'react-router-dom'
import "./Profilepage.css"


const Profilepage = () => {

    let { id } = useParams()

  return (
    <div className='profilepage'>
      <div className='profile-info-1'>
<h1>Username {} </h1>
      </div>

      <div className='profile-info-2'>

      </div>
    </div>
  )
}

export default Profilepage
