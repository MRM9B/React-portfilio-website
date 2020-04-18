import React from "react";
import "./App.css";
import Home from "./Home";
import Services from "./services";
import Portfolio from "./portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./contact";
function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <hr />
        <Services />
        <br />
        <div className="space"></div>
        <hr />
        <Portfolio />
        <hr />
        <Contact />
        <div className="copyright">All rights are reserved © 2020</div>
      </div>
    </Router>
  );
}

export default App;
