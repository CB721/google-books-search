import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from "../components/List";
import DeleteButton from "../components/Delete-Button";

class Search extends Component {
    // Initialize this.state.books as an empty array
    state = {
        books: []
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Google Books Search</h1>
                        </Jumbotron>
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book._id}>
                                    <a href={"/books/saved" + book._id}>
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