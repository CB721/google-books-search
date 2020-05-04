import React, { Component } from "react";
import API from '../utilities/api';
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Book from "../components/Book";
import Modal from 'react-bootstrap/Modal';
import DeleteButton from "../components/Delete-Button";
import "./assets/style.css";

class Search extends Component {
    _isMounted = false;
    state = {
        books: [],
        errorStyles: "",
        modalBookTitle: "",
        giphyGif: "",
        show: false,
    };

    componentDidMount() {
        this._isMounted = true;
        this.checkBookshelf();
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    checkBookshelf = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log("Get request error: " + err))
    }
    deleteSequence = (id, title) => (event) => {
        event.preventDefault();
        this.deleteBook(id);
        this.setState({ modalBookTitle: title })
        this.showModal();
    }
    deleteBook = (id) => {
        // delete book
        API.deleteBook(id)
            .then()
            .catch(err => console.log("Delete error: " + err));
        // get the updated books
        this.checkBookshelf();
        this.setState(this.state);
    }
    
    showModal = () => {
        this.setState({ show: true });
    };
    closeModal = () => {
        this.setState({ show: false });
    }

    render() {
        if (this.state.books.length < 1) {
            return null;
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Col size="md-3" />
                        <Col size="md-6">
                            <div className="head-space" />
                            <h1 className="google-books-h1">Google Books Search</h1>
                            {this.state.books.length > 0 ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <div key={book.googleID}>
                                            <Book
                                                title={book.title}
                                                author={book.author.join(", ")}
                                                description={book.description}
                                                cover={book.cover}
                                                link={book.link}
                                                pages={book.pages}
                                                Button={<DeleteButton
                                                    key={book.id}
                                                    deleteBook={this.deleteSequence(
                                                        book._id,
                                                        book.title
                                                    )}
                                                />}
                                            />
                                        </div>
                                    ))}
                                </List>
                            ) : (<h2 className="google-books-h1">Your bookshelf is empty</h2>)}
                        </Col>
                        <Col size="md-3" />
                    </Row>
                    <Row>
                    <div className="foot-space"></div>
                    </Row>
                    <Modal show={this.state.show} onHide={this.closeModal} className="modal-card" variant="info">
                        <Modal.Header closeButton>
                            <Modal.Title>Library Card</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You have removed {this.state.modalBookTitle} from your bookshelf.
                    <img src="https://media.giphy.com/media/CpE4gXoXpTdII/giphy.gif" alt="fahrenheit 451 gif" className="modal-img" />
                        </Modal.Body>
                        <Modal.Footer>
                            <button className="btn search-btn" onClick={this.closeModal}>
                                Close
                        </button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            );
        }
    }
}

export default Search;