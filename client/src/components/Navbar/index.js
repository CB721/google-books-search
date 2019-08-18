import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="home">
          <a href="/">Home</a>
        </li>
        <li className="search">
          <a href="/search">Library</a>
        </li>
        <li className="saved">
          <a href="/saved">Bookshelf</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
