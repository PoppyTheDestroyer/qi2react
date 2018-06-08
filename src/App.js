import React, { Component } from "react";
// import { Col, Row, Container } from "./components/Grid";
// import Button from "./components/Button";
import Nav from "./components/Nav";
import Spec from "./components/SpecTable";
import FAQ from "./components/FAQ";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={require("./Assets/images/logo.png")} alt="logo" id="logo" />
         <Nav />
        </header>
        <Spec />
        <FAQ />
      </div>
    );
  }
}

export default App;
