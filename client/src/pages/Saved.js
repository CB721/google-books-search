import React, { Component } from "react";
import API from '../utilities/api';
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Book from "../components/Book";
// import DeleteButton from "../components/Delete-Button";
import videoBG from "./assets/book-footage.mp4";
import "./assets/style.css";

class Search extends Component {
    _isMounted = false;
    state = {
        books: [],
        errorStyles: "",
    };

    componentDidMount() {
        this._isMounted = true;
        this.checkBookshelf();
    }

    checkBookshelf = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data }, () => {
                    console.log(this.state.books);
                })
            )
            .catch(err => console.log("Get request error: " + err))
            .finally(console.log("here are the saved books: " + this.state.books));
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    

    render() {
        return (
            <Container fluid>
                <video className="video-background" loop autoPlay playsInline
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
                        {this.state.books.length < 1 ? (
                            <List>
                            {this.state.books.map(book => (
                                <Book
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    cover={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                    pages={book.volumeInfo.pageCount}
                                />
                                // place delete button for each saved book
                            ))}
                        </List>
                        ) : (<h2 className="google-books-h1">Your bookshelf is empty</h2>)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;