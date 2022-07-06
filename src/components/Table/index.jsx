import React from "react";
import { Table } from "reactstrap";

const TableManger = ({ data }) => {

    


  return (
    <div className="principal_table">
      <h2>Users</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Login</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tbody key={item.id}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item.login}</td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default TableManger;
