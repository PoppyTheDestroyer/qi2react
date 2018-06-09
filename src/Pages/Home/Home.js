import React, { Component } from "react";
import Main from "../../components/Main";
import { Col, Row, Container } from "../../components/Grid";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      page: Main
    };
  }
  render() {
    return (
      <Container>
        <Main />
      </Container>
    );
  }
}

export default Home;
