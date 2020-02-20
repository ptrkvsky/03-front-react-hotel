import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useBars from "../hooks/useBars";

import Global from "../styles/GlobalStyle";
import { AppContainer } from "../styles/components/App.js";

import Header from "./Header";
import Home from "./Home";
import BarPageDetail from "./bar/BarPageDetail";
import MePage from "./MePage";

const App = () => {
  const [bars, setBars] = useBars();
  return (
    <Router>
      <Global />
      <AppContainer className="max-container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home bars={bars} />
          </Route>
          <Route exact path="/me">
            <MePage />
          </Route>
          <Route path="/bar/:id">
            <BarPageDetail bars={bars} setBars={setBars} />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
