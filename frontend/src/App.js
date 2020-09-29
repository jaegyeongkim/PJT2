// react
import React, { useState, useEffect } from "react";
import Axios from "axios";
// hook
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// hook
import { CommonContext } from "./context/CommonContext";
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Design from "views/Front/design.js";
import ActorSearch from "views/Front/Actor/ActorSearch.js";
import ActorSearchResult from "views/Front/Actor/ActorSearchResult.js";
import ActorDetail from "views/Front/Actor/ActorDetail.js";
import Category from "views/Front/Category/Category.js";
import Introduce from "views/Front/Introduce/introduce.js";
import Aboutus from "views/Front/AboutUs/aboutus.js";
import License from "views/Front/License/license.js";
import SignupPage from "views/SignupPage/SignupPage.js";
import Contactus from "views/Front/ContactUs/contactus";

// import Introduce from "views/Front/Introduce/introduce.js";

var hist = createBrowserHistory();

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

// app

// const getProductDatas = () => {
//   setProductDatas(1);
// };
// useEffect(() => {
//   getProductDatas();
// }, []);

const App = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || []);
  }, []);
  // UseState 등록
  const [actorsData, setActorsData] = useState([]);
  const [movieData, setMovieData] = useState([]);
  const [genreData, setGenreData] = useState([]);
  // CommonContext로 사용하고 싶은 데이터 등록하면 됩니다.

  // 배우 데이터

  async function getActorDatas() {
    Axios.get("https://j3b206.p.ssafy.io/api/actor/").then(function (res) {
      setActorsData(res.data);
    });
  }
  async function getMovieDatas() {
    Axios.get("https://j3b206.p.ssafy.io/api/movie/").then(function (res) {
      setMovieData(res.data);
    });
  }

  useEffect(() => {
    getActorDatas();
    getMovieDatas();
  }, []);

  return (
    // CommonCotext로 사용하고 싶은 데이터 등록하면 됩니다.
    <CommonContext.Provider
      value={{
        actorsData,
        setActorsData,
        movieData,
        setMovieData,
      }}
    >
      <Router history={hist}>
        <Switch>
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/design" component={Design} />
          <Route path="/actor-search" component={ActorSearch} />
          <Route
            path="/actor-search-result/:name"
            component={ActorSearchResult}
          />
          {/* <Route
            path="/actor-search-result/:name/detail"
            component={ActorDetail}
          /> */}
          <Route path="/actor-detail/:name" component={ActorDetail} />
          <Route path="/category" component={Category} />
          <Route path="/introduce" component={Introduce} />
          <Route path="/about-us" component={Aboutus} />
          <Route path="/license" component={License} />
          <Route path="/signup-page" component={SignupPage} />
          <Route path="/contact-us" component={Contactus} />

          {/* !!!! 맨 밑에 있어야 동작합니다. */}
          <Route path="/" component={Components} />
        </Switch>
      </Router>
    </CommonContext.Provider>
  );
};

export default App;
