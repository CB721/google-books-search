import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

function TopTenCarousel(props) {
    return (
        <Carousel className="top-books-carousel">
            {props.books.map(book => (
                <Carousel.Item
                    key={book.id}
                >
                    <img
                        className="d-block w-50 mr-auto ml-auto"
                        id="carousel-images"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                        style={{ height: "300px" }}
                    />
                    <Carousel.Caption className="carousel-text-section">
                        <h3
                            className="carousel-text"
                        >
                            {book.volumeInfo.title}
                        </h3>
                        <h5
                            className="carousel-text"
                        >
                            {book.volumeInfo.authors}
                        </h5>
                        <p
                            className="carousel-text"
                        >
                            {book.volumeInfo.description}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default TopTenCarousel;