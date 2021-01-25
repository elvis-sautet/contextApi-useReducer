import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact>
          <Header />
          <div className="app">
            <Home />
          </div>
        </Route>
        <div className="app">
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
