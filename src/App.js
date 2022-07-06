import React, { useEffect, useState } from 'react';

import TableManger from './components/Table'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        setSearched(data)
      })
  }, [])


  const handleSearch = event => {
    const { value } = event.target;  

   const search =  users.filter((user) => {
      return user.login.includes(value)
  })
    setSearched(search)
  }

  return (
    <div>
      <input onChange={handleSearch} type="text" id="search" placeholder="Search by USers" />
      <TableManger data={searched} />
    </div>
  );
}

export default App;
