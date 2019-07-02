import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"

class App extends Component {
  render() {
    return (
      <Router>
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