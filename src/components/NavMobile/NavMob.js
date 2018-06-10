import React, { Component } from "react";
import Button from "../Button";
import { Collapse, CardBody, Card } from "reactstrap";

class NavMob extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className="topNav navbar-right">
        <Button id="burger" onClick={this.toggle} style={{ float: "right" }}>
          <i className="fa fa-bars" />
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <div className="navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li key={10}>
                    {" "}
                    <Button id="btn1" onClick={this.props.homeButton}>
                      Home
                    </Button>
                  </li>
                  <li key={6}>
                    {" "}
                    <Button id="btn2" onClick={this.props.techButton}>
                      Technical Facts
                    </Button>
                  </li>
                  <li key={7}>
                    {" "}
                    <Button id="btn3" onClick={this.props.faqButton}>
                      FAQ
                    </Button>
                  </li>
                  <li key={8}>
                    <Button id="btn4">Photo Gallery</Button>
                  </li>
                  <li key={9}>
                    {" "}
                    <Button id="btn5">Video Gallery</Button>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default NavMob;
