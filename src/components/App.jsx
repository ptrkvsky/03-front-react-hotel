import React from "react";
import Global from "../styles/GlobalStyle";
import { Line, ChangeQty, Close } from "../styles/components/BasketLine.js";

import Component from "./Component";

const App = () => {
  return (
    <>
      <Global />
      <div className="max-container">
        <Component />
        <Line>test</Line>
        <ChangeQty>test</ChangeQty>
        <Close>test</Close>
      </div>
    </>
  );
};

export default App;
