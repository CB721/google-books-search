import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Search-Form";
import { List, ListItem } from "../components/List";
import ViewButton from "../components/View-Button";
import videoBG from "./assets/book-footage.mp4";
import "./assets/style.css";

class Search extends Component {
    state = {
        books: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7", "Book 8", "Book 9", "Book 10"]
    };
    render() {
        return (
            <Container fluid>
                <video className="video-background" loop autoPlay
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
                    <Col size="md-3" />
                    <Col size="md-6">
                        <form>
                            <Input name="title" placeholder="Title" />
                            <FormBtn>Search</FormBtn>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3" />
                    <Col size="md-6">
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                    <a href={"/books/" + book._id}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </a>
                                    <ViewButton />
                                </ListItem>
                            ))}
                        </List>
                    </Col>
                    <Col size="md-3" />
                </Row>
            </Container>
        );
    }
}

export default Search;