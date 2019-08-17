import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron d-flex align-items-center">
      {children}
    </div>
  );
}

export default Jumbotron;
