import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.cardImage} className="card-img-top card-img" alt={props.cardTitle} />
              <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.cardDescription}</p>
                <a href={props.cardLink} className="search-btn">{props.cardButton}</a>
              </div>
        </div>
    );
}

export default Card;
