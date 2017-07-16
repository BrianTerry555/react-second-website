import React from "react";
import ReactDOM from "react-dom";

import "./index.css"

//import code
import Navbar from "./navbar.js";


class App extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <Navbar />
        <h1>Hello World!!!</h1>
        <p>This is a new way to create a web page with React!!!</p>
      </div>
    )
  }
}



ReactDOM.render(<App />, document.querySelector("#root"));
