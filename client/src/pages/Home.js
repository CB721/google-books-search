import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import videoBG from "./assets/book-footage.mp4";
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
  }
  UNSAFE_componentWillMount() {
    // get nytimes top Books 
    API.getTopBooks()
      .then(res => {
        let results = res.data.results.books;
        results.map(result => {
          result = {
            rank: result.rank,
            isbn: result.primary_isbn13
          }
          return results;
        });
        this.setState({
          nyTimesBooks: results,
        });
      })
      .catch((err) => console.log(err));
    if (this.state.nyTimesBooks.length > 9) {
      this.getTopBooks();
    } else {
      setTimeout(
        function () {
          this.getTopBooks();
        }.bind(this), 1000
      )
    };
  }
  getTopBooks = () => {
    const nyBooks = this.state.nyTimesBooks;
    const googleSearch = this.getGoogleBook
    if (nyBooks) {
      nyBooks.forEach(function (nyBook) {
        const search = nyBook.title + " " + nyBook.author;
        googleSearch(search);
      })
    }
  }
  getGoogleBook = (nyBook) => {
    API.singleGoogleBook(nyBook)
      .then(res => {
        // let book = res.data.items[0];
        // this.setState({
        //   carouselBooks: this.state.carouselBooks.concat(book)
        // })
        // this.setState({
        //   carouselBooks: [
        //     ...this.state.carouselBooks,
        //     res.data.items[0]
        //   ]
        // })
        this.setState(state => {
          let book = res.data.items[0];
          const carouselBooks = state.carouselBooks.concat(book);
          return {
            carouselBooks
          };
        })
      })
      .catch((err) => console.log(err));
  }

  checkState = () => {
    console.log(this.state.carouselBooks);
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
            <button onClick={this.checkState}>Check state</button>
            <h1 className="google-books-h1">Google Books Search</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-3" />
          <Col size="md-6">
            {this.state.carouselBooks.length > 14 ? (
              <Carousel
                books={this.state.carouselBooks}
              />
            ) : (
                <Spinner animation="border" size="lg" id="spinner" />
              )}

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