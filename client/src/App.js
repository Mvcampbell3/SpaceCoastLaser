import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import Header from "./components/Header"

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={props =>
            <Home />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
