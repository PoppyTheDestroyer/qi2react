import React, { Component } from "react";
import FAQ from "../../components/FAQ";
import Button from "../../components/Button";
import { Col, Row, Container } from "../../components/Grid";

class Freq extends Component {
  constructor() {
    super();
    this.state = {
      page: FAQ
    };
  }
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-1">
            <Button id="back" className="back">
              <i class="fa fa-caret-left" /> Back
            </Button>
          </Col>
        </Row>
        <Row>
          <Col size="md-12" className="col-centered">
            <FAQ />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Freq;