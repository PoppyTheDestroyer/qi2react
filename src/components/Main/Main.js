import React from "react";
import { Col, Row, Container } from "../Grid";

const Main = props => (
  <Container>
    <div className="background">
      <section>
        <div className="page_content">
          <Row>
            <Col size="md-6">
              <h2 className="mob_center">
                We’ve transformed article thread inspection from minutes to
                seconds.
              </h2>
            </Col>
            <Col size="md-6">
              <div className="homesignup">
                <h3>
                  Sign up to receive our free downloadable LOTIS QXC whitepaper.
                </h3>
                <form method="post">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="NAME"
                      name="name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="EMAIL"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="btn btn-home "
                    />
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  </Container>
);

export default Main;
