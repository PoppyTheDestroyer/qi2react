import React, { Component } from "react";
// import { Col, Row, Container } from "./components/Grid";
// import Button from "./components/Button";
import Nav from "./components/Nav";
import Spec from "./components/SpecTable";
import FAQ from "./components/FAQ";
import Home from "./Pages/Home";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: Home
    };
  }
  homeButton = event => {
    event.preventDefault();
    this.setState({
      page: Home
    });
  };

  techButton = event => {
    event.preventDefault();
    this.setState({
      page: Spec
    });
  };

  faqButton = event => {
    event.preventDefault();
    this.setState({
      page: FAQ
    });
  };

  render() {
    return (
      <div>
        <header>
          <img src={require("./Assets/images/logo.png")} alt="logo" id="logo" />
          <Nav
            homeButton={this.homeButton}
            techButton={this.techButton}
            faqButton={this.faqButton}
          />
        </header>
        <this.state.page />
      </div>
    );
  }
}

export default App;
