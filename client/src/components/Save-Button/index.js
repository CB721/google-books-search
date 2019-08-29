import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <button onClick={props.addToBookshelf} className="save-btn">
      Add to Bookshelf
        </button>
  );
}

export default SaveBtn;
