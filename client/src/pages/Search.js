import React, { Component } from "react";
import API from '../utilities/api';
import { Col, Row, Container } from "../components/Grid";
import datamuse from 'datamuse';
import SearchForm from "../components/Search-Form";
import { List } from "../components/List";
import Book from "../components/Book";
import Modal from 'react-bootstrap/Modal';
import SaveBtn from "../components/Save-Button";
import Spinner from 'react-bootstrap/Spinner'
import "./assets/style.css";

class Search extends Component {
    state = {
        books: [],
        search: "",
        searchValue: "",
        searchMessage: "Type in a title of a book to begin!",
        errorStyles: "",
        show: false,
        modalBookTitle: "",
        modalBookImg: "",
        placeHolder: "",
        showPara: "hide-para",
        uploading: false,
    };

    componentWillMount() {
        document.title = "Google Books Search | Search";
    }

    searchBooks = query => {
        this.setState({ uploading: true })
        API.googleBook(query)
            .then(res => {
                let results = res.data.items;
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
                        ISBN: result.volumeInfo.industryIdentifiers[0].identifier
                    }
                    return results;
                });
                this.setState({
                    books: results,
                    errorStyles: "",
                    searchMessage: "",
                    showPara: "hide-para",
                    uploading: false,
                });
            })
            .catch(() => this.setState({
                message: "Please try a different book",
                errorStyles: "red-error"
            })
            );
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value, searchValue: value });
        let requestLetter = this.state.searchValue;
        const valueArr = [];
        valueArr.push(requestLetter);
        let requestValue = valueArr.join("");
        this.wordSuggestion(requestValue)
    };
    // word suggestion from datamuse api
    wordSuggestion = (request) => {
        let requestURL = "/sug?s=" + request;
        if (requestURL.length > 8) {
            datamuse.request(requestURL)
                .then((res) => {
                    // api usually returns no results if the string is longer than 14 characters
                    if (requestURL.length > 20) {
                        this.setState({ placeHolder: "That is a long book!" })
                        // if less than 3 letters in search
                    } else if (requestURL.length < 10) {
                        this.setState({ placeHolder: "Find a book", showPara: "hide-para" })
                    } else {
                        // second result is usually more accurate
                        let suggestion = res[1].word.charAt(0).toUpperCase() + res[1].word.slice(1);
                        this.setState({
                            placeHolder: "Looking for " + suggestion + "?",
                            showPara: ""
                        })
                    }

                });
        }
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search);
        this.setState({ showPara: "hide-para" });
    };
    addToBookshelf = id => {
        // find the id of a book in the state that matches the id that was clicked on
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            googleID: book.id,
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
        this.setState({
            show: true,
            modalBookTitle: title,
            modalBookImg: cover
        });
    };
    closeModal = () => {
        this.setState({ show: false });
    };
    saveAndModal = (id, title, cover, ISBN) => (event) => {
        event.preventDefault();
        console.log(ISBN);
        this.addToBookshelf(id);
        this.showModal(title, cover);
    };


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="head-space" />
                        <h1 className="google-books-h1">Google Books Search</h1>
                        <h2 className="google-books-h1" id={this.state.errorStyles}>{this.state.searchMessage}</h2>
                    </Col>
                    <Col size="md-3" />
                    <Col size="md-6">
                        <h4 className={this.state.showPara}>{this.state.placeHolder}</h4>
                        <SearchForm
                            value={this.state.search}
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            placeHolder={this.state.placeHolder}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3" />
                    <Col size="md-6">
                        {this.state.uploading === false ? (
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
                                        ISBN={book.volumeInfo.industryIdentifiers[0].identifier}
                                        Button={<SaveBtn
                                            key={book.id}
                                            saveAndModal={this.saveAndModal(
                                                book.id,
                                                book.volumeInfo.title,
                                                book.volumeInfo.imageLinks.thumbnail,
                                                book.volumeInfo.industryIdentifiers[0].identifier
                                            )}
                                        />}
                                    />
                                ))}
                            </List>
                        ) : (<Spinner animation="border" size="lg" id="spinner" />)}
                    </Col>
                    <Col size="md-3" />
                </Row>
                <Row>
                    <div className="foot-space"></div>
                </Row>
                {/* Checkout modal */}
                <Modal show={this.state.show} onHide={this.closeModal} className="modal-card" variant="info">
                    <Modal.Header closeButton>
                        <Modal.Title>Library Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You have added {this.state.modalBookTitle} to your bookshelf.
                    <img src={this.state.modalBookImg} alt={this.state.modalBookTitle} className="modal-img" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn search-btn" onClick={this.closeModal}>
                            Close
                        </button>
                    </Modal.Footer>
                </Modal>
                {/* Review modal */}
            </Container>
        );
    }
}

export default Search;