import React, { useState } from 'react'
import './Searchbar.css'

import { FaSearch } from "react-icons/fa"
// import List from './List'

const Searchbar = ({setResults}) => {

    const [input, setInput] = useState("");

    // const fetchData = (value) => {
    //     fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json => {
    //         const results = json.filter((user) => {
    //             return value && user && user.name && user.name.toLowerCase().includes(value);
    //         });
    //         setResults(results);
    //     });
    // }

    const handleChange = (value) => {
        setInput(value)
        // fetchData(value)
    }
  return (
    <div className='searchbar'>
      <FaSearch id="search-icon" />
      <input placeholder='Cauta...' value={input}
       onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}

export default Searchbar
