import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import videoBG from "./assets/book-footage.mp4";
import Spinner from 'react-bootstrap/Spinner';
import API from '../utilities/api';
import moment from "moment";

import "./assets/style.css";

class Home extends Component {
  state = {
    cardTitle: "",
    cardDescription: "",
    cardLink: "",
    cardButton: "",
    cardImage: "",
    nyTimesBooks: [],
    carouselBooks: [],
    lastUpdate: "",
  }
  UNSAFE_componentWillMount() {
    API.getSavedTopBooks()
      .then(res => {
        let originalTime = res.data[0].lastUpdated;
        let spliceTime = originalTime.slice(0, 10);
        let books = res.data[0].books;
        this.setState({ carouselBooks: books, lastUpdate: spliceTime });
      })
    setTimeout(
      function () {
        if (this.state.carouselBooks.length > 14 && this.state.lastUpdate) {
          this.checkLastUpdate();
        }
      }.bind(this), 500
    )
  }
  checkLastUpdate = () => {
    const timeDifference = moment().diff(moment(this.state.lastUpdate), 'days');
    if (timeDifference > 0) {
      this.getNYBooks();
    }
  }
  getNYBooks = () => {
    API.getTopBooks()
      .then(res => {
        this.setState({
          carouselBooks: res.data
        });
        this.saveTopBooks(res.data);
      })
      .catch((err) => console.log(err));
  }
  getGoogleBook = (nyBook) => {
    API.singleGoogleBook(nyBook)
      .then(res => {
        // console.log(res.data);
        // this.setState(state => {
        //   let book = res.data.items[0];
        //   const carouselBooks = state.carouselBooks.concat(book);
        //   return {
        //     carouselBooks
        //   };
        // })
      })
      .catch((err) => console.log(err));
  }
  saveTopBooks = (books) => {
    API.saveTopBooks(books)
      .then()
      .catch(err => console.log(err));
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
          <Col size="md-2" />
          <Col size="md-8">
          <h6 className="google-books-h1">Current New York Times Bestsellers</h6>
            {this.state.carouselBooks.length > 9 ? (
              <Carousel
                books={this.state.carouselBooks}
              />
            ) : (
                <Spinner animation="border" size="lg" id="spinner" />
              )}

          </Col>
          <Col size="md-2" />
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