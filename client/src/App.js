import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Search from './pages/Search';
import Saved from './pages/Saved';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import videoBG from './pages/assets/book-footage.mp4';

function App() {
  return (
    <Router>
      <Navbar />
      <video className="video-background" loop autoPlay playsInline muted
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        src={videoBG}>
      </video>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
      <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;
