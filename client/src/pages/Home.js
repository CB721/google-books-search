import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Spinner from 'react-bootstrap/Spinner';
import API from '../utilities/api';

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
    // set title
    document.title = "Google Books Search | Home";
    // get all of top books
    API.getSavedTopBooks()
      .then(res => {
        const updateMonth = parseInt(res.data[0].lastUpdated.split("T")[0].split("-")[1]);
        const updateDay = parseInt(res.data[0].lastUpdated.split("T")[0].split("-")[2]);
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        // if it is a different month
        if (updateMonth !== month + 1) {
          this.getNYBooks(res.data[0]._id);
          // if it is a different day of the same month
        } else if (updateDay < day) {
          this.getNYBooks(res.data[0]._id);
        } else {
          this.setState({
            carouselBooks: res.data[0].books
          });
        }
      });
  }
  getNYBooks = (id) => {
    API.getTopBooks()
      .then(res => {
        this.setState({
          carouselBooks: res.data
        });
        this.saveTopBooks(res.data, id);
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
  saveTopBooks = (books, _id) => {
    const data = {
      books,
      _id,
      lastUpdated: new Date()
    }
    API.saveTopBooks(data)
      .then()
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
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