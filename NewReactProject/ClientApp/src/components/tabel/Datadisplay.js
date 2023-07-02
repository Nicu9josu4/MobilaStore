import React from 'react';
// import Records from "./Data.json"
import "./Datadisplay.css"
import DynamicTable from "./DynamicTable.js"

const Datadisplay = () => {




    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('./Data.json');
    //       const data = await response.json();
    //       setUsers(data);
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);

    return (
        <div className='Datadisplay'><DynamicTable /></div>
        // <div className='Datadisplay'>
        //     <div className='data-container'>
        //   <h1>User List</h1>
        //   {Records.map( user => (
        //     <div className="user-card" key={user.id}>
        //       <h2>User ID: {user.id}</h2>
        //       <p>Name: {user.name}</p>
        //       <p>Surname: {user.surname}</p>
        //       <p>Age: {user.age}</p>
        //     </div>
        //   ))}
        //   </div>
        // </div>
      );
};

export default Datadisplay;