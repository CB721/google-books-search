import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <button type="button" onClick={props.saveAndModal} className="save-btn">
      Add to Bookshelf
        </button>
  );
}

export default SaveBtn;
