import React from "react";
import ReactDOM from "react-dom";
// var React = require("react");
// var ReactDOM = require("react-dom")

const name = "Hacker"

ReactDOM.render(
  <div>
    <h1 className="heading">Daaaa {name}!</h1>
    <ul>
      <li>Hack</li>
      <li>Er</li>
      <li>One</li>
    </ul>
  </div>,
  document.getElementById("root")
);
