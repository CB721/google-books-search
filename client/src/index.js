import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
// import { register } from "./registerServiceWorker";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
// register();
registerServiceWorker();
