import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Search from './pages/Search';
// import Saved from './pages/Saved';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
