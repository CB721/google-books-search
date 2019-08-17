import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="home">
          <a href="/">Google Books Home</a>
        </li>
        <li className="search">
          <a href="/search">Search</a>
        </li>
        <li className="saved">
          <a href="/saved">Saved Books</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
