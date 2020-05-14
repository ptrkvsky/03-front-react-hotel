import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useBars from "../hooks/useBars";
import useHotel from "../hooks/useHotels";
import useCategoriesChambre from "../hooks/useCategoriesChambre";
import HotelDetail from '../components/hotel/HotelDetail';
import PageNum from './PageNum';

import Global from "../styles/GlobalStyle";
import { AppContainer } from "../styles/components/App.js";

import Header from "./Header";
import Home from "./Home";
import MePage from "./MePage";


const App = () => {

  const [bars, setBars] = useBars();
  const [hotels, setHotels] = useHotel();
  const [categoriesChambre, setCategoriesChambre] = useCategoriesChambre();

  return (
    <Router>
      <Global />
      <AppContainer className="">
        <Header />
        <Switch>
          <Route path="/hotels/pages/:id">
            <PageNum hotels={hotels} categoriesChambre={categoriesChambre} />
          </Route>
          <Route exact path="/">
            <Home setHotels={setHotels} categoriesChambre={categoriesChambre} hotels={hotels} />
          </Route>
          <Route exact path="/me">
            <MePage />
          </Route>
          <Route exact path="/hotel/:id">
            <HotelDetail />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
