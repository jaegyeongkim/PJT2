import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Design from "views/Front/design.js";
import ActorList from "views/Front/Actor/ActorList.js";
import ActorDetail from "views/Front/Actor/ActorDetail.js";
import Category from "views/Front/Category/Category.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/design" component={Design} />
      <Route path="/actor-list" component={ActorList} />
      <Route path="/actor-detail/:name" component={ActorDetail} />
      <Route path="/category" component={Category} />

      {/* !!!! 맨 밑에 있어야 동작합니다. */}
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
