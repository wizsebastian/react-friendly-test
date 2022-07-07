import React from "react";
import { Table } from "reactstrap";
import { FcReading } from "react-icons/fc";

import { Tr, Avatar, TableContainer, EmptyState } from "./style";

const TableManger = ({ data }) => {
  const isEmpty = Object.keys(data).length;

  return (
    <div className="principal_table">
      <TableContainer>
        <Table size="sm" className="table" borderless hover>
          <thead>
            <Tr>
              <th>Avatar</th>
              <th scope="row">#</th>
              <th>Login</th>
            </Tr>
          </thead>
          {isEmpty >  0 ? (
            data.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>
                    <Avatar
                      src={`${item.avatar_url}`}
                      alt={`avatar-${item.login}`}
                    />
                  </td>
                  <th scope="row">{item.id}</th>
                  <td>{item.login}</td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <EmptyState>
                <FcReading size="4em" />
                <br />
                Sorry no data to load.
              </EmptyState>
            </tbody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableManger;
