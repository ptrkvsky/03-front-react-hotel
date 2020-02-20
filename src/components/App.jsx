import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Global from "../styles/GlobalStyle";
import { AppContainer } from "../styles/components/App.js";

import Component from "./Component";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Global />
      <AppContainer className="max-container">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/component" component={Component} />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
