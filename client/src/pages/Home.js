import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import videoBG from "./assets/book-footage.mp4"
import "./assets/style.css";

class Home extends Component {
  state = {
    cardTitle: "",
    cardDescription: "",
    cardLink: "",
    cardButton: "",
    cardImage: "",
  }
  render() {
    return (
      <Container fluid>
        <video className="video-background" loop autoPlay playsInline muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src={videoBG}>
        </video>
        <Row>
          <Col size="md-12">
            <div className="head-space" />
            <h1 className="google-books-h1">Google Books Search</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            <Carousel

            />
          </Col>
          <Col size="md-3" />
        </Row>
        <Row>
          <Col size="md-3" />
          <Col size="md-3">
            <Card cardTitle="Find a book" cardImage="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" cardDescription="Search to find a book." cardLink="/search" cardButton="Search" />
          </Col>
          <Col size="md-3">
            <Card cardTitle="Your bookshelf" cardImage="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2653&q=80" cardDescription="Check out your saved books." cardLink="/saved" cardButton="Bookshelf" />
          </Col>
          <Col size="md-3" />
        </Row>
        <Row>
          <div className="foot-space"></div>
        </Row>
      </Container>
    );
  }
}

export default Home;