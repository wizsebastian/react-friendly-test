import React, { useEffect, useState, useMemo } from "react";
import TableManger from "../Table";
import TitleContainer from "../SimplyUiItems/Title";
import Search from "../Search";
import Counter from "../Counter";

import { getUsers } from "../../services/users.services";

import { Container } from "./style";

function CustomContainer() {
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState(users);
  const [counterResults, setCounterResults] = useState(0);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setCounterResults(Object.keys(data).length);
    });
  }, [setUsers]);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.login.includes(searched);
      }),
    [users, searched]
  );

  const handleSearch = (event) => {
    setSearched(event.target.value);
  };

  return (
    <Container>
      <TitleContainer text="Users" />
      <Search handle={handleSearch} />
      <TableManger data={filteredUsers} />
      <Counter value={counterResults} />
    </Container>
  );
}

export default CustomContainer;
