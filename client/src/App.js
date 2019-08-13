import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Search from './components/Search';
import Saved from './components/Saved';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    )
  }
}

export default App;
