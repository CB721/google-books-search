import React, { Component } from "react";
import API from '../utilities/api';
import { Col, Row, Container } from "../components/Grid";
import SearchForm from "../components/Search-Form";
import { List } from "../components/List";
import Book from "../components/Book";
import Modal from 'react-bootstrap/Modal'
import videoBG from "./assets/book-footage.mp4";
import "./assets/style.css";

class Search extends Component {
    state = {
        books: [],
        search: "",
        searchMessage: "Type in a title of a book to begin!",
        errorStyles: "",
        show: false,
        modalBookTitle: "",
        modalBookImg: "",
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
                        link: result.volumeInfo.infoLink,
                        pages: result.volumeInfo.pageCount,
                    }
                    return results;
                })
                this.setState({ books: results, errorStyles: "", searchMessage: "" });
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

    addToBookshelf = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            _id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            cover: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
            pages: book.volumeInfo.pageCount
        })
            .then(() => this.searchBooks());
    };
    showModal = (title, cover) => {
        this.setState({ show: true, modalBookTitle: title, modalBookImg: cover });
    };
    closeModal = () => {
        this.setState({ show: false });
    }
    saveAndModal = (id, title, cover) => {
        this.addToBookshelf(id);
        this.showModal(title, cover);
    };

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
                                <Book
                                    key={book.id}
                                    _id={book.id}
                                    title={book.volumeInfo.title}
                                    author={book.volumeInfo.authors}
                                    description={book.volumeInfo.description}
                                    cover={book.volumeInfo.imageLinks.thumbnail}
                                    link={book.volumeInfo.infoLink}
                                    pages={book.volumeInfo.pageCount}
                                    Button={() => (
                                        <button
                                            onClick={() => this.saveAndModal(book.id, book.volumeInfo.title, book.volumeInfo.imageLinks.thumbnail)}
                                            className="btn search-btn">
                                            Add to bookshelf
                                        </button>
                                    )}
                                />
                            ))}
                        </List>
                    </Col>
                    <Col size="md-3" />
                </Row>
                {/* modal content here */}
                <Modal show={this.state.show} onHide={this.closeModal} className="modal-card">
                    <Modal.Header closeButton>
                        <Modal.Title>Library Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You have added {this.state.modalBookTitle} to your bookshelf.
                    <img src={this.state.modalBookImg} alt={this.state.modalBookTitle} className="modal-img" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn search-btn" variant="primary" onClick={this.closeModal}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default Search;