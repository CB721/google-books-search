import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Search-Form";
import { List, ListItem } from "../components/List";
import ViewButton from "../components/View-Button";

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
                        <form>
                            <Input name="title" placeholder="Title (required)" />
                            <FormBtn>Search</FormBtn>
                        </form>
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
                </Row>
            </Container>
        );
    }
}

export default Search;