import React from "react";
import { Switch, Route, Link } from "react-router";

import Profile from "./components/profile";
import Home from "./components/home";

import "./styles/index.scss";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  );
};

export default App;
