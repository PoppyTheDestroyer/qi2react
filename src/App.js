import React, { Component } from "react";
// import { Col, Row, Container } from "./components/Grid";
// import Button from "./components/Button";
import Nav from "./components/Nav";
import NavMob from "./components/NavMobile";
import Spec from "./components/SpecTable";
import Meas from "./components/MeasureTable";
import FAQ from "./components/FAQ";
import Home from "./Pages/Home";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: Home,
      navbar: Nav,
      windowWidth: window.innerWidth
    };
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
  }

  renderNav() {
    if (this.state.windowWidth <= 1000) {
      return [
        <div id="mobNav">
          <NavMob
            specButton={this.specButton}
            techButton={this.techButton}
            homeButton={this.homeButton}
            faqButton={this.faqButton}
          />
        </div>
      ];
    } else {
      return [
        <div className="topNav">
          <Nav
            specButton={this.specButton}
            techButton={this.techButton}
            homeButton={this.homeButton}
            faqButton={this.faqButton}
          />
        </div>
      ];
    }
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

  specButton = event => {
    event.preventDefault();
    this.setState({
      page: Meas
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
            
              
                <img
                  src={require("./Assets/images/logo.png")}
                  alt="logo"
                  id="logo"
                />
             
                <div className="topNav">{this.renderNav()}</div>
           
          </header>
          <this.state.page
            specButton={this.specButton}
            techButton={this.techButton}
            homeButton={this.homeButton}
          />
        </div>
     
    );
  }
}

export default App;
