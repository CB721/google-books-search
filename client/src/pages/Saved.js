import React, { Component } from "react";
import API from '../utilities/api';
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Book from "../components/Book";
// import DeleteButton from "../components/Delete-Button";
import videoBG from "./assets/book-footage.mp4";
import "./assets/style.css";

class Search extends Component {
    state = {
        books: [],
        errorStyles: "",
    };

    componentDidMount() {
        this.checkBookshelf();
    }

    checkBookshelf = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, errorStyles: "" })
            )
            .catch(() => this.setState({ errorStyles: "red-error" }));
            console.log(this.state.books);
    }

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
                                <Book
                                    key={book.id}
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    cover={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                    pages={book.volumeInfo.pageCount}
                                />
                            ))}
                        </List>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;