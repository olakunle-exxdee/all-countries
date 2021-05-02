import React from "react";
import FetchData from "../components/Main/FetchData";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Country from "../components/Country/Country";

const MainPage = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <FetchData />
          </Route>
          <Route exact path="/country/:id">
            <Country />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MainPage;
