import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./style.css";

function TopTenCarousel(props) {
    console.log(props)
    return (
        <Carousel className="top-books-carousel">
            {props.books.map(book => (
                <Carousel.Item
                    key={book.id}
                >
                    <img
                        className="d-block w-100"
                        id="carousel-images"
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt={book.volumeInfo.title}
                        style={{ height: "300px" }}
                    />
                    <Carousel.Caption>
                        <h3>{book.volumeInfo.title}</h3>
                        <h5>{book.volumeInfo.authors}</h5>
                        <p
                            className="best-description"
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