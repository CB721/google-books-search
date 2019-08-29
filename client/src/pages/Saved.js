import React, { Component } from "react";
import API from '../utilities/api';
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import Book from "../components/Book";
import Modal from 'react-bootstrap/Modal';
import DeleteButton from "../components/Delete-Button";
import videoBG from "./assets/book-footage.mp4";
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
                this.setState({ books: res.data }, () => {
                    console.log(this.state.books);
                })
            )
            .catch(err => console.log("Get request error: " + err))
            .finally(console.log("here are the saved books: \n '" + this.state.books + " '"));
    }
    deleteSequence = (id, title) => {
        this.deleteBook(id);
        this.setState({ modalBookTitle: title })
        this.getGiphy();
        this.showModal();
    }
    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res =>
                this.setState({ books: res.data }, () => {
                    console.log("Updated books after one is deleted: " + this.state.books);
                })
            )
            .catch(err => console.log("Delete error: " + err))
            .finally(console.log("here are the updated saved books: " + this.state.books));
    }
    getGiphy = () => {
        API.giphy()
            .then(res => this.setState({ giphyGif: res.data }))
            .catch(err => console.log(err));
    };
    showModal = () => {
        this.setState({ show: true });
        this.checkBookState();
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
                    <video className="video-background" loop autoPlay muted playsInline
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
                            {console.log("Inside Saved.render()")}
                            {console.log(this.state.books)}
                            {this.state.books.length > 0 ? (
                                <List>
                                    {this.state.books.map(book => (
                                        <div>
                                            <Book
                                                key={book.id}
                                                title={book.title}
                                                author={book.authors}
                                                description={book.description}
                                                cover={book.cover}
                                                link={book.link}
                                                pages={book.pages}
                                                Button={<DeleteButton
                                                    key={book.id}
                                                    deleteBook={this.deleteBook(book.id)}
                                                />}
                                            />
                                        </div>
                                    ))}
                                </List>
                            ) : (<h2 className="google-books-h1">Your bookshelf is empty</h2>)}
                        </Col>
                    </Row>
                    <Modal show={this.state.show} onHide={this.closeModal} className="modal-card" variant="info">
                        <Modal.Header closeButton>
                            <Modal.Title>Library Card</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            You have removed {this.state.modalBookTitle} from your bookshelf.
                    <img src={this.state.giphyGif} alt="fahrenheit 451 gif" className="modal-img" />
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