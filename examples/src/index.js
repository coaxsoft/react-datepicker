import React from "react";
import { render } from "react-dom";
import MyComponent from "../../src";

import "./main.css";


const App = () => (
  <MyComponent/>
);

render(<App/>, document.getElementById("root"));
