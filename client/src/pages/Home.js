import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Google Books Search</h1>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        );
      }
}

export default Home;