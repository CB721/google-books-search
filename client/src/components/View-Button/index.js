import React from "react";
import "./style.css";

function ViewButton(props) {
  return (
    <span className="view-button" {...props} role="button" tabIndex="0">
      View
    </span>
  );
}

export default ViewButton;
