import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DeleteButton from "../components/Delete-Button";
import videoBG from "./assets/book-footage.mp4";
import "./assets/style.css";

class Search extends Component {
    // Initialize this.state.books as an empty array
    state = {
        books: []
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
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                    <a href={"/books/saved/" + book._id}>
                                        <strong>
                                            {book.title} by {book.author}
                                        </strong>
                                    </a>
                                    <DeleteButton />
                                </ListItem>
                            ))}
                        </List>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;