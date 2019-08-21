import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <button onClick={props.deleteBook} className="delete-btn">
      Delete
        </button>
  );
}

export default DeleteBtn;
