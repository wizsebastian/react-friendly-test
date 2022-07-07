import React from "react";
import { CounterStyles } from "./style";

const Counter = ({ value }) => {
  return (
    <CounterStyles>
      <hr />
      {value} results
    </CounterStyles>
  );
};

export default Counter;
