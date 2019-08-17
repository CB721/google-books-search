import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import videoBG from "./assets/book-footage.mp4"
import "./assets/style.css";

class Home extends Component {
  render() {
    return (
      <Container fluid>
        <video id="background-video" loop autoPlay>
          <source src={videoBG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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