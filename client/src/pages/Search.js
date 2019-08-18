import React, { Component } from "react";
import API from '../utilities/api'
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/Search-Form";
import { List, ListItem } from "../components/List";
import ViewButton from "../components/View-Button";
import videoBG from "./assets/book-footage.mp4";
import "./assets/style.css";

class Search extends Component {
    state = {
        books: [],
        search: "",
        searchMessage: "Type in a title of a book to begin!",
        errorStyles: "",
    };

    searchBooks = query => {
        API.googleBook(query)
            .then(res => {
                let results = res.data.items
                results.map(result => {
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        cover: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.buyLink,
                        pages: result.volumeInfo.pageCount,
                    }
                    return results;
                })
                this.setState({ books: results });
                console.log(this.state.books);
            })
            .catch(() => this.setState({ message: "Please try a different book", errorStyles: "red-error" }));
    };

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
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
                        <h2 className="google-books-h1" id={this.state.errorStyles}>{this.state.searchMessage}</h2>
                    </Col>
                    <Col size="md-3" />
                    <Col size="md-6">
                        <SearchForm
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                        />
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